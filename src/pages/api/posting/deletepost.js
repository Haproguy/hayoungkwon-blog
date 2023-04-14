import { ref, remove } from "firebase/database";
import { database } from "@/firebaseConfig";

export default function deletepost(req, res) {
    const { postId } = req.body;
    const db = database;
    function deleteBlog(postId) {
        remove(ref(db, `/posting/${postId}`));
    }

    try {
        deleteBlog(postId);
        res.status(200).json({ message: 'complete' })
    } catch (error) {
        res.status(500).json({ message: 'sorry' })
    }
}