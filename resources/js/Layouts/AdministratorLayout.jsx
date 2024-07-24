import React, { useState } from "react";
import { Link } from "@inertiajs/react";
// import all material UI components
import {
    Drawer,
    Box,
    Typography,
    Divider,
    AppBar,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    IconButton,
    Stack,
} from "@mui/material";
// import all icons
import { Logout, Note, Search, Settings, Today } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

export default function AdministratorLayout({ children}) {
    // Hooks
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 210;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // Computed Properties
	const currPath = window.location.href.split('/')
    const pageName = currPath[currPath.length - 1]
    const icon = {
        sx: { color: "primary.main", fontSize: { sm: "1.6rem", xs: "1.2rem" } },
    };
    const menus = [
        {
            title: "Dashboard",
            path: "administrator.dashboard",
            icon: <Note {...icon} />,
        },
        {
            title: "Kategori",
            path: "administrator.kategori",
            icon: <Today {...icon} />,
        },
        {
            title: "Nasabah",
            path: "administrator.nasabah",
            icon: <Settings {...icon} />,
        },
    ];
    const drawer = (
        <>
            <Box sx={{ display: "flex", alignItems: "center", p: 0 }}>
                <h1 className="font-bold text-2xl m-3 ">ATRAS</h1>
            </Box>
            <Divider />
            <List>
                {menus.map((menu, i) => (
                    <ListItem disablePadding key={i}>
                        <Link className="w-full" href={route(menu.path)}>
                            <ListItemButton>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText>{menu.title}</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
                <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                        <Logout {...icon} />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
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
                            sx={{ display: { sm: "none" } }}
                        >
                            <MenuIcon {...icon} />
                        </IconButton>

						<h2 className="text-black text-lg capitalize">{pageName}</h2>
						</div>
                    </Box>
                </AppBar>

                <Box component="main" sx={{ maxWidth: "100%" }}>
                    <Box sx={{ py: 3, px: 2 }}>{children}</Box>
                </Box>
            </Box>
        </Box>
    );
}
