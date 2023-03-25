import styles from './sidebar.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar(props) {
    const { recentPost } = props;

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.profile}>
                    <img className={styles.profileImage} src="/images/hayoungkwon-image.jpg" alt="Profile Image" />
                    <h2 className={styles.profileName}>Ha YoungKwon</h2>
                    <p className={styles.profileBio}>Frontend Developer</p>
                </div>
                <div className={styles.recentPosts}>
                    <h3>최신글보기</h3>
                    <ul>
                        <li>
                            <a href="#">Post Title 1</a>
                        </li>
                        <li>
                            <a href="#">Post Title 2</a>
                        </li>
                        <li>
                            <a href="#">Post Title 3</a>
                        </li>
                    </ul>
                </div>
                <p>Blog Introduction</p>
            </div>

            { }
        </>
    );
}