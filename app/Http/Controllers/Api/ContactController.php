<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactMessageMail;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Store an incoming contact message and notify the site owner.
     */
    public function store(StoreContactRequest $request): JsonResponse
    {
        $message = ContactMessage::create([
            'name' => $request->string('name'),
            'email' => $request->string('email'),
            'subject' => $request->string('subject'),
            'message' => $request->string('message'),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        // Send an admin notification. Failures here must not break the
        // user-facing success response — the message is already persisted.
        try {
            $recipient = config('mail.contact_recipient');

            if ($recipient) {
                Mail::to($recipient)->send(new ContactMessageMail($message));
            }
        } catch (\Throwable $e) {
            Log::warning('Contact notification email failed to send.', [
                'contact_message_id' => $message->id,
                'error' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => "Thanks for reaching out, {$message->name}! I'll get back to you shortly.",
        ], 201);
    }
}
