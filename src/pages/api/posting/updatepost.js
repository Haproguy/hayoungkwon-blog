import { getDatabase, update, ref } from "firebase/database";
import { firebaseApp } from '@/firebaseConfig';

export default function updatePost(req, res) {
    if (req.method === "POST") {
        const db = getDatabase(firebaseApp);
        const { title, content, postdate, postKey } = req.body;
        console.log(postKey);
        console.log(content);

        const postData = {
            title: title,
            content: content,
            date: postdate + '(수정됨)',
        };

        const updates = `posting/${postKey}`;


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