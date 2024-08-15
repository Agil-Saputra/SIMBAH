import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UserTable from '@/Components/UserTable';
import { BarChart } from '@mui/x-charts';
import ElevatedContainer from '@/Components/ElevatedContainer';
const headers = ["Tanggal", "Kategori", "Total Sampah"];
const keys = ["tanggal", "kategori", "total_sampah"];

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
				<ElevatedContainer>
						  <UserTable headers={headers} rows={keys}  keys={keys} tableTitle={"Histori Pengumpulan Sampah Anda"}/>
				</ElevatedContainer>
				{/* <ElevatedContainer>
				<BarChart
                        xAxis={[{ scaleType: "band", data: datasets.labels }]}
                        series={[{ data: datasets.data }]}
                        sx={{ width: "100%" }}
                        height={400}
                    />
				</ElevatedContainer> */}
        </AuthenticatedLayout>
    );
}
