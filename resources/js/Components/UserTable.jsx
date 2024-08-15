import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


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

export default function UserTable({ headers, rows, tableTitle, keys }) {

    const formatHeaderName = (headerName) =>
        headerName.replace(/([a-z])([A-Z])/g, "$1 $2");


    return (
        <>
			<div className="flex items-start gap-4 max-md:flex-col justify-between mb-2">
			<h1 className='text-2xl font-bold mb-6'>{tableTitle}</h1>
			</div>
            <TableContainer sx={{ width: '100%' }} component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>No</StyledTableCell>
                            {headers.map((header, index) => (
                                <StyledTableCell key={index} className="capitalize">
                                    {formatHeaderName(header)}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, rowIndex) => (
                            <StyledTableRow key={rowIndex}>
                                <StyledTableCell component="th" scope="row">
                                    {rowIndex + 1}
                                </StyledTableCell>
                                {keys?.map((key, cellIndex) => (
                                    <StyledTableCell key={cellIndex}>
                                        {key === 'kategori' && row.kategori ? row.kategori.nama_kategori : ""}
                                        {key === 'user' && row.user ? row.user.full_name : ""}
                                        {key === 'total_sampah' && row[key]+' KG'}
                                        {key !== 'kategori' && key !== 'user' && key !== 'total_sampah' && row[key]}
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
			<p className="md:hidden block text-[10px] ">*Geser kesamping untuk melihat lebih banyak data</p>
        </>
    );
}
