import styles from "./multifocalLenses.module.css";
import multifocalLensesData from "../../mock/mutlifocalLensesDescription/mutlifocalLensesDescription";
import Footer from "../../components/footer/footer";

const MultifocalLenses = () => {
    // Pobieranie danych z mocka
    const generalDescription = multifocalLensesData.generalDescription[0]; // Pierwszy element tablicy
    const bifocalLensesDescription = multifocalLensesData.bifocalLensesDescription[0]; // Pierwszy element tablicy
    const relaxLensesDescription = multifocalLensesData.relaxLensesDescription[0]; // Pierwszy element tablicy
    const officeLensesDescription = multifocalLensesData.officeLensesDescription[0]; // Pierwszy element tablicy
    const progressiveLensesDescription = multifocalLensesData.progressiveLensesDescription[0]; // Pierwszy element tablicy

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>

                {/* Opis ogólny */}
                <p>{generalDescription.generalDescription}</p>

                {/* Dwuogniskowe soczewki */}
                <h1>{bifocalLensesDescription.header}</h1>
                <p>{bifocalLensesDescription.descriptionP1}</p>
                <p>{bifocalLensesDescription.descriptionP2}</p>
                <p>{bifocalLensesDescription.descriptionP3}</p>
                <p>{bifocalLensesDescription.descriptionP4}</p>

                {/* Relaksacyjne soczewki */}
                <h1>{relaxLensesDescription.header}</h1>
                <p>{relaxLensesDescription.descriptionP1}</p>
                <p>{relaxLensesDescription.descriptionP2}</p>
                <p>{relaxLensesDescription.descriptionP3}</p>

                {/* Soczewki biurowe */}
                <h1>{officeLensesDescription.header}</h1>
                <p>{officeLensesDescription.descriptionP1}</p>
                <p>{officeLensesDescription.descriptionP2}</p>
                <p>{officeLensesDescription.descriptionP3}</p>
                <p>{officeLensesDescription.descriptionP4}</p>

                {/* Soczewki progresywne */}
                <h1>{progressiveLensesDescription.header}</h1>
                <p>{progressiveLensesDescription.descriptionP1}</p>
                <p>{progressiveLensesDescription.descriptionP2}</p>
                <p>{progressiveLensesDescription.descriptionP3}</p>
                <p>{progressiveLensesDescription.descriptionP4}</p>
                <p>{progressiveLensesDescription.descriptionP5}</p>
            </div>

            <Footer className={styles.footer}/>
        </div>
    );
};

export default MultifocalLenses;
