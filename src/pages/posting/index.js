import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PostList() {
    useEffect(() => {
        axios.get('/api/posting/postList')
            .then(res => {
                const postData = res.data;
                const boardList = [];

                for (const key in postData) {
                    boardList.push(
                        {
                            id: key,
                            title: postData[key].title,
                            content: postData[key].content,
                            date: postData[key].date
                        }
                    )
                }
                setPostingList(boardList);
            })
            .catch(err => console.log(err));
    }, [])

    const [postingList, setPostingList] = useState();

    console.log(postingList);

    if (!postingList) {
        return (
            <>
                <div>글이 없습니다</div>
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
                                    <Link href={`/posting/${data.id}`}>
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


