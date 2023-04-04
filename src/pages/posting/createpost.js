import axios from 'axios';
import dynamic from 'next/dynamic';
import { useCallback, useState, useMemo, useRef } from "react";
import Button from "@/components/UI/button";
import { dateFormatYDM } from '@/etc/etc';
const BoardEdit = dynamic(() => import('@/components/board/boardEditor'), {
    ssr: false
})

import styles from './createPost.module.scss';

export default function WritePage() {
    const [imgUrl, setImgUrl] = useState();
    const titleRef = useRef();
    const boardRef = useRef('');
    const postDate = dateFormatYDM();

    const [boardContents, setBoardContents] = useState('');

    const boardChangeHandler = useCallback((contents) => {
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

    const imageHandler = () => {
        const input = document.createElement('input');

        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.addEventListener('change', async () => {
            const file = input.files[0];
            const formFile = new FormData();
            formFile.append('uploadImg', file);
            try {
                await axios.post('/api/posting/postImage', {
                    uploadImg: formFile
                })
                    .then(res => console.log(res.data.url));
            } catch (error) {
                console.log(error);
            }
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
                    quillChangeHandler={boardChangeHandler}
                    quillContents={boardContents}
                    quillImageHandler={imageHandler}
                />
            </div>

        </div>
    );
}