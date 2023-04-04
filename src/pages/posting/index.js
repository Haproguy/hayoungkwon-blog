import Link from 'next/link';
import axios from 'axios';
import styles from './posting.module.scss';

import PostItem from '@/components/board/postItem';
import { useEffect, useState } from 'react';

export default function PostList(props) {
    const [postList, setPostList] = useState();
    const { postData } = props;

    useEffect(() => {
        if (postList) {
            setPostList(false);
        }
        setPostList(postData);
    }, [])


    if (!postList) {
        return (
            <>
                <div>loading....</div>
            </>
        );
    }

    return (
        <div className={styles.postingWrap}>
            <h1>게시글</h1>
            <Link href='/posting/createpost'>글작성</Link>

            <div className={styles.board}>
                {
                    postList.map(data => {
                        return (
                            <PostItem key={data.id}
                                title={data.title}
                                date={data.date}
                                postImg={data.postImg ? data.postImg : null}
                                postId={data.id}
                            />
                        );
                    })
                }
            </div>
        </div>
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
