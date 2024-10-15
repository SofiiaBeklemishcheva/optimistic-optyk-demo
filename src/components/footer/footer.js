import styles from "./footer/footer.module.css";

const Footer = () => {


    return (
        <footer className={styles.footerContainer}>
            <p>Okulary + soczewki korekcyjne są zwane produktem medycznym, korygującym wadę wzroku. Używaj zgodnie z instrukcą lub skonsultuj się ze specjalistą.</p>
        </footer>
    );
};

export default Footer;