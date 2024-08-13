<?php

namespace App\Http\Controllers\Administrator;

use App\Models\Sampah;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Kategori;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class KelolaSampahController extends Controller
{
    public function index(){
        $kategori = Kategori::all();
        $nasabah = User::where('role', 'user')->get();
        $sampah = Sampah::with(['user', 'kategori'])->orderBy('id','desc')->get();
        return Inertia::render('Administrator/KelolaSampah',compact('kategori','nasabah','sampah'));
    } 

    public function store(Request $request){
        $request->validate([            
            'nasabah' => 'required',     
            'kategori' => 'required',     
            'totalSampah' => 'required',     
        ],[
            'nasabah.required' => 'Nama Nasabah harus diisi',
            'kategori.required' => 'Nama Kategori harus diisi',
            'totalSampah.required' => 'Total sampah harus diisi',
        ]);
        $data = [
            'user_id' => $request->nasabah,
            'kategori_id' => $request->kategori,
            'total_sampah' => $request->totalSampah,
            'tanggal' => date('Y-m-d')
        ];
        Sampah::create($data);
    
        return redirect()->back()->with('message', 'Data Sampah berhasil disimpan');
    }
}
