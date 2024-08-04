import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Modal from "../Modal";
import DangerButton from "../DangerButton";
import PrimaryButton from "../PrimaryButton";
import ModifySampahModal from "./ModifySampahModal";
import ModifyNasabahModal from "./ModifyNasabahModal";
import ModifyKategoriModal from "./ModifyKategoriModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));
export default function DataTable({ headers, rows, tableTitle }) {
	const [deleteModal, setDeleteModal] = useState(false)
	const [addModal, setAddModal] = useState(false)
	const [editModal, setEditModal] = useState(false)
	const [id, setId] = useState('');

    const formatHeaderName = (headerName) => {
        const formattedHeaderName = headerName.replace(
            /([a-z])([A-Z])/g,
            "$1 $2"
        );
        return formattedHeaderName;
    };

	function showDeleteModal(id) {
		// set the data id
		setId(id)
		setDeleteModal(true)
	}

	function deleteData() {
		// write your code here
	}

    return (
        <>
            <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
				<p>Apakah Anda yakin Ingin menghapus data ini?, data anda tidak akan bisa dipulihkan!</p>
				<DangerButton onClick={deleteData} className="mt-4 mr-4">Hapus Sekarang</DangerButton>
				<button onClick={() => setDeleteModal(false)}>Kembali</button>
			</Modal>
			{tableTitle == "Data Sampah" && (
				<>
				<ModifySampahModal id={id} type="edit" show={editModal} onClose={() => setEditModal(false)} />
				<ModifySampahModal type="add" show={addModal} onClose={() => setAddModal(false)}/>
				</>
			)}
			{tableTitle == "Data Nasabah" && (
				<>
				<ModifyNasabahModal id={id} type="edit" show={editModal} onClose={() => setEditModal(false)} />
				<ModifyNasabahModal type="add" show={addModal} onClose={() => setAddModal(false)}/>
				</>
			)}
			{tableTitle == "Data Kategori" && (
				<>
				<ModifyKategoriModal id={id} type="edit" show={editModal} onClose={() => setEditModal(false)} />
				<ModifyKategoriModal type="add" show={addModal} onClose={() => setAddModal(false)}/>
				</>
			)}
			<div className="flex items-start gap-4 justify-between max-w-[62.5rem] mb-2">
			<h1 className='text-2xl font-bold mb-6'>{tableTitle}</h1>
			<PrimaryButton onClick={() => setAddModal(true)}>Tambah Data Baru</PrimaryButton>
			</div>
            <TableContainer sx={{ maxWidth: 1000 }} component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>No</StyledTableCell>
                            {headers.map((header, index) => (
                                <StyledTableCell
                                    key={index}
                                    className="capitalize"
                                >
                                    {formatHeaderName(header)}
                                </StyledTableCell>
                            ))}
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {index + 1}
                                </StyledTableCell>
                                {headers.map((header, index) => (
                                    <StyledTableCell key={index}>
                                        {row[header]}
                                    </StyledTableCell>
                                ))}
                                <StyledTableCell>
                                    {
                                        <div>
                                            <IconButton aria-label="edit" onClick={() => setEditModal(true)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton aria-label="delete" onClick={() => showDeleteModal(row.id)}>
                                                <Delete />
                                            </IconButton>
                                        </div>
                                    }
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
