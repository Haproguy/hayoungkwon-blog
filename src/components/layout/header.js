import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.blogName}>
                {props.blogName}
            </div>
            <nav>
                <ul className={styles.headerNavigation}>
                    <li><Link href='/'>Log-in</Link></li>
                    <li><Link href='/'>Join</Link></li>
                    <li><Link href='/'>Posting</Link></li>
                    <li><Link href='/'></Link></li>
                </ul>
            </nav>
        </header>
    );
}