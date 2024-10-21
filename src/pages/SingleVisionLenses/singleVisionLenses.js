import styles from "./singleVisionLenses.module.css";
import data from "../../mock/singleVisionLensesDescription/singleVisionLensesDescription";
import manufacturersData from "../../mock/lensesManufacturers/lensesManufacturers";
import LensesSpecialtyTile from "../../components/lensesSpecialtiesDescription/lensesSpecialtiesDescription";
import LensesManufacturerButton from "../../components/lensesManufacturerButton/lensesManufacturerButton";
import Footer from "../../components/footer/footer";
import MySwiper from "../../components/swiper/swiper";
import imagesData from "../../mock/lensesConstructions/lensesConstructions";

const SingleVisionLenses = () => {

    const {
        sphericalPlusFour,
        asphericalPlusFour,
        sphericalPlusSix,
        asphericalPlusSix,
        sphericalMinusFour,
        asphericalMinusFour,
        sphericalMinusSix,
        asphericalMinusSix
    } = imagesData

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
                        sphericalPlusFour[0].link1,
                        sphericalPlusFour[0].link2,
                        sphericalPlusFour[0].link3,
                        sphericalPlusFour[0].link4
                    ]}
                />
                <MySwiper
                    images={[
                        sphericalPlusFour[0].link1,
                        sphericalPlusFour[0].link2,
                        sphericalPlusFour[0].link3,
                        sphericalPlusFour[0].link4]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        sphericalPlusSix[0].link1,
                        sphericalPlusSix[0].link2,
                        sphericalPlusSix[0].link3,
                        sphericalPlusSix[0].link4]}
                />
                <MySwiper
                    images={[
                        sphericalPlusSix[0].link1,
                        sphericalPlusSix[0].link2,
                        sphericalPlusSix[0].link3,
                        sphericalPlusSix[0].link4]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        sphericalMinusFour[0].link1,
                        sphericalMinusFour[0].link2,
                        sphericalMinusFour[0].link3,
                        sphericalMinusFour[0].link4]}
                />
                <MySwiper
                    images={[
                        sphericalMinusFour[0].link1,
                        sphericalMinusFour[0].link2,
                        sphericalMinusFour[0].link3,
                        sphericalMinusFour[0].link4]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        sphericalMinusSix[0].link1,
                        sphericalMinusSix[0].link2,
                        sphericalMinusSix[0].link3,
                        sphericalMinusSix[0].link4]}
                />
                <MySwiper
                    images={[
                        sphericalMinusSix[0].link1,
                        sphericalMinusSix[0].link2,
                        sphericalMinusSix[0].link3,
                        sphericalMinusSix[0].link4]}
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
                        sphericalPlusFour[0].link1,
                        sphericalPlusFour[0].link2,
                        sphericalPlusFour[0].link3,
                        sphericalPlusFour[0].link4]}
                />
                <MySwiper
                    images={[
                        asphericalPlusFour[0].link1,
                        asphericalPlusFour[0].link2,
                        asphericalPlusFour[0].link3,
                        asphericalPlusFour[0].link4]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        sphericalPlusSix[0].link1,
                        sphericalPlusSix[0].link2,
                        sphericalPlusSix[0].link3,
                        sphericalPlusSix[0].link4]}
                />
                <MySwiper
                    images={[
                        asphericalPlusSix[0].link1,
                        asphericalPlusSix[0].link2,
                        asphericalPlusSix[0].link3,
                        asphericalPlusSix[0].link4]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        sphericalMinusFour[0].link1,
                        sphericalMinusFour[0].link2,
                        sphericalMinusFour[0].link3,
                        sphericalMinusFour[0].link4]}
                />
                <MySwiper
                    images={[
                        asphericalMinusFour[0].link1,
                        asphericalMinusFour[0].link2,
                        asphericalMinusFour[0].link3,
                        asphericalMinusFour[0].link4]}
                />
            </div>

            <div className={styles.swipers}>
                <MySwiper
                    images={[
                        sphericalMinusSix[0].link1,
                        sphericalMinusSix[0].link2,
                        sphericalMinusSix[0].link3,
                        sphericalMinusSix[0].link4]}
                />
                <MySwiper
                    images={[
                        asphericalMinusSix[0].link1,
                        asphericalMinusSix[0].link2,
                        asphericalMinusSix[0].link3,
                        asphericalMinusSix[0].link4]}
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
