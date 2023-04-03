import axios from 'axios';
import dynamic from 'next/dynamic';
import { useCallback, useState, useMemo, useRef } from "react";
import Button from "@/components/UI/button";
const BoardEdit = dynamic(() => import('@/components/board/boardEditor'), {
    ssr: false
})

import styles from './createPost.module.scss';

export default function WritePage() {
    const titleRef = useRef();
    const boardRef = useRef('');
    const postDate = new Intl.DateTimeFormat('kr').format(new Date());

    const [boardContents, setBoardContents] = useState('');

    const quillChangeHandler = useCallback((contents) => {
        setBoardContents(contents);
        console.log(typeof (boardContents));
    }, []);

    const boardClickHandler = () => {
        axios.post('/api/posting/createpost', {
            title: titleRef.current.value,
            content: boardContents,
            postdate: postDate
        })
            .then((res) => {
                console.log(res.data);
            })
    }


    return (
        <div className={styles.createPost}>
            <h1>글작성</h1>

            <div className={styles.titleWrap}>
                <input
                    type="text"
                    placeholder='제목을 입력해주세요'
                    minLength={1}
                    maxLength={26}
                    ref={titleRef} />

                <Button
                    btnText='작성완료'
                    btnClickHandler={boardClickHandler} />
            </div>
            <div className={styles.contentsWrap}>
                <BoardEdit
                    quillRef={boardRef}
                    quillChangeHandler={quillChangeHandler}
                    quillContents={boardContents}
                />
            </div>

        </div>
    );
}