import styles from "./singleVisionLenses.module.css";
import data from "../../mock/singleVisionLensesDescription/singleVisionLensesDescription";
import manufacturersData from "../../mock/lensesManufacturers/lensesManufacturers";
import LensesSpecialtyTile from "../../components/lensesSpecialtiesDescription/lensesSpecialtiesDescription";
import LensesManufacturerButton from "../../components/lensesManufacturerButton/lensesManufacturerButton";
import Footer from "../../components/footer/footer";
import MySwiper from "../../components/swiper/swiper";

const SingleVisionLenses = () => {

    const lensesManufacturersCoatingsDescription = manufacturersData.lensesManufacturersCoatingsDescription
    const { singleVisionLenses,
        headersTexts,
        coatingsOnLensesAndOtherEnhancements,
        materialDescription } = data;

    return (
        <div className={styles.container}>
<div className={styles.contentContainer}>
            <p className={styles.lensesDescription}>{singleVisionLenses[0].generalDescription}</p>
            <h1>{headersTexts[0].lensesMaterial}</h1>
            <div className={styles.specialtiesContainer}>
            <LensesSpecialtyTile
                label = {materialDescription[0].header}
                description = {[
                    materialDescription[0].descriptionP1,
                    materialDescription[0].descriptionP2,
                    materialDescription[0].descriptionP3
                ]}
            />
                <LensesSpecialtyTile
                    label = {materialDescription[1].header}
                    description = {[
                        materialDescription[1].descriptionP1,
                        materialDescription[1].descriptionP2
                    ]}
                />
            </div>
            <h1>{headersTexts[0].specialMaterials}</h1>
            <div className={styles.specialtiesContainer}>
                <LensesSpecialtyTile
                    label = {materialDescription[2].header}
                    description = {[
                        materialDescription[2].descriptionP1,
                        materialDescription[2].descriptionP2,
                        materialDescription[2].descriptionP3
                    ]}
                />
                <LensesSpecialtyTile
                    label = {materialDescription[3].header}
                    description = {[
                        materialDescription[3].descriptionP1,
                        materialDescription[3].descriptionP2
                    ]}
                />
            </div>
            <h1>{headersTexts[0].comparisonOfThicknessReductionLevelsHeader}</h1>
            <p className={styles.lensesDescription}>{singleVisionLenses[0].comparisonOfThicknessReductionLevelsP1}</p>
            <p className={styles.lensesDescription}>{singleVisionLenses[0].comparisonOfThicknessReductionLevelsP2}</p>
            <p className={styles.lensesDescription}>{singleVisionLenses[0].comparisonOfThicknessReductionLevelsP3}</p>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        "/assets/+4,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/+4,00 1,6 Sferyczna_pages-to-jpg-0001.jpg",
                        "/assets/+4,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/+4,00 1,74 Sferyczna_page-0001.jpg"]}
                />
                <MySwiper
                    images={[
                        "/assets/+4,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/+4,00 1,6 Sferyczna_pages-to-jpg-0001.jpg",
                        "/assets/+4,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/+4,00 1,74 Sferyczna_page-0001.jpg"]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        "/assets/+6,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/+6,00 1,6 Sferyczna_page-0001.jpg",
                        "/assets/+6,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/+6,00 1,74 Sferyczna_page-0001.jpg"]}
                />
                <MySwiper
                    images={[
                        "/assets/+6,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/+6,00 1,6 Sferyczna_page-0001.jpg",
                        "/assets/+6,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/+6,00 1,74 Sferyczna_page-0001.jpg"]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        "/assets/_4,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/_4,00 1,6 Sferyczna_page-0001.jpg",
                        "/assets/_4,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/_4,00 1,67 Sferyczna_page-0001.jpg"]}
                />
                <MySwiper
                    images={[
                        "/assets/_4,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/_4,00 1,6 Sferyczna_page-0001.jpg",
                        "/assets/_4,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/_4,00 1,67 Sferyczna_page-0001.jpg"]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        "/assets/_6,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/_6,00 1,6 Sferyczna_page-0001.jpg",
                        "/assets/_6,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/_6,00 1,74 Sferyczna_page-0001.jpg"]}
                />
                <MySwiper
                    images={[
                        "/assets/_6,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/_6,00 1,6 Sferyczna_page-0001.jpg",
                        "/assets/_6,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/_6,00 1,74 Sferyczna_page-0001.jpg"]}
                />
            </div>

            <h1>{headersTexts[0].lensesConstructions}</h1>
            <div className={styles.specialtiesContainer}>
                <LensesSpecialtyTile
                    label = {materialDescription[4].header}
                    description = {[
                        materialDescription[4].descriptionP1,
                        materialDescription[4].descriptionP2
                    ]}
                />
                <LensesSpecialtyTile
                    label = {materialDescription[5].header}
                    description = {[
                        materialDescription[5].descriptionP1,
                        materialDescription[5].descriptionP2
                    ]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        "/assets/+4,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/+4,00 1,6 Sferyczna_pages-to-jpg-0001.jpg",
                        "/assets/+4,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/+4,00 1,74 Sferyczna_page-0001.jpg"]}
                />
                <MySwiper
                    images={[
                        "/assets/+4,00 1,5 Asferyczna_page-0001.jpg",
                        "/assets/+4,00 1,6 Asferyczna_pages-to-jpg-0001.jpg",
                        "/assets/+4,00 1,67 Asferyczna_page-0001.jpg",
                        "/assets/+4,00 1,74 Asferyczna_page-0001.jpg"]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        "/assets/+6,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/+6,00 1,6 Sferyczna_page-0001.jpg",
                        "/assets/+6,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/+6,00 1,74 Sferyczna_page-0001.jpg"]}
                />
                <MySwiper
                    images={[
                        "/assets/+6,00 1,5 Asferyczna_page-0001.jpg",
                        "/assets/+6,00 1,6 Asferyczna_page-0001.jpg",
                        "/assets/+6,00 1,67 Asferyczna_page-0001.jpg",
                        "/assets/+6,00 1,74 Asferyczna_page-0001.jpg"]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        "/assets/_4,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/_4,00 1,6 Sferyczna_page-0001.jpg",
                        "/assets/_4,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/_4,00 1,67 Sferyczna_page-0001.jpg"]}
                />
                <MySwiper
                    images={[
                        "/assets/_4,00 1,5 Asferyczna_page-0001.jpg",
                        "/assets/_4,00 1,6 Asferyczna_page-0001.jpg",
                        "/assets/_4,00 1,67 Asferyczna_page-0001.jpg",
                        "/assets/_4,00 1,74 Asferyczna_page-0001.jpg"]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        "/assets/_6,00 1,5 Sferyczna_page-0001.jpg",
                        "/assets/_6,00 1,6 Sferyczna_page-0001.jpg",
                        "/assets/_6,00 1,67 Sferyczna_page-0001.jpg",
                        "/assets/_6,00 1,74 Sferyczna_page-0001.jpg"]}
                />
                <MySwiper
                    images={[
                        "/assets/_6,00 1,5 Asferyczna_page-0001.jpg",
                        "/assets/_6,00 1,6 Asferyczna_page-0001.jpg",
                        "/assets/_6,00 1,67 Asferyczna_page-0001.jpg",
                        "/assets/_6,00 1,74 Asferyczna_page-0001.jpg"]}
                />
            </div>

            <h1>{headersTexts[0].lensesCoatings}</h1>
            <p className={styles.lensesDescription}>{coatingsOnLensesAndOtherEnhancements[0].coatings1p}</p>
            <p className={styles.lensesDescription}>{coatingsOnLensesAndOtherEnhancements[0].coatings2p}</p>
            <p className={styles.lensesDescription}>{coatingsOnLensesAndOtherEnhancements[0].coatings3p}</p>
            <p className={styles.lensesDescription}>{coatingsOnLensesAndOtherEnhancements[0].coatings4p}</p>

            <div className={styles.lensesManufacturersButtonsContainer}>
                {lensesManufacturersCoatingsDescription.map((manufacturer, index) => (
                    <LensesManufacturerButton
                        key={index}
                        link={manufacturer.link}
                        label={manufacturer.name}
                    />
                ))}
            </div>

            <p className={styles.lensesDescription}>{coatingsOnLensesAndOtherEnhancements[0].coatings5p}</p>
            <p className={styles.lensesDescription}>{coatingsOnLensesAndOtherEnhancements[0].coatings6p}</p>
            <p className={styles.lensesDescription}>{coatingsOnLensesAndOtherEnhancements[0].coatings7p}</p>
</div>
            <Footer/>
        </div>
    );
};

export default SingleVisionLenses;
