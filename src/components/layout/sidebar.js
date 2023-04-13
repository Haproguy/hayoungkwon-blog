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
            </div>

            <div className={styles.sideToggle}>
                <div
                    className={`${styles.toggleButton} ${isActive && styles.active}`}
                    onClick={toggleSidebar}
                >
                </div>
            </div>
            {isActive && <div onClick={toggleSidebar} className={styles.sideback}></div>}
        </>
    );
}