import Link from 'next/link';
import axios from 'axios';
import styles from './posting.module.scss';

import PostItem from '@/components/board/postItem';
import { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { firebaseApp } from '@/firebaseConfig';

export default function PostList(props) {
    const [postList, setPostList] = useState(null);
    const { postData } = props;

    useEffect(() => {
        if (postList) {
            setPostList(false);
        }
        setPostList(postData);
    }, [postList])


    if (!postList) {
        return (
            <>
                <div>작성된 글이 없습니다.</div>
                <Link href='/posting/createpost'>글작성</Link>
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
        const db = getDatabase(firebaseApp);
        const readRef = ref(db, `posting`);
        const snapshot = await get(readRef);
        const listData = snapshot.val();

        const dataArr = [];

        for (const key in listData) {
            dataArr.push({
                id: key,
                title: listData[key].title,
                content: listData[key].content,
                date: listData[key].date
            })
        }
        return {
            props: { postData: dataArr }
        }
    }
    catch (error) {
        return {
            props: {
                message: 'fail'
            }
        }
    }
}
