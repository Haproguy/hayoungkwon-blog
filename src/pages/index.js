import styles from '@/styles/index.module.scss';
import { useState } from 'react';

import Greetings from '@/components/index/greetings';
import Spec from '@/components/index/spec';
import GitPost from '@/components/index/gitPost';

export default function MainPage() {
    const [styleTrigger, setStyleTrigger] = useState(true);
    const changeTrigger = () => {
        setStyleTrigger(pre => !pre)
    }

    return (
        <div className={styles.main}>
            <Greetings />
            <Spec />
            <GitPost />
        </div >
    );
}