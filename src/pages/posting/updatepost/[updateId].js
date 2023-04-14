import { ref, get } from "firebase/database";
import { database } from "@/firebaseConfig";
import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from '../createPost.module.scss'
import { dateFormatYDM } from "@/etc/etc";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";

import Button from "@/components/UI/button";

const BoardEdit = dynamic(() => import('@/components/board/boardEditor'), {
    ssr: false
})

export default function UploadPost(props) {

    const { readData, postId } = props;
    const [boardContents, setBoardContents] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const router = useRouter();

    useEffect(() => {
        setBoardContents(readData.content);
        if (imgUrl !== '') {
            const editor = editorRef.current.getEditor();
            const range = editor.getSelection();
            editor.insertEmbed(range.index, 'image', imgUrl);
            editor.setSelection(range.index + 1);
        }
    }, [imgUrl])
    const postDate = dateFormatYDM();
    const titleRef = useRef(null);
    const editorRef = useRef(null);

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

    const boardClickHandler = () => {
        axios.post('/api/posting/updatepost', {
            title: titleRef.current.value,
            content: boardContents,
            postdate: postDate,
            postKey: postId
        })
            .then((res) => {
                console.log(res.data);
                alert('수정되었습니다.');
                router.push('/posting');
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const boardChangeHandler = useCallback((contents) => {
        setBoardContents(contents);
    }, []);


    if (!readData) {
        return (<div>
            대기중
        </div>
        );
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
                    ref={titleRef}
                    defaultValue={readData.title} />

                <Button
                    btnText='수정완료'
                    btnClickHandler={boardClickHandler}
                />
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

export async function getServerSideProps(context) {
    const id = context.params.updateId;
    const db = database;

    const readRef = ref(db, `posting/${id}`);
    const snapshot = await get(readRef);
    const readData = snapshot.val();

    return {
        props: {
            postId: id,
            readData: readData
        }
    }
}