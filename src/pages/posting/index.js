import styles from './posting.module.scss';

import PostItem from '@/components/board/postItem';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getDatabase, ref, get } from 'firebase/database';
import { firebaseApp } from '@/firebaseConfig';
import { logining, loginGoogle } from '@/logins';

export default function PostList(props) {
    const router = useRouter();
    const [postList, setPostList] = useState(null);
    const { postData } = props;


    useEffect(() => {
        if (postList) {
            setPostList(false);
        }
        setPostList(postData);
    }, [postList]);

    const discriminateLogin = () => {
        logining();

        if (logining()) {
            router.push('/posting/createpost')
        } else {
            if (window.confirm('로그인 후 이용하실수 있습니다.')) {
                loginGoogle();
            }
        }
    }

    if (!postList) {
        return (
            <div className={styles.postingWrap}>
                <div>작성된 글이 없습니다.</div>
                <div className={styles.createPost} onClick={discriminateLogin}>글 작성</div>
            </div>
        );
    }

    return (
        <div className={styles.postingWrap}>
            <h1>게시글</h1>
            <div className={styles.createPost} onClick={discriminateLogin}>글작성</div>

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
