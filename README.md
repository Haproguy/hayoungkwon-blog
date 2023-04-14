index.js

{index.js
import styles from '@/styles/index.module.scss';
import { useEffect, useState, useRef, useCallback } from 'react';
import Spec from '@/components/index/spec';
import GitPost from '@/components/index/gitPost';

export default function MainPage() {
    //스크롤 높이에 따라 컴포넌트가 호출되는 트리거 true가 되면 해당 컴포넌트가 호출됨
    const [styleTrigger, setStyleTrigger] = useState({
        spec: false,
        github: false
    });
    //스크롤높이를 참조
    const scroll = useRef(0);

    //스크롤의 높이에 따른 상태 트리거 변경 , useCall으로 handleScroll함수를 memoiz
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const scrollDown = scrollY > scroll.current;
        scroll.current = scrollY;
        if (scrollDown && scrollY >= 0 && !styleTrigger.spec) {
            setStyleTrigger(prevState => ({ ...prevState, spec: true }));
        } else if (!scrollDown && scrollY < 0 && styleTrigger.spec) {
            setStyleTrigger(prevState => ({ ...prevState, spec: false }));
        }

        if (scrollDown && scrollY >= 450 && !styleTrigger.github) {
            setStyleTrigger(prevState => ({ ...prevState, github: true }));
        } else if (!scrollDown && scrollY < 450 && styleTrigger.github) {
            setStyleTrigger(prevState => ({ ...prevState, github: false }));
        }
    }, [styleTrigger]);


    //스크롤 높이 400
    //380이상에서 styleTrigger.spec = true , 960이상에서 styleTrigger.github = ture
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])

    return (
        <div className={styles.main}>
            <div className={`${styles.container} ${styles.specWrap}`}>
                <Spec />
            </div>

            <div className={`${styles.container} ${styles.gitPostWrap}`}>
                {styleTrigger.github && <GitPost />}
            </div>
        </div >
    );
}
}

후기
{간단한 게시판을 만들어보려고 했습니다. 하지만 firebase라던가 NEXT.js등의 조금은 새로운 기능을 공부하면서 만들어 보려하니 생각했던것보다 시간이 오래걸렸던것 같습니다. 앞으로 계속 공부해나가면서 업데이트 해보겠습니다.}