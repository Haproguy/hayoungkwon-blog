import { useState, useRef } from "react";
import axios from 'axios';
import Write from "./write,";
import Button from "@/components/UI/button";


export default function WritePage() {
    const [editHtml , setEditHtml] = useState('');

    const onChangeValueHander = ()=>{
        setEditHtml()
    }

    return (
        <>
            <h1>글작성</h1>
            <Write />
            <Button />
        </>
    );
}