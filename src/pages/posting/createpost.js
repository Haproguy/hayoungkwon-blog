import { useState, useRef } from "react";
import axios from 'axios';
import Button from "@/components/UI/button";


export default function WritePage() {
    const quill = document.querySelector('.ql-editor');
    const images = quill.querySelectorAll('img');
    const [editHtml , setEditHtml] = useState('');


    return (
        <>
            <h1>글작성</h1>
            <Button />
        </>
    );
}