import axios from 'axios';
import dynamic from 'next/dynamic';
import { useCallback, useState, useRef, useEffect } from "react";
import Button from "@/components/UI/button";
import { dateFormatYDM } from '@/etc/etc';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firebaseApp } from '@/firebaseConfig';

const BoardEdit = dynamic(() => import('@/components/board/boardEditor'), {
    ssr: false
})

import styles from './createPost.module.scss';

export default function WritePage() {
    //필요한 상태값 , ref 정의
    const [imgUrl, setImgUrl] = useState('');
    const titleRef = useRef(null);
    const editorRef = useRef(null);
    //날짜 포멧 (YYYY.MM.DD 포멧으로) 
    const postDate = dateFormatYDM();
    const [boardContents, setBoardContents] = useState('');

    //이미지업로드를 위한 함수를 이펙트롤 정의 이미지 업로드 핸들러가 비동기 함수로 되었으므로 state값이 바뀌고 랜더링이 되는 시점을 이용함
    useEffect(() => {
        if (imgUrl !== '') {
            const editor = editorRef.current.getEditor();
            const range = editor.getSelection();
            editor.insertEmbed(range.index, 'image', imgUrl);
            editor.setSelection(range.index + 1);
        }
    }, [imgUrl])

    //컨텐츠 내용 저장 콜백을 사용하여 랜더링 제어
    const boardChangeHandler = useCallback((contents) => {
        setBoardContents(contents);
    }, []);

    //quill-editor에 작성된 글을 firebase-database에 저장 database에 저장될 컨텐츠는 문자열 타입의 html로 생김
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

            try {
                const storage = getStorage(firebaseApp);
                const storageRef = ref(storage, `board-image/${postDate + file.name}`);
                await uploadBytes(storageRef, file)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then((url) => {
                                setImgUrl(url)
                            })
                    })
            } catch {
                alert('업로드에 실패했습니다.')
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
                    quillRef={editorRef}
                    quillChangeHandler={boardChangeHandler}
                    quillContents={boardContents}
                    quillImageHandler={imageHandler}
                />
            </div>

        </div>
    );
}