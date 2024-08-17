import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import logo from "../../assets/logo.png"
import { useForm } from '@inertiajs/react';

// import all material UI components
import {
    Drawer,
    Box,
    Divider,
    AppBar,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    IconButton,
} from "@mui/material";
// import all icons
import { Logout, Menu, People, Category, Dashboard, Recycling } from "@mui/icons-material";

export default function AdministratorLayout({ children }) {
    useEffect(() => {
        document.body.classList.add("bg-[#F3F4F6]");
    }, [])
    const { post } = useForm();

    const handleLogout = () => {
        post(route('administrator.logout'), {
            onSuccess: () => {
                window.location.href = '/';
            },
        });
    };
    // Hooks
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 240;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // Computed Properties
    const currPath = window.location.href.split('/')
    const pageName = currPath[currPath.length - 1].replace("-", " ")
    const icon = {
        sx: { color: "primary.main", fontSize: { sm: "1.6rem", xs: "1.2rem" } },
    };
    const menus = [
        {
            title: "Dashboard",
            path: "administrator.dashboard",
            icon: <Dashboard {...icon} />,
        },
        {
            title: "Kategori",
            path: "administrator.kategori.index",
            icon: <Category {...icon} />,
        },
        {
            title: "Nasabah",
            path: "administrator.nasabah.index",
            icon: <People {...icon} />,
        },
        {
            title: "Kelola Sampah",
            path: "administrator.kelolaSampah.index",
            icon: <Recycling {...icon} />,
        },
        // {
        //     title: "Keuangan",
        //     path: "administrator.keuangan",
        //     icon: <Paid {...icon} />,
        // },
    ];
    const drawer = (
        <>
            <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                <Link href="/">
                    <img src={logo} alt="atras logo" className="w-[70%]" />
                </Link>
            </Box>
            <List>
                {menus.map((menu, i) => (
                    <ListItem disablePadding key={i} className={pageName.toLocaleLowerCase() == menu.title.toLocaleLowerCase() ? "bg-[#f5f5f5]" : null}>
                        <Link className="w-full" href={route(menu.path)}>
                            <ListItemButton sx={{ gap: 2 }} >
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText sx={{ fontWeight: 'bold' }}>{menu.title}</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
                <ListItemButton sx={{ gap: 2 }} onClick={handleLogout}>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                        <Logout {...icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </Link>
                    </ListItemText>
                </ListItemButton>
            </List>
        </>
    );
    return (
        <Box sx={{ display: "flex", position: "relative" }}>
            <Drawer
                anchor="left"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    zIndex: 99,
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                {drawer}
            </Drawer>

            <Drawer
                anchor="left"
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    display: { xs: "none", sm: "block" },
                    zIndex: 99,
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                {drawer}
            </Drawer>
            {/* create top appbar  */}
            <Box sx={{ width: "100%", height: "100%" }}>
                <AppBar
                    component="nav"
                    sx={{
                        width: "100%",
                        bgcolor: "#fff",
                        boxShadow: "none",
                        borderBottom: "solid rgba(0, 0, 0, 0.12)",
                        borderBottomWidth: "thin",
                        zIndex: 99,
                    }}
                    position="sticky"
                >
                    <Box
                        component="div"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            minHeight: "56px",
                            px: 2,
                        }}
                    >
                        <div className="items-center flex gap-2">
                            <IconButton
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                                sx={{ display: { sm: "none" }, border: "1px solid #ababab", borderRadius: "5px", }}
                            >
                                <Menu {...icon} />
                            </IconButton>

                            <h2 className="text-black text-2xl font-bold capitalize">{pageName}</h2>
                        </div>
                    </Box>
                </AppBar>

                <Box component="main" sx={{ maxWidth: "100%" }}>
                    <Box sx={{ py: 3, px: '1rem' }}>{children}</Box>
                </Box>
            </Box>
        </Box>
    );
}
