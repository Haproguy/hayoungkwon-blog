import styles from './slick.module.scss'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

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
                    <div className={styles.slickCarousel1}>
                        <h2>PROFILE</h2>
                        <div className={styles.contents}>
                            <div className={styles.modalImg}>
                                <img src="/images/hayoungkwonBanner.jpg" alt="이미지" />
                            </div>
                            <div className = {styles.listContent}>
                                <p>이름 : 하영권</p>
                                <p>생년월일 : 94년 4월 26일</p>
                                <p></p>
                            </div>
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