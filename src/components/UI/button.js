import { Link } from 'next/link';
import styles from './button.module.scss';

export default function Button(props) {
    const { btnText, btnClickHandler } = props;

    return (
        <button
            className={styles.button}
            onClick={btnClickHandler}>
            {btnText}
        </button>
    );
}