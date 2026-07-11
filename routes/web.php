<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| The Vue single-page application is mounted from a single Blade entry point.
| A catch-all route hands every non-API path to the SPA so Vue Router can
| resolve it client-side. Static files in `public/` (robots.txt, sitemap.xml,
| resume PDF, built assets) are served directly by the web server.
|
*/

Route::view('/{any?}', 'app')->where('any', '^(?!api).*$');
