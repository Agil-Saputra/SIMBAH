import React from 'react'
import AdministratorLayout from '@/Layouts/AdministratorLayout'
import { Head } from '@inertiajs/react'
import Table from '@/Components/Administrator/Table'
const Kategori = (kategoris) => {
	const headers = [
		'Nama Kategori',
		'Jumlah',
	]
	const keys = [
		'nama_kategori', 'jumlah'
	]

	return (
		<>
			<Head title="Kategori" />
			<AdministratorLayout>
				<Table headers={headers} rows={kategoris.kategoris} tableTitle={"Data Kategori"} keys={keys} />
			</AdministratorLayout>
		</>
	)
}

export default Kategori    