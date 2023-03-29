import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ReadPage(props) {

    useEffect(() => {
        setRead(props);
    }, [])

    const [read, setRead] = useState();
    const router = useRouter();

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
            <div>{read.readData.content}</div>
            <div>{read.readData.date}</div>
            <button onClick={() => {
                router.push('/posting')
            }}>목록으로</button>
        </>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.postId;
    const res = await axios.get(`https://next-blog-d9312-default-rtdb.firebaseio.com/posting/${id}.json`)
    const resData = res.data;
    return {
        props: {
            readData: resData
        }
    }
}