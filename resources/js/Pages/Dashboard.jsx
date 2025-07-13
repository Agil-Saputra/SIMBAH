import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ModernUserTable from '@/Components/ModernUserTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { BarChart3, TrendingUp, Users, Recycle } from 'lucide-react';

const headers = ["Tanggal", "Kategori", "Total Sampah"];
const keys = ["tanggal", "kategori", "total_sampah"];

export default function Dashboard({ auth, sampah }) {
    // Calculate some stats
    const totalSampah = sampah?.reduce((sum, item) => sum + (parseInt(item.total_sampah) || 0), 0) || 0;
    const totalEntries = sampah?.length || 0;
    const avgSampah = totalEntries > 0 ? Math.round(totalSampah / totalEntries) : 0;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Sampah</CardTitle>
                        <Recycle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalSampah} kg</div>
                        <p className="text-xs text-muted-foreground">
                            Total sampah yang dikumpulkan
                        </p>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Setoran</CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalEntries}</div>
                        <p className="text-xs text-muted-foreground">
                            Jumlah pencatatan sampah
                        </p>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Rata-rata</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{avgSampah} kg</div>
                        <p className="text-xs text-muted-foreground">
                            Per pencatatan
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Data Table */}
            <Card>
                <CardContent className="pt-6">
                    <ModernUserTable headers={headers} rows={sampah} keys={keys} tableTitle={"Histori Pengumpulan Sampah Anda"} />
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
