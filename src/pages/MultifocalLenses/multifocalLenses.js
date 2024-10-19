import styles from "./multifocalLenses.module.css";
import multifocalLensesData from "../../mock/mutlifocalLensesDescription/mutlifocalLensesDescription";
import Footer from "../../components/footer/footer";

const MultifocalLenses = () => {

    const generalDescription = multifocalLensesData.generalDescription[0];
    const bifocalLensesDescription = multifocalLensesData.bifocalLensesDescription[0];
    const relaxLensesDescription = multifocalLensesData.relaxLensesDescription[0];
    const officeLensesDescription = multifocalLensesData.officeLensesDescription[0];
    const progressiveLensesDescription = multifocalLensesData.progressiveLensesDescription[0];

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>


                <p className={styles.lensesDescriptionText}>{generalDescription.generalDescription}</p>

                <h1>{bifocalLensesDescription.header}</h1>
                <p className={styles.lensesDescriptionText}>{bifocalLensesDescription.descriptionP1}</p>
                <p className={styles.lensesDescriptionText}>{bifocalLensesDescription.descriptionP2}</p>
                <p className={styles.lensesDescriptionText}>{bifocalLensesDescription.descriptionP3}</p>
                <p className={styles.lensesDescriptionText}>{bifocalLensesDescription.descriptionP4}</p>

                <div className={styles.imgContainer}>
                <img className={styles.lensImg} alt={"Dwuogniskowa soczewka"} src={"/assets/bifocal.jpg"}/>
                </div>

                <h1>{relaxLensesDescription.header}</h1>
                <p className={styles.lensesDescriptionText}>{relaxLensesDescription.descriptionP1}</p>
                <p className={styles.lensesDescriptionText}>{relaxLensesDescription.descriptionP2}</p>
                <p className={styles.lensesDescriptionText}>{relaxLensesDescription.descriptionP3}</p>

                <div className={styles.imgContainer}>
                    <img className={styles.lensImg} alt={"Relaksacyjna soczewka/ ze wsparciem akomodacji"} src={"/assets/relax.jpg"}/>
                </div>

                <h1>{officeLensesDescription.header}</h1>
                <p className={styles.lensesDescriptionText}>{officeLensesDescription.descriptionP1}</p>
                <p className={styles.lensesDescriptionText}>{officeLensesDescription.descriptionP2}</p>
                <p className={styles.lensesDescriptionText}>{officeLensesDescription.descriptionP3}</p>
                <p className={styles.lensesDescriptionText}>{officeLensesDescription.descriptionP4}</p>

                <div className={styles.imgContainer}>
                    <img className={styles.officeLenses} alt={"Biurowe soczewki"} src={"/assets/officeLenses.jpg"}/>
                </div>

                <h1>{progressiveLensesDescription.header}</h1>
                <p className={styles.lensesDescriptionText}>{progressiveLensesDescription.descriptionP1}</p>
                <p className={styles.lensesDescriptionText}>{progressiveLensesDescription.descriptionP2}</p>
                <p className={styles.lensesDescriptionText}>{progressiveLensesDescription.descriptionP3}</p>
                <p className={styles.lensesDescriptionText}>{progressiveLensesDescription.descriptionP4}</p>
                <p className={styles.lensesDescriptionText}>{progressiveLensesDescription.descriptionP5}</p>
            </div>

            <div className={styles.imgContainer}>
                <img className={styles.progressiveLens} alt={"Mniej zaawansowana soczewka progresywna"} src={"/assets/progressivLensSimple.jpg"}/>
                <img className={styles.progressiveLens} alt={"Średnio zaawansowana soczewka progresywna"} src={"/assets/progressivLensAdvanced.jpg"}/>
                <img className={styles.progressiveLens} alt={"Zaawansowana soczewka progresywna"} src={"/assets/progressiveLensPremium.jpg"}/>
            </div>

            <Footer className={styles.footer}/>
        </div>
    );
};

export default MultifocalLenses;
