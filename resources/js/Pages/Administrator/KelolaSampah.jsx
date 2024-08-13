import React from "react";
import AdministratorLayout from "@/Layouts/AdministratorLayout";
import { Head } from "@inertiajs/react";
import Table from "@/Components/Administrator/Table";
function createData(tanggal, jumlah, namaNasabah, jumlahSampah, detail) {
    return { tanggal, jumlah, namaNasabah, jumlahSampah, detail };
}
import AddSampahForm from "@/Components/Administrator/AddSampahForm";

const rows = [
    createData("Frozen yoghurt", 159, 4040, 44, 84),
    createData("Ice cream sandwich", 237, 4040, 44, 84),
    createData("Eclair", 262, 4040, 44, 84),
    createData("Cupcake", 305, 4040, 44, 84),
    createData("Gingerbread", 356, 4040, 44, 84),
];

const headers = ["tanggal", "jumlah", "namaNasabah", "jumlahSampah", "detail"];

const nasabahNames = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
];
const categories = ["Plastik", "Sampah Makanan", "Besi Tua", "Kardus"];

const KelolaSampah = () => {
    return (
        <>
            <Head title="KelolaSampah" />
            <AdministratorLayout>
                <h1 className="text-2xl font-bold mb-6">
                    Tambahkan Data Sampah Baru
                </h1>
                <AddSampahForm
                    dataKategori={categories}
                    dataNasabah={nasabahNames}
                />
                <div className="mt-16">
                    <Table
                        headers={headers}
                        rows={rows}
                        tableTitle={"Data Sampah"}
                    />
                </div>
            </AdministratorLayout>
        </>
    );
};

export default KelolaSampah;
