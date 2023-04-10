import Link from 'next/link';
import styles from './header.module.scss';
import { useEffect, useRef, useState, useMemo } from 'react';

export default function Header(props) {
    const scrollRef = useRef(null);

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
                <Link href='/'>
                    {props.blogName}
                </Link>
            </div>
            <nav>
                <ul className={styles.headerNavigation}>
                    <li><Link href='/'>Log-in</Link></li>
                    <li><Link href='/posting'>Post</Link></li>
                </ul>
            </nav>
        </header>
    );
}