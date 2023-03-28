import Form from "@/components/UI/form";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

export default function WritePage() {
    const [postTitle, setPostTitle] = useState('');
    const postContent = useRef();
    const router = useRouter();

    const writingTitle = (e) => {
        setPostTitle(e.target.value);
    }

    const postSubmitHandler = async (e) => {
        e.preventDefault();

        const replace = (postContent.current.value).replace('. ', '\n');

         await axios.post('/api/posting/createpost', {
            title: postTitle,
            content: replace,
            postdate: new Date().toUTCString()
        })
            .then((res) => {
                if (res.status === 200 ) {
                    router.push('/posting')
                }
            })
            .catch((err) => {
                console.log(err);
                alert('실패!');
            })
    }

    return (
        <>
            <h1>글작성</h1>

            <Form submitHandler={postSubmitHandler} >
                <label htmlFor="title">제목</label>
                <input
                    id="title"
                    type="text"
                    onChange={writingTitle}
                    placeholder="글제목" />

                <label htmlFor="content">내용</label>
                <textarea
                    id="content"
                    cols="30"
                    rows="10"
                    ref={postContent}></textarea>
            </Form>
        </>
    );
}