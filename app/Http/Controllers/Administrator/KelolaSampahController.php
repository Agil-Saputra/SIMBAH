<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KelolaSampahController extends Controller
{
    public function index(){
        return Inertia::render('Administrator/KelolaSampah');
    } 
}
