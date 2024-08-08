import React from 'react'
import AdministratorLayout from '@/Layouts/AdministratorLayout'
import { Head } from '@inertiajs/react'
import Table from '@/Components/Administrator/Table'
const Nasabah = (nasabah) => {
  console.log(nasabah);
  const keys = ["full_name", "phone_number", "formatted_created_at"];
  const headers = ["Nama", "No Telepon","Tanggal Bergabung"]
  return (
    <>
	<Head title="Nasabah" />
		<AdministratorLayout>
		<Table headers={headers} rows={nasabah.nasabah} keys={keys} tableTitle="Data Nasabah"/>
		</AdministratorLayout>
	</>
  )
}

export default Nasabah    