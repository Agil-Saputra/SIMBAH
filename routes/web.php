<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Administrator;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Homepage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('/');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/administrator/login', [Administrator\LoginController::class, 'index'])->middleware('guest');
Route::post('/administrator/login', [Administrator\LoginController::class, 'store'])->name('administrator.login')
;
Route::middleware('auth')->group(function () {
    Route::prefix('administrator')->name('administrator.')->group(function () {     
        Route::get('/dashboard', [Administrator\DashboardController::class, 'index'])->name('dashboard');
        Route::get('/kategori', [Administrator\KategoriController::class, 'index'])->name('kategori');
        Route::get('/nasabah', [Administrator\NasabahController::class, 'index'])->name('nasabah');
    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
