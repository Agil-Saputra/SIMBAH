import React from "react";
import AdministratorLayout from "@/Layouts/AdministratorLayout";
import { Head } from "@inertiajs/react";
import Table from "@/Components/Administrator/Table";
function createData(tanggal, jumlah, namaNasabah, jumlahSampah, detail) {
    return { tanggal, jumlah, namaNasabah, jumlahSampah, detail };
}

const rows = [
    createData("Frozen yoghurt", 159, 4040, 44, 84),
    createData("Ice cream sandwich", 237, 4040, 44, 84),
    createData("Eclair", 262, 4040, 44, 84),
    createData("Cupcake", 305, 4040, 44, 84),
    createData("Gingerbread", 356, 4040, 44, 84),
];

const keys = ["tanggal", "jumlah", "namaNasabah", "jumlahSampah", "detail"];
const headers = ["Tanggal","Jumlah","Nama Nasabah","Jumlah Sampai","Detail      "]
const KelolaSampah = () => {
    return (
        <>
            <Head title="KelolaSampah" />
            <AdministratorLayout>
                <Table headers={headers} keys={keys} rows={rows} tableTitle={"Data Sampah"}/>
            </AdministratorLayout>
        </>
    );
};

export default KelolaSampah;
