import React from 'react'
import AdministratorLayout from '@/Layouts/AdministratorLayout'
import { Head } from '@inertiajs/react'
import Table from '@/Components/Administrator/Table'
import ElevatedContainer from '@/Components/ElevatedContainer'
const Kategori = (kategoris) => {
	const headers = [
		'Nama Kategori',
		'Deskripsi',
		'Harga',
		'Jumlah',
	]
	const keys = [
		'nama_kategori','deskripsi','harga','jumlah'
	]

	return (
		<>
			<Head title="Kategori" />
			<AdministratorLayout>
				<ElevatedContainer>
					<Table headers={headers} rows={kategoris.kategoris} tableTitle={"Data Kategori"} keys={keys} />
				</ElevatedContainer>
			</AdministratorLayout>
		</>
	)
}

export default Kategori    