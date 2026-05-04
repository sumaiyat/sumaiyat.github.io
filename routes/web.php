<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

Route::get('/', function () {
    return redirect('/lovable');
});

Route::get('/lovable/{path?}', function (?string $path = null) {
    $basePath = public_path('lovable');
    $requestedPath = $path ? $basePath . DIRECTORY_SEPARATOR . $path : $basePath . DIRECTORY_SEPARATOR . 'index.html';

    if ($path && File::exists($requestedPath) && File::isFile($requestedPath)) {
        return response()->file($requestedPath);
    }

    return response()->file($basePath . DIRECTORY_SEPARATOR . 'index.html');
})->where('path', '.*');

Route::post('/contact', function (Request $request) {
    $data = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'message' => 'required|string',
    ]);

    // For now just log the message — replace with Mail::to(...)->send(...) as needed
    logger()->info('Contact form submitted', $data);

    return back()->with('status', 'Message sent successfully.');
})->name('contact.send');
