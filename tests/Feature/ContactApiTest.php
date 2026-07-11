<?php

namespace Tests\Feature;

use App\Mail\ContactMessageMail;
use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_valid_message_is_stored_and_notification_is_sent(): void
    {
        Mail::fake();

        $payload = [
            'name' => 'Jane Recruiter',
            'email' => 'jane@example.com',
            'subject' => 'Interview opportunity',
            'message' => 'We would love to talk to you about a role.',
        ];

        $response = $this->postJson('/api/contact', $payload);

        $response->assertCreated()
            ->assertJson(['success' => true]);

        $this->assertDatabaseHas('contact_messages', [
            'email' => 'jane@example.com',
            'subject' => 'Interview opportunity',
        ]);

        Mail::assertSent(ContactMessageMail::class);
    }

    public function test_validation_errors_are_returned_for_invalid_input(): void
    {
        $response = $this->postJson('/api/contact', [
            'name' => 'A',
            'email' => 'not-an-email',
            'subject' => '',
            'message' => 'too short',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'email', 'subject', 'message']);

        $this->assertSame(0, ContactMessage::count());
    }

    public function test_the_honeypot_field_blocks_spam_submissions(): void
    {
        $response = $this->postJson('/api/contact', [
            'name' => 'Spam Bot',
            'email' => 'spam@example.com',
            'subject' => 'Cheap watches',
            'message' => 'Buy now at a great discount today!',
            'website' => 'http://spam.example',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['website']);

        $this->assertSame(0, ContactMessage::count());
    }
}
