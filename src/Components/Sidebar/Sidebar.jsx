import React from "react";
import styles from "./Sidebar.module.css";
import { home, home_active, search, search_active, logo, profile, profile_active, exit } from "../../assets/index.js";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutAccount } from "../../store/Auth/authReducer.js";
import { useDispatch } from "react-redux";

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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await dispatch(logoutAccount()).unwrap();
            console.log("Logout was successful");
            navigate("/login");
        } catch (error) {
            console.log("Logout failed", error);
        }
    };

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
            <button 
                onClick={handleLogOut}
                className={styles.link}
                style={{marginBottom:"2rem"}}
            >
                <img src={exit} alt="Logout"/>
            </button>
        </div>
    );
};

export default Sidebar;

