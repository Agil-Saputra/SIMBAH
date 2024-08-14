import React from 'react'
import AdministratorLayout from '@/Layouts/AdministratorLayout'
import { Head } from '@inertiajs/react'
import DataCard from '@/Components/Administrator/DataCard'
import { BarChart } from '@mui/x-charts/BarChart';
const Dashboard = (data) => {
	const datasets = data.datasets;
	const totalSampah = data.totalSampah;
	const totalNasabah = data.totalNasabah;
	const totalKategori = data.totalKategori;
  return (
    <>
	<Head title="Dashboard" />
		<AdministratorLayout>
		<div className='flex gap-5 md:flex-row flex-col'>
		<DataCard title="Total Sampah" value={totalSampah+" KG"} />
		<DataCard title="Total Nasabah" value={totalNasabah}/>
		<DataCard title="Total Kategori" value={totalKategori}/>
		</div>
		<BarChart
      		xAxis={[{ scaleType: 'band', data: datasets.labels }]}
      		series={[{ data: datasets.data }]}
			sx={{width: '100%'}}
      		height={400}
    />
		</AdministratorLayout>
	</>
  )
}

export default Dashboard    