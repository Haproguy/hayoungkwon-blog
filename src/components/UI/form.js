import styles from './form.module.scss';
import Button from '@/components/UI/button';

export default function Form(props) {
    const { submitHandler, children } = props;

    return (
        <div className={styles.formWrap}>
            <form onSubmit={submitHandler}>
                <div className={styles.inputWrap}>
                    {children}
                </div>

                <div className={styles.formButton}>
                    <Button
                        btnText='전송완료' />
                </div>
            </form>
        </div>
    );
}