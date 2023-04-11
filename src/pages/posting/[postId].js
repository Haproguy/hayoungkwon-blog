import { useState, useEffect } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import { firebaseApp } from "@/firebaseConfig";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { logining, loginGoogle } from '@/logins';

import styles from './readPost.module.scss';

export default function ReadPage(props) {
    const { readData, postId } = props;
    const [read, setRead] = useState();
    const router = useRouter();

    useEffect(() => {
        setRead(readData);
    }, []);

    const deleteHandler = async () => {
        logining();
        if (logining()) {
            const res = await axios.post('/api/posting/deletepost', { postId: postId });
            const resData = res.data;

            if (resData.message === 'complete') {
                alert('삭제되었습니다.');
                router.push('/posting')
            } else {
                alert('권한이 없습니다.')
            }
        } else {
            if (window.confirm('로그인 후 이용하실수 있습니다.')) {
                loginGoogle();
            }
        }
    };

    if (!read) {
        return (
            <div>
                정보를 불러오는중....
            </div>
        );
    }

    return (
        <>
            <h1>{read.title}</h1>
            <div className={styles.nameNdate}>
                <div>작성자 : {read.writer}</div>
                <div>작성일 : {read.date}</div>
            </div>

            <div className={styles.postContentsWrap}>
                <div dangerouslySetInnerHTML={{ __html: read.content }} />
            </div>


            <div className={styles.btnNav}>
                <button onClick={() => {
                    router.push('/posting')
                }}>목록으로</button>
                {logining() && <div onClick={deleteHandler}>삭제하기</div>}

                {logining() &&
                    <Link href={{
                        pathname: '/posting/updatepost/[updateId]',
                        query: { postId: postId }
                    }}
                        as={`/posting/updatepost/${postId}`}>수정하기</Link>
                }
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.postId;

    const db = getDatabase(firebaseApp);
    try {
        const readRef = ref(db, `posting/${id}`);
        const snapshot = await get(readRef);
        const readData = snapshot.val();

        return {
            props: {
                postId: id,
                readData: readData
            }
        }
    } catch (error) {
        return {
            props: {
                readData: '인생망함'
            }
        }
    }
}

