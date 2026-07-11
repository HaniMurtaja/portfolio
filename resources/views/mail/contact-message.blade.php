@component('mail::message')
# New Contact Message

You received a new message through your portfolio contact form.

**Name:** {{ $contact->name }}
**Email:** {{ $contact->email }}
**Subject:** {{ $contact->subject }}
**Received:** {{ $contact->created_at->format('M j, Y g:i A') }}

@component('mail::panel')
{{ $contact->message }}
@endcomponent

@component('mail::button', ['url' => 'mailto:'.$contact->email])
Reply to {{ $contact->name }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
