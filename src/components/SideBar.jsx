import React from "react";
import { CiBoxList } from "react-icons/ci";
import styles from "./SideBar.module.css"
function SideBar({handler}) {
  return (
    <div>
      <div className={styles.title}>
        <CiBoxList />
        Categories
      </div>
      <ul onClick={handler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>
  );
}

export default SideBar;
