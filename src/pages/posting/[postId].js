import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDatabase, ref, get, child } from "firebase/database";
import { firebaseApp } from "@/firebaseConfig";
import axios from 'axios';

export default function ReadPage(props) {
    const { readData, postId } = props;

    useEffect(() => {
        setRead(readData);
    }, [])

    const [read, setRead] = useState();
    const router = useRouter();
    console.log(read);

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
            <div >삭제하기</div>
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

