import styles from './gitPost.module.scss';
import Link from 'next/link';


export default function GitPost() {
    return (
        <div className={styles.gitPostWrap}>
            <div className={styles.left}>
                <h2>하영권 깃허브</h2>
                <Link href='https://github.com/Haproguy'>
                    <img src="/images/gitLogo.png" alt="" />
                </Link>
            </div>
            <div className={styles.right}>
                <div className={styles.rightTop}>
                    <h2>프로젝트 깃허브</h2>
                    <Link href='https://github.com/Haproguy/hayoungkwon-blog'>
                        <img src="/images/visiting.png" alt="이미지" />
                    </Link>
                </div>
                <div className={styles.rightBottom}>
                    <h3></h3>
                </div>
            </div>
        </div>
    );
}