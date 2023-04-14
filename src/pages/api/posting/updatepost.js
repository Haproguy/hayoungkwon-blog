import { update, ref } from "firebase/database";
import { database } from '@/firebaseConfig';

export default function updatePost(req, res) {
    if (req.method === "POST") {
        const db = database;
        const { title, content, postdate, postKey } = req.body;

        const postData = {
            title: title,
            content: content,
            date: postdate + '(수정됨)',
        };

        const updates = `/posting/${postKey}`;
        
        return update(ref(db, updates), postData)
            .then(() => {
                res.status(200).json({ message: "update" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ message: "fail" });
            });
    }
}