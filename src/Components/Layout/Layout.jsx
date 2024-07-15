import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import styles from "./Layout.module.css"
function Layout() {
  return (
        <div className={styles.container}>
            <Sidebar />
            <Outlet />
        </div>
  );
}

export default Layout;