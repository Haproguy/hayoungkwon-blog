import styles from './modal.module.scss';

export default function Modal() {
    return (
        <>
            <div className={styles.modalBackground}>모달백</div>
            <div className={styles.modal}>모달</div>
        </>
    );
}
