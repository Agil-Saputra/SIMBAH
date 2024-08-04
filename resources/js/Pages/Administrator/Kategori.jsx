import React from 'react'
import AdministratorLayout from '@/Layouts/AdministratorLayout'
import { Head } from '@inertiajs/react'
import Table from '@/Components/Administrator/Table'



const Kategori = () => {
	function createData(
		kategori,
		jumlah
	  ) {
		return { kategori, jumlah };
	  }
	  
	  const rows = [
		createData('Frozen yoghurt', 159),
		createData('Ice cream sandwich', 237),
		createData('Eclair', 262),
		createData('Cupcake', 305),
		createData('Gingerbread', 356),
	  ];

	  const headers = [
		'kategori',
		'jumlah',
	  ]

  return (
   <>
   <Head title="Kategori" />
	 <AdministratorLayout>
	 <Table headers={headers} rows={rows} tableTitle={"Data Kategori"}/>
	 </AdministratorLayout>
   </>
  )
}       

export default Kategori    