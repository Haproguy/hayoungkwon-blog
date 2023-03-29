import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PostList(props) {
    useEffect(() => {
        const { postData } = props;
        setPostingList(postData);
    }, [])

    const [postingList, setPostingList] = useState();
    console.log(postingList);

    if (!postingList) {
        return (
            <>
                <div>loading....</div>
                <Link href='/posting/createpost'>글작성</Link>
            </>
        );
    }

    return (
        <>
            <ul>
                {
                    postingList.map(data => {
                        return (
                            <li key={data.id}>
                                <div>
                                    <Link href={{
                                        pathname: '/posting/[postId]',
                                        query: { postId: data.id },
                                    }}
                                        as={`/posting/${data.id}`}>
                                        {data.title}
                                    </Link>
                                </div>
                                <div>{data.date}</div>
                            </li>
                        );
                    })
                }
            </ul>
            <Link href='/posting/createpost'>글작성</Link>
        </>
    );
}

export async function getServerSideProps(context) {
    try {
        const res = await axios.get('https://next-blog-d9312-default-rtdb.firebaseio.com/posting.json');
        const resData = res.data;
        const dataArr = [];

        for (const key in resData) {
            dataArr.push({
                id: key,
                title: resData[key].title,
                content: resData[key].content,
                date: resData[key].date
            })
        }
        return {
            props: { postData: dataArr }
        }
    }
    catch (error) {
        console.log(error);
    }
}
