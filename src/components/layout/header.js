import Link from 'next/link';
import styles from './header.module.scss';
import { useEffect, useRef } from 'react';

export default function Header(props) {
    const { blogName, loginHandler, logoutHandler, userName } = props;

    const scrollRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollRef.current) {
                if (window.scrollY == 0) {
                    scrollRef.current.style.opacity = 1;
                } else {
                    scrollRef.current.style.opacity = 0.8;
                }
            }
        })
    }, [])

    return (
        <header className={styles.header} ref={scrollRef} >
            <div className={styles.blogName}>
                <Link href='/'>
                    {blogName}
                </Link>
            </div>
            {userName && <p className={styles.userName}>{userName}님 안녕하세요!</p>}
            <nav>
                <ul className={styles.headerNavigation}>
                    {userName == null ? <li onClick={loginHandler}><a>Log-in</a></li> : <li onClick={logoutHandler}><a>Log-out</a></li>}
                    <li><Link href='/posting'>Post</Link></li>
                </ul>
            </nav>
        </header>
    );
}