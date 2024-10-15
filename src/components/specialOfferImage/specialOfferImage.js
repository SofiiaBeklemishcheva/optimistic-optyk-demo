import styles from "./specialOfferImage.module.css";

const SpecialOfferImage = ({imgLink, altText}) => {


    return (
        <div className={styles.imageContainer}>
          <img src={imgLink} alt={altText} className={styles.image}/>
        </div>
    );
};

export default SpecialOfferImage;