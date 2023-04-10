import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDatabase, ref, get } from "firebase/database";
import { firebaseApp } from "@/firebaseConfig";
import axios from 'axios';
import Link from 'next/link';

export default function ReadPage(props) {
    const { readData, postId } = props;

    useEffect(() => {
        setRead(readData);
    }, []);

    const [read, setRead] = useState();
    const router = useRouter();

    const deleteHandler = async () => {
        const res = await axios.post('/api/posting/deletepost', { postId: postId });
        const resData = res.data;

        if (resData.message === 'complete') {
            alert('삭제되었습니다.');
            router.push('/posting')
        } else {
            alert('권한이 없습니다.')
        }
    };


    if (!read) {
        return (
            <div>
                로딩중
            </div>
        );
    }

    return (
        <>
            <h1>{read.title}</h1>

            <div>
                <div dangerouslySetInnerHTML={{ __html: read.content }} />
            </div>

            <div>작성일 : {read.date}</div>

            <button onClick={() => {
                router.push('/posting')
            }}>목록으로</button>
            <div onClick={deleteHandler}>삭제하기</div>
            <Link href={{
                pathname: '/posting/updatepost/[updateId]',
                query: { postId: postId }
            }}
                as={`/posting/updatepost/${postId}`}>수정하기</Link>

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

