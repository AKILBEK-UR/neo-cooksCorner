import React from "react";
import styles from "./Sidebar.module.css";
import { home, home_active, search, search_active, logo, profile, profile_active, exit } from "../../assets/index.js";
import { NavLink } from "react-router-dom";

const menuItem = [
    {
        path: "/",
        icon: home,
        activeIcon: home_active,
    },
    {
        path: "/search",
        icon: search,
        activeIcon: search_active,
    },
    {
        path: "/profile",
        icon: profile,
        activeIcon: profile_active,
    },
];

const Sidebar = () => {
    const setActiveLink = ({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ""}`;

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <NavLink to={"/"}>
                    <img src={logo} className={styles.logo} alt="Logo" />
                </NavLink>

                {menuItem.map((item, index) => (
                <NavLink
                    to={item.path}
                    key={index}
                    className={setActiveLink}
                >
                    <img
                        src={item.icon}
                        alt={item.path}
                    />
                </NavLink>
            ))}
            </div>
            <NavLink 
                to={"/"}
                className={styles.link}
                style={{marginBottom:"2rem"}}
            >
                <img src={exit}/>
            </NavLink>
        </div>
    );
};

export default Sidebar;
