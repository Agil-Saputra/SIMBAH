<?php

namespace App\Http\Controllers\Administrator;

use App\Models\Sampah;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Kategori;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class KelolaSampahController extends Controller
{
    public function index()
    {
        $kategori = Kategori::all();
        $nasabah = User::where('role', 'user')->orderBy('full_name', 'asc')->get();
        $sampah = Sampah::with(['user', 'kategori'])->orderBy('id', 'desc')->get();
        return Inertia::render('Administrator/KelolaSampah', compact('kategori', 'nasabah', 'sampah'));
    }
    public function sort_by_date()
    {
        $sampah = Sampah::with(['user', 'kategori'])->orderBy('tanggal', 'desc')->get();
        return json_encode($sampah);
    }
    public function sort_by_date_nasabah()
    {
        $sampah = Sampah::with(['user', 'kategori'])->where('user_id', Auth::user()->id)->orderBy('tanggal', 'desc')->get();
        return response()->json($sampah);
    }
    public function sort_by_nama_nasabah_asc()
    {
        $sampah = Sampah::with(['user', 'kategori'])
            ->join('users', 'sampahs.user_id', '=', 'users.id')
            ->orderBy('users.full_name', 'asc')
            ->get();
        return json_encode($sampah);
    }
    public function sort_by_nama_nasabah_desc()
    {
        $sampah = Sampah::with(['user', 'kategori'])
            ->join('users', 'sampahs.user_id', '=', 'users.id')
            ->orderBy('users.full_name', 'desc')
            ->get();
        return json_encode($sampah);
    }
    public function total_sampah_desc(){
        $sampah = Sampah::with(['user', 'kategori'])->orderBy('total_sampah', 'desc')->get();
        return json_encode($sampah);
    } 
    public function total_sampah_nasabah_desc(){
        $sampah = Sampah::with(['user', 'kategori'])->where('user_id', Auth::user()->id)->orderBy('total_sampah', 'desc')->get();
        return response()->json($sampah);
    } 
    public function total_sampah_asc(){
        $sampah = Sampah::with(['user', 'kategori'])->orderBy('total_sampah', 'asc')->get();
        return response()->json($sampah);    
    } 
    public function total_sampah_nasabah_asc(){
        $sampah = Sampah::with(['user', 'kategori'])->where('user_id', Auth::user()->id)->orderBy('total_sampah', 'asc')->get();
        return response()->json($sampah);    
    } 
    public function store(Request $request)
    {
        $request->validate([
            'nasabah' => 'required',
            'kategori' => 'required',
            'totalSampah' => 'required',
        ], [
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

    public function update(Request $request, Sampah $sampah)
    {
        $request->validate([
            'nasabah' => 'required',
            'kategori' => 'required',
            'totalSampah' => 'required',
        ], [
            'nasabah.required' => 'Nama Nasabah harus diisi',
            'kategori.required' => 'Nama Kategori harus diisi',
            'totalSampah.required' => 'Total sampah harus diisi',
        ]);
        $data = [
            'user_id' => $request->nasabah,
            'kategori_id' => $request->kategori,
            'total_sampah' => $request->totalSampah,
        ];
        $totalSampahLama = $sampah->total_sampah;
        $kategoriLama = Kategori::findOrFail($sampah->kategori_id);
        $kategoriLama->update(['jumlah' => $kategoriLama->jumlah - $totalSampahLama]);
        $sampah->update($data);
        $kategoriBaru = Kategori::findOrFail($request->kategori);
        $sampahBaru = $request->totalSampah;
        $kategoriBaru->update(['jumlah' => $sampahBaru + $kategoriBaru->jumlah]);
        return back()->with('message', 'Data sampah berhasil diupdate');
    }
    public function destroy(Sampah $sampah)
    {
        $kategori = Kategori::findOrFail($sampah->kategori_id);
        $kategori->update(['jumlah' => $kategori->jumlah - $sampah->total_sampah]);
        $sampah->delete();
        return back()->with('message', 'Data sampah berhasil dihapus');
    }
}
