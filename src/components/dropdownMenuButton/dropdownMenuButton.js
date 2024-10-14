import styles from "./dropdownMenuButton.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const DropdownMenuButton = ({
                          buttonName,
                          dropdownProperties,
                          externalButtonStyle,
                      }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownStyle = dropdownOpen
        ? `${styles.dropdownContainer} ${styles.dropdownContainerOpen}`
        : `${styles.dropdownContainer} ${styles.dropdownContainerClose}`;

    return (
        <div className={styles.mainContainer}>
            <button
                className={externalButtonStyle}
                onClick={() => {
                    setDropdownOpen(!dropdownOpen);
                }}
            >
                {buttonName}
            </button>
            <div className={dropdownStyle}>
                {dropdownProperties.map((property, index) => {
                    return (
                        <Link
                            to={property.link}
                            key={index}
                            onClick={() => {
                                setDropdownOpen(false);
                            }}
                        >
                            <button className={externalButtonStyle}>{property.name}</button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default DropdownMenuButton;