import styles from "./contact.module.css";
import ContactInformationTile from "../../components/contactInformationTile/contactInformationTile";
import Footer from "../../components/footer/footer";
import storeData from "../../mock/contactInformation/contactInformation";

const Contact = () => {

    const storeInformation = storeData

    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
            {storeInformation.map((row, index) => {
                return (
                    <div key={index} className={styles.tableRow}>
                        <ContactInformationTile
                            storeShortName = {row.storeShortName}
                            address = {row.address}
                            mail = {row.mail}
                            phone = {row.phone}
                        />
                    </div>
                );
            })}
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;