import Link from 'next/link';
import styles from './header.module.scss';
import { useEffect, useRef, useState, useMemo } from 'react';

export default function Header(props) {
    const scrollRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY == 0) {
                scrollRef.current.style.opacity = 1;
            } else {
                scrollRef.current.style.opacity = 0.8;
            }
        })
    }, [])

    return (
        <header className={styles.header} ref={scrollRef} >
            <div className={styles.blogName}>
                {props.blogName}
            </div>
            <nav>
                <ul className={styles.headerNavigation}>
                    <li><Link href='/'>Log-in</Link></li>
                    <li><Link href='/posting'>Post</Link></li>
                    <li><Link href='https://github.com/Haproguy/hayoungkwon-blog'>Git</Link></li>
                </ul>
            </nav>
        </header>
    );
}