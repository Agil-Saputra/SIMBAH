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
        $nasabah = User::where('role', 'user')->orderBy('full_name','asc')->get();
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
        $kategori = Kategori::findOrFail($request->kategori);
        $sampah = $request->totalSampah;
        $kategori->update(['jumlah' => $sampah + $kategori->jumlah]);
        Sampah::create($data);

        return redirect()->back()->with('message', 'Data Sampah berhasil disimpan');
    }
}
