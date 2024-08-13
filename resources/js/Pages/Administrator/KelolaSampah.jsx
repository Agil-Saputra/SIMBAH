import React from "react";
import AdministratorLayout from "@/Layouts/AdministratorLayout";
import { Head } from "@inertiajs/react";
import Table from "@/Components/Administrator/Table";
import AddSampahForm from "@/Components/Administrator/AddSampahForm";
const headers = ["Tanggal","Nama Nasabah", "Kategori", "Total Sampah"];
const keys = ["tanggal","user", "kategori", "total_sampah"];
const KelolaSampah = (data) => {
    const sampah = data.sampah;
    const kategori = data.kategori;
    const nasabah = data.nasabah;
    return (
        <>
            <Head title="KelolaSampah" />
            <AdministratorLayout>
                <h1 className="text-2xl font-bold mb-6">
                    Tambahkan Data Sampah Baru
                </h1>
                <AddSampahForm
                    dataKategori={kategori}
                    dataNasabah={nasabah}
                />
                <div className="mt-16">
                    <Table
                        headers={headers}
                        rows={sampah} keys={keys}
                        tableTitle={"Data Sampah"}
                    />
                </div>
            </AdministratorLayout>
        </>
    );
};

export default KelolaSampah;
