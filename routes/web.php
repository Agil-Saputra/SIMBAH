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

        // Kategori Routes
        Route::prefix('kategori')->name('kategori.')->group(function () {
            Route::get('/', [Administrator\KategoriController::class, 'index'])->name('index');
            Route::post('/', [Administrator\KategoriController::class, 'store'])->name('store');
            Route::patch('/edit/{kategori}', [Administrator\KategoriController::class, 'update'])->name('update');
            Route::delete('/delete/{kategori}', [Administrator\KategoriController::class, 'destroy'])->name('delete');
        });

        // Nasabah Routes
        Route::prefix('nasabah')->name('nasabah.')->group(function () {
            Route::get('/', [Administrator\NasabahController::class, 'index'])->name('index');
            Route::post('/', [Administrator\NasabahController::class, 'store'])->name('store');
            Route::patch('/edit/{user}', [Administrator\NasabahController::class, 'update'])->name('update');
            Route::delete('/delete/{user}', [Administrator\NasabahController::class, 'destroy'])->name('delete');
        });

        // Kelola Sampah
        Route::prefix('kelola-sampah')->name('kelolaSampah.')->group(function () {
            Route::get('/', [Administrator\KelolaSampahController::class, 'index'])->name('index');
            Route::post('/', [Administrator\KelolaSampahController::class, 'store'])->name('store');
            Route::post('/update/{sampah}', [Administrator\KelolaSampahController::class, 'update'])->name('update');
            Route::delete('/delete/{sampah}', [Administrator\KelolaSampahController::class, 'destroy'])->name('delete');
        });
        Route::get('/keuangan', [Administrator\KeuanganController::class, 'index'])->name('keuangan');

        // Logout Route
        Route::post('/logout', [Administrator\LogoutController::class, 'index'])->name('logout');
    });

    // Profile Routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
              

require __DIR__.'/auth.php';
