import React from "react";
import styles from "./Button.module.css";

function Button({primary, size, text}){
    const buttonClass = [
        styles.button,
        primary ? styles.primary: styles.secondary,
        styles[size],
    ].join(" ");

    return <button className={buttonClass}>{text}</button>

}

export default Button;