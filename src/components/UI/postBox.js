import styles from './postBox.module.scss';

export default function PostBox(props) {
    const { title, date, postImg } = props;

    return (
        <>
            <li className={styles.postItem}>
                <img src={postImg && '/images/defaultImg.png'} alt="블로그이미지" />
                <div>{title}</div>
                <div>{date}</div>
            </li>
        </>
    );
}