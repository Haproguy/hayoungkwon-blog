import styles from './modal.module.scss';

export default function Modal(props) {
    return (
        <div className={styles.modal}>{props.children}</div>
    );
}
