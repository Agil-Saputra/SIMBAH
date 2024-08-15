import React from "react";
import AdministratorLayout from "@/Layouts/AdministratorLayout";
import { Head } from "@inertiajs/react";
import DataCard from "@/Components/Administrator/DataCard";
import { BarChart } from "@mui/x-charts/BarChart";
import ElevatedContainer from "@/Components/ElevatedContainer";
const Dashboard = (data) => {
    const datasets = data.datasets;
    const totalSampah = data.totalSampah;
    const totalNasabah = data.totalNasabah;
    const totalKategori = data.totalKategori;
    return (
        <>
            <Head title="Dashboard" />
            <AdministratorLayout>
                <div className="flex gap-5 md:flex-row flex-col max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <DataCard
                        title="Total Sampah Terkumpul"
                        value={totalSampah + " KG"}
                    />
                    <DataCard title="Total Nasabah" value={totalNasabah} />
                    <DataCard title="Total Kategori Sampah" value={totalKategori} />
                </div>
                <ElevatedContainer>
                    <h1 className="text-2xl font-bold mb-6">
                        Grafik Penyetoran Sampah
                    </h1>
                    <BarChart
                        xAxis={[{ scaleType: "band", data: datasets.labels }]}
                        series={[{ data: datasets.data }]}
                        sx={{ width: "100%" }}
                        height={400}
                    />
                </ElevatedContainer>
            </AdministratorLayout>
        </>
    );
};

export default Dashboard;
