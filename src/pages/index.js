import styles from '@/styles/index.module.scss';
import { useState } from 'react';

export default function MainPage() {
    const [styleTrigger, setStyleTrigger] = useState(true);
    const changeTrigger = () => {
        setStyleTrigger(pre => !pre)
        console.log(styleTrigger)
    }

    return (
        <div className={styles.main}>
            <div className={styles.banner}>
                <div className={`${styles.hello} ${styleTrigger === true ? null : styles.hide}`}>
                    <p >안녕하세요</p>
                    <p >하영권의 블로그입니다</p>
                    <p>이 프로젝트는</p>
                    <p>Next.js와</p>
                    <p>Firebase로 만들어졌습니다.</p>
                </div>

                <div className={`${styles.spec} ${styleTrigger === false ? styles.appear : null}`}>
                    <p>짜잔</p>
                </div>
            </div>
            <button onClick={changeTrigger}>123</button>
        </div >
    );
}