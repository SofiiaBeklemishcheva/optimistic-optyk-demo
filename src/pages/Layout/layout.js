import { Outlet, Link } from "react-router-dom";
import styles from "./layout.module.css";
import DropdownMenuButton from "../../components/dropdownMenuButton/dropdownMenuButton";

const Layout = () => {
    return (
        <div>
            <nav className={styles.navBar}>
                <Link to="/">
                    <button className={styles.homePageContainer}>
                        <img src="assets/Logo.jpg"
                             alt={"Optimistic Optyk strona główna"}
                             className={styles.homePageLink}></img>
                    </button>
                </Link>
                <Link to="/eyeTest">
                    <button className={styles.navigationButton}>Badanie</button>
                </Link>

                <DropdownMenuButton
                    buttonName={"Produkty"}
                    dropdownProperties={[
                        { name: "Soczewki jednoogniskowe", link: "/singleVisionLenses" },
                        { name: "Soczewki wieloogniskowe", link: "/multifocalLenses" },
                    ]}
                    externalButtonStyle={styles.navigationButton}
                />


                <Link to="/contact">
                    <button className={styles.navigationButton}>Kontakt</button>
                </Link>


                <Link to="/information">
                    <button className={styles.navigationButton}>Informacje</button>
                </Link>



            </nav>

            <Outlet />
        </div>
    );
};

export default Layout;

