import styles from './slick.module.scss'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Slick(props) {
    const settings = {
        dots: false,
        Infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                <div className={`${styles.slick}`}>
                    <h2>PROFILE</h2>
                    <div className={styles.slickCarousel1}>
                        <div className={styles.modalImg}>이미지</div>
                        <div>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                            <p>1</p>
                        </div>
                    </div>
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Slider >
        </div >
    );
}