import styles from './sidebar.module.scss';
import { useState } from 'react';

export default function Sidebar(props) {

    const [isActive, setIsActive] = useState(false);
    const toggleSidebar = () => {
        setIsActive(pre => !pre);
    };

    return (
        <>
            <div className={`${styles.sidebar} ${isActive && styles.active}`}>
                <div className={styles.profile}>
                    <img
                        className={styles.profileImage}
                        src="/images/hayoungkwon-image.jpg"
                        alt="profile"
                    />
                    <h2 className={styles.profileName}>Ha YoungKwon</h2>
                    <p className={styles.profileBio}>
                        Front-End Developer
                    </p>
                </div>

                <div className={styles.recentPosts}>
                    <h3>최근 게시글</h3>
                    <ul>
                        <li>
                            <a href="#">Post 1</a>
                        </li>
                        <li>
                            <a href="#">Post 2</a>
                        </li>
                        <li>
                            <a href="#">Post 3</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.sideToggle}>
                <div
                    className={`${styles.toggleButton} ${isActive && styles.active}`}
                    onClick={toggleSidebar}
                >
                </div>
            </div>
            {isActive && <div className={styles.sideback}></div>}
        </>
    );
}