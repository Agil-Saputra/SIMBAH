import React from 'react'
import AdministratorLayout from '@/Layouts/AdministratorLayout'
import { Head } from '@inertiajs/react'
import DataCard from '@/Components/Administrator/DataCard'
import { BarChart } from '@mui/x-charts/BarChart';
const Dashboard = () => {
  return (
    <>
	<Head title="Dashboard" />
		<AdministratorLayout>
		<div className='flex gap-5 md:flex-row flex-col'>
		<DataCard/>
		<DataCard/>
		<DataCard/>
		</div>
		<BarChart
      		xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      		series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
			sx={{width: '100%'}}
      		height={300}
    />
		</AdministratorLayout>
	</>
  )
}

export default Dashboard    