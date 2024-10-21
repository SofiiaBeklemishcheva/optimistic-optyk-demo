import styles from "./swiper.module.css";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swipera dla React
import 'swiper/css';  // Zamiast swiper-bundle.min.css
import 'swiper/css/navigation';  // Import stylów dla nawigacji
import { Navigation } from 'swiper/modules';  // Poprawny import Navigation

const MySwiper = ({ images }) => {
    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className={styles.swiperContainer}>  {/* Dodanie klasy dla kontenera */}
            <button onClick={goPrev}>
                <img className={styles.prev} src={"/assets/more.png"} alt={"Zobacz odpowiedź"} />
            </button>
            <Swiper
                  ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}  // Dodanie modułu Navigation tutaj
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img className={styles.swiperSlide} src={image} alt={`Slide ${index + 1}` } />
                    </SwiperSlide>
                ))}
            </Swiper>
           {/* <div className={styles.buttonsContainer}>*/}

            <button onClick={goNext}>
                <img className={styles.next} src={"/assets/more.png"} alt={"Zobacz odpowiedź"} />
            </button>
     {/*       </div>*/}
        </div>
    );
};

export default MySwiper;
