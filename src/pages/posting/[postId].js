import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDatabase, ref, get, child } from "firebase/database";
import { firebaseApp } from "@/firebaseConfig";

import axios from 'axios';

export default function ReadPage(props) {

    useEffect(() => {
        setRead(props);
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
            <h1>{read.readData.title}</h1>

            {/* <div dangerouslySetInnerHTML={{ __html: read.readData.contents }} /> */}
            <div>글내용</div>
            <div>날짜</div>
            <button onClick={() => {
                router.push('/posting')
            }}>목록으로</button>
        </>
    );
}

export async function getServerSideProps(context) {

    const id = context.params.postId;

    const db = getDatabase(firebaseApp);

        const readRef = ref(db);
        get(child(readRef, `posting/${id}`))
            .then((snapshot) => {
                console.log(snapshot.val());
                return {
                    props: {
                        readData: '인생망함'
                    }
                }
            })
            .catch((err)=>{
                return{
                    props : {
                        readData : err
                    }
                }
            })
}

