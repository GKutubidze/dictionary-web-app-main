import React from "react";
import smilelogo from "../../../public/images/icon-smile.svg";
import Image from "next/image";
import styles from "./NotFoundComponent.module.css";
const NotFoundComponent = () => {
  return (
    <div className={styles.main}>
      <Image src={smilelogo} alt="" />
      <p>No Definitions Found</p>
    </div>
  );
};

export default NotFoundComponent;
