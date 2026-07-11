<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#0a0a0f">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- Primary Meta Tags --}}
    <title>Hani Murtaja — Backend Software Engineer & Laravel Expert</title>
    <meta name="title" content="Hani Murtaja — Backend Software Engineer & Laravel Expert">
    <meta name="description" content="Backend Software Engineer with 5+ years building scalable Laravel & PHP applications, REST APIs, and SaaS platforms. Vue.js developer specializing in clean architecture, performance, and database design.">
    <meta name="keywords" content="Hani Murtaja, Backend Developer, Laravel Expert, PHP Developer, Vue.js Developer, REST API, Software Engineer, SaaS, Web Developer">
    <meta name="author" content="Hani Murtaja">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{{ config('app.url') }}">

    {{-- Open Graph / Facebook --}}
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ config('app.url') }}">
    <meta property="og:title" content="Hani Murtaja — Backend Software Engineer & Laravel Expert">
    <meta property="og:description" content="Backend Software Engineer with 5+ years building scalable Laravel & PHP applications, REST APIs, and SaaS platforms.">
    <meta property="og:image" content="{{ config('app.url') }}/images/og-image.svg">
    <meta property="og:site_name" content="Hani Murtaja">

    {{-- Twitter --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="{{ config('app.url') }}">
    <meta name="twitter:title" content="Hani Murtaja — Backend Software Engineer & Laravel Expert">
    <meta name="twitter:description" content="Backend Software Engineer with 5+ years building scalable Laravel & PHP applications, REST APIs, and SaaS platforms.">
    <meta name="twitter:image" content="{{ config('app.url') }}/images/og-image.svg">

    {{-- Favicon --}}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="apple-touch-icon" href="/images/profile.svg">

    {{-- Fonts: Inter --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    {{-- Structured Data (JSON-LD) --}}
    <script type="application/ld+json">
    {
        "@@context": "https://schema.org",
        "@@type": "Person",
        "name": "Hani Murtaja",
        "url": "{{ config('app.url') }}",
        "image": "{{ config('app.url') }}/images/profile.svg",
        "jobTitle": "Backend Software Engineer",
        "description": "Backend Software Engineer with 5+ years of experience in Laravel, PHP, Vue.js and REST APIs.",
        "email": "mailto:mortajahany@gmail.com",
        "telephone": "+201096591568",
        "sameAs": [
            "https://github.com/HaniMurtaja",
            "https://www.linkedin.com/in/hanimurtaja/"
        ],
        "alumniOf": {
            "@@type": "CollegeOrUniversity",
            "name": "The Islamic University of Gaza"
        },
        "knowsAbout": ["PHP", "Laravel", "Vue.js", "REST APIs", "MySQL", "PostgreSQL", "Redis", "AWS", "Software Architecture"]
    }
    </script>

    @vite(['resources/css/app.css', 'resources/js/main.ts'])
</head>
<body class="bg-[#0a0a0f] text-slate-200 antialiased">
    {{-- Initial paint loader (replaced once Vue mounts) --}}
    <div id="app-loader" class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]">
        <div class="h-12 w-12 animate-spin rounded-full border-2 border-slate-700 border-t-indigo-500"></div>
    </div>

    <noscript>
        <div style="padding:2rem;text-align:center;font-family:sans-serif;color:#e2e8f0;">
            This portfolio requires JavaScript. Please enable it, or reach me at
            <a href="mailto:mortajahany@gmail.com" style="color:#818cf8;">mortajahany@gmail.com</a>.
        </div>
    </noscript>

    <div id="app"></div>
</body>
</html>
