import styles from './form.module.scss';
import Button from '@/components/UI/button';
import { useRouter } from 'next/router';

export default function Form(props) {
    return (
        <div className={styles.formWrap}>
            <form onSubmit={props.submitHandler}>
                <div className={styles.inputWrap}>

                </div>

                <div className={styles.formButton}>
                    <Button
                        btnText='전송완료'
                        btnClickHandler={formSubmit} />
                </div>
            </form>
        </div>
    );
}