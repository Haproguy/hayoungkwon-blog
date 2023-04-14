import { ref, remove } from "firebase/database";
import { database } from "@/firebaseConfig";

export default function deletepost(req, res) {
    const { postId, loginId, writerName } = req.body;
    const db = database;

    function deleteBlog(postId) {
        remove(ref(db, `/posting/${postId}`));
    }

    try {
        if (writerName == loginId) {
            deleteBlog(postId);
            res.status(200).json({ message: 'complete' });
        } else {
            res.status(200).json({ message: false });
        }
    } catch (error) {
        res.status(500).json({ message: 'sorry' });
    }
}