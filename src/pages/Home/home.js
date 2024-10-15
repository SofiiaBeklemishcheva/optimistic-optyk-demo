import styles from "./home.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import availableServicesData from "../../mock/availableServices/availableServices"
import imagesData from "../../mock/specialOfferImages/specialOfferImages";
import manufacturersData from "../../mock/lensesManufacturers/lensesManufacturers";
import LensesManufacturerButton from "../../components/lensesManufacturerButton/lensesManufacturerButton";
import SpecialOfferImage from "../../components/specialOfferImage/specialOfferImage";
import Button from "../../components/button/button";
import AvailableServices from "../../components/availableServices/availableServices";

const Home = () => {

    const navigate = useNavigate();
    const navigateToReservationEyeTest =() =>{
        navigate("/reservation")
    }

    const availableServices = availableServicesData.availableServices;
    const specialOfferImages = imagesData.images;
    const lensesManufacturersMainPages = manufacturersData.lensesManufacturersMainPages;

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}></div>
            <div className={styles.specialOfferImagesContainer}>

                {specialOfferImages.map((image, index) => (
                    <SpecialOfferImage
                        key={index}
                        imgLink={image.link}
                        altText={image.alt}
                    />
                ))}
            </div>

            <div className={styles.revervationOfEyeTestTermin}></div>
            <Button
            label={"Zapisz się na badanie"}
            onClickFunction={navigateToReservationEyeTest}
            buttonSize={"large"}
            />

            <div className={styles.availableServicesContainer}>
                <h1>Wykonujemy</h1>
                {availableServices.map((service, index) => (
                    <AvailableServices
                        label={service.label}
                    />
                ))}

            </div>

            <div className={styles.informationAboutLensesManufacturersContainer}>
            <h1>Współpracujemy z danymi producentami soczewek okularowych</h1>
            <div className={styles.lensesManufacturersButtonsContainer}>

                {lensesManufacturersMainPages.map((manufacturer, index) => (
                    <LensesManufacturerButton
                        key={index}
                        link={manufacturer.link}
                        label={manufacturer.name}
                    />
                ))}
            </div>
            </div>
        </div>
    );
};

export default Home;
