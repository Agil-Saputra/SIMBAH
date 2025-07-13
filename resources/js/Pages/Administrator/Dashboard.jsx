import React from "react";
import AdministratorLayout from "@/Layouts/AdministratorLayout";
import { Head } from "@inertiajs/react";
import ModernDataCard from "@/Components/Administrator/ModernDataCard";
import ModernBarChart from "@/Components/Administrator/ModernBarChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

const Dashboard = (data) => {
    const datasets = data.datasets;
    const totalSampah = data.totalSampah;
    const totalNasabah = data.totalNasabah;
    const totalKategori = data.totalKategori;
    return (
        <>
            <Head title="Dashboard" />
            <AdministratorLayout>
                <div className="space-y-6">
                    {/* Data Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <ModernDataCard
                            title="Total Sampah Terkumpul"
                            value={totalSampah + " KG"}
                            icon="trash"
                            color="green"
                        />
                        <ModernDataCard 
                            title="Total Nasabah" 
                            value={totalNasabah}
                            icon="users"
                            color="blue"
                        />
                        <ModernDataCard 
                            title="Total Kategori Sampah" 
                            value={totalKategori}
                            icon="tag"
                            color="purple"
                        />
                    </div>

                    {/* Chart Section */}
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <Card className="shadow-lg border-0">
                            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    Grafik Penyetoran Sampah
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ModernBarChart data={datasets} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </AdministratorLayout>
        </>
    );
};

export default Dashboard;
