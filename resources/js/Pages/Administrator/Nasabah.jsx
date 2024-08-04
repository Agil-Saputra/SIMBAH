import React from 'react'
import AdministratorLayout from '@/Layouts/AdministratorLayout'
import { Head } from '@inertiajs/react'
import Table from '@/Components/Administrator/Table'
function createData(nama, noHp, password) {
    return { nama, noHp, password};
}

const rows = [
    createData("Frozen yoghurt", 159, 4040),
    createData("Ice cream sandwich", 237, 4040),
    createData("Eclair", 262, 4040),
    createData("Cupcake", 305, 4040),
    createData("Gingerbread", 356, 4040),
];

const headers = ["nama", "noHp", "password"];

const Nasabah = () => {
  return (
    <>
	<Head title="Nasabah" />
		<AdministratorLayout>
		<Table headers={headers} rows={rows} tableTitle="Data Nasabah"/>
		</AdministratorLayout>
	</>
  )
}

export default Nasabah    