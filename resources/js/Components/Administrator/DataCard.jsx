import React from "react";
import { Card, CardContent } from "@mui/material";

export default function DataCard({  children, ...props }) {
    return (
        <Card sx={{ width: '100%', color: '#fff' }} className="gradient">
            <CardContent>
				<span className="text-3xl font-bold">2459Kg</span>
                <h1 className="text-white text-xl mt-2">Total Sampah</h1>
            </CardContent>
        </Card>
    );
}
