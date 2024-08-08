import React, { useState, useEffect } from "react";
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
import swal from 'sweetalert';
import { router, usePage } from '@inertiajs/react';

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
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function DataTable({ headers, rows, tableTitle, keys }) {
    const [deleteModal, setDeleteModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const { flash } = usePage().props;

    const formatHeaderName = (headerName) =>
        headerName.replace(/([a-z])([A-Z])/g, "$1 $2");

    const showDeleteModal = (id) => {
        setId(id);
        setDeleteModal(true);
    };

    const editAction = (data) => {
        setData(data);
        setEditModal(true);
    };


    const handleDelete = () => {
        const routeDeleteMap = {
            "Data Nasabah": `/administrator/nasabah/delete/${id}`,
            "Data Sampah": `/administrator/sampah/delete/${id}`,
            "Data Kategori": `/administrator/kategori/delete/${id}`
        };
        const routeDelete = routeDeleteMap[tableTitle];
        router.post(routeDelete, {
            _method: "delete",
        }, {
            onSuccess: () => {
                swal({
                    title: "Success",
                    text: flash.message,
                    icon: "success",
                });
                setDeleteModal(false);

            },
        });
    };

    return (
        <>
            <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
                <p>Apakah Anda yakin Ingin menghapus data ini? Data Anda tidak akan bisa dipulihkan!</p>
                <DangerButton onClick={handleDelete} className="mt-4 mr-4">Hapus Sekarang</DangerButton>
                <button onClick={() => setDeleteModal(false)}>Kembali</button>
            </Modal>
            {tableTitle === "Data Sampah" && (
                <>
                    <ModifySampahModal data={data} type="edit" show={editModal} onClose={() => setEditModal(false)} />
                    <ModifySampahModal type="add" show={addModal} onClose={() => setAddModal(false)} />
                </>
            )}
            {tableTitle === "Data Nasabah" && (
                <>
                    <ModifyNasabahModal dataEdit={data} type="edit" show={editModal} onClose={() => setEditModal(false)} />
                    <ModifyNasabahModal type="add" show={addModal} onClose={() => setAddModal(false)} />
                </>
            )}
            {tableTitle === "Data Kategori" && (
                <>
                    <ModifyKategoriModal dataEdit={data} type="edit" show={editModal} onClose={() => setEditModal(false)} />
                    <ModifyKategoriModal type="add" show={addModal} onClose={() => setAddModal(false)} />
                </>
            )}
            <div className="flex items-start gap-4 justify-between max-w-[62.5rem] mb-2">
                <h1 className="text-2xl font-bold mb-6">{tableTitle}</h1>
                <PrimaryButton onClick={() => setAddModal(true)}>Tambah Data Baru</PrimaryButton>
            </div>
            <TableContainer sx={{ maxWidth: 1000 }} component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>No</StyledTableCell>
                            {headers.map((header, index) => (
                                <StyledTableCell key={index} className="capitalize">
                                    {formatHeaderName(header)}
                                </StyledTableCell>
                            ))}
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, rowIndex) => (
                            <StyledTableRow key={rowIndex}>
                                <StyledTableCell component="th" scope="row">
                                    {rowIndex + 1}
                                </StyledTableCell>
                                {keys.map((key, cellIndex) => (
                                    <StyledTableCell key={cellIndex}>
                                        {row[key]}
                                    </StyledTableCell>
                                ))}
                                <StyledTableCell>
                                    <div>
                                        <IconButton aria-label="edit" onClick={() => editAction(row)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton aria-label="delete" onClick={() => showDeleteModal(row.id)}>
                                            <Delete />
                                        </IconButton>
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
