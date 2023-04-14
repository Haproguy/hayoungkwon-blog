import Link from 'next/link';
import styles from './postBox.module.scss';

export default function PostItem(props) {
    const { postId, title, date, postImg, writer } = props;

    return (
        <>
            <div className={styles.postItem}>
                <Link href={{
                    pathname: '/posting/:postId',
                    query: { postId: postId }
                }}
                    as={`/posting/${postId}`}>
                    <img src={postImg ? postImg : '/images/defaultImage.png'} alt="블로그이미지" />
                    <div className={styles.itemContents}>
                        <h2>{title}</h2>
                        <div className={styles.date}>{date}</div>
                        <div className={styles.postId}>작성자 : {writer}</div>
                    </div>
                </Link>
            </div>
        </>
    );
}