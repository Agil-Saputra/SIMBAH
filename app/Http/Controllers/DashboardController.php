<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Sampah;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $sampah = Sampah::where('user_id', auth()->user()->id)->with(['user', 'kategori'])->orderBy('id','desc')->get();
        return Inertia::render('Dashboard',compact('sampah'));  

    }
}
