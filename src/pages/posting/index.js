import styles from './posting.module.scss';
import axios from 'axios';
import PostItem from '@/components/board/postItem';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { logining, loginGoogle } from '@/logins';

export default function PostList() {
    const router = useRouter();
    const [postList, setPostList] = useState(null);

    useEffect(() => {
        axios.get('/api/posting/postlist')
            .then((res) => {
                const resdata = res.data;
                if (res.data) {
                    const dataArr = [];
                    for (const key in resdata) {
                        dataArr.push({
                            id: key,
                            title: resdata[key].title,
                            content: resdata[key].content,
                            date: resdata[key].date,
                            writer: resdata[key].writer
                        })
                    }
                    setPostList(dataArr);
                } else {
                    setPostList(false);
                }
            })
            .catch(err => console.log(err))
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
                                writer={data.writer}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

