import styles from "./contactInformationTile.module.css";

const ContactInformationTile = ({storeShortName, address, mail, phone}) => {


    return (
        <div className={styles.tileContainer}>
            <video className={styles.video} controls>
                <source src="movie.mp4" type="video/mp4"/>
                <source src="movie.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
            <h1 className={styles.storeShortName}>{storeShortName}</h1>
            <div className={styles.contactInformationItemContainer}>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
                <img className={styles.itemImage} src="https://optimistic-optyk-demo-sofiiabeklemishchevas-projects.vercel.app/assets/google-maps.png" alt={"Mapa"}/>
                </a>
                <p className={styles.itemDescription}>{address}</p>
            </div>
            <div className={styles.contactInformationItemContainer}>
                <a href={`mailto:${mail}`}>
                <img className={styles.itemImage} src="https://optimistic-optyk-demo-sofiiabeklemishchevas-projects.vercel.app/assets/message.png" alt={"Mail"}/>
                </a>
                <p className={styles.itemDescription}>{mail}</p>
            </div>
            <div className={styles.contactInformationItemContainer}>
                <a href={`tel:${phone}`}>
                <img className={styles.itemImage} src="https://optimistic-optyk-demo-sofiiabeklemishchevas-projects.vercel.app/assets/phone-call.png" alt={"Numer telefonu"}/>
                </a>
                <p className={styles.itemDescription}>{phone}</p>
            </div>
        </div>
    );
};

export default ContactInformationTile;