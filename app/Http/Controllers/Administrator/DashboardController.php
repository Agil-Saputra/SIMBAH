<?php

namespace App\Http\Controllers\Administrator;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Sampah;
use App\Models\Kategori;
use Flowframe\Trend\Trend;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Flowframe\Trend\TrendValue;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index(){
        $endDate = date('Y-m-d');
        $startDate = date('Y-m-d', strtotime("-7days", strtotime($endDate)));
        $endDate = Carbon::parse($endDate)->endOfDay();
        $startDate = Carbon::parse($startDate)->startOfDay();
        $data = Trend::model(Sampah::class)
            ->between(
                start: $startDate,
                end: $endDate,
            )           
            ->perDay()
            ->sum('total_sampah');
        $datasets = [
            'labels' => $data->map(fn(TrendValue $value) => $value->date),
            'data' => $data->map(fn(TrendValue $value) => $value->aggregate),
        ];
        $totalNasabah = User::where('role', 'user')->count();
        $totalKategori = Kategori::count();
        $totalSampah = Sampah::sum('total_sampah');
        return Inertia::render('Administrator/Dashboard',compact('datasets','totalNasabah','totalKategori','totalSampah'));  
    } 
}   
