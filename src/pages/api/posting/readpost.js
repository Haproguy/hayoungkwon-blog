import { ref, get, child } from "firebase/database";
import { database } from "@/firebaseConfig";
export default function ReadPage(req, res) {
    if (req.method === 'POST') {
        const db = database;
        const { postId } = req.body;

        function readBlog(postId) {
            const readRef = ref(db, '/posting');
            get(child(readRef, `${postId}`))
                .then((snapshot) => {
                    res.status(200).json({
                        readData: snapshot.val(),
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        message: err
                    })
                })
        }
        readBlog(postId);
    }
}