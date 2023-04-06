import { getDatabase, ref, get, child } from "firebase/database";
import { firebaseApp } from "@/firebaseConfig";
export default function ReadPage(req, res) {
    if (req.method === 'POST') {
        const db = getDatabase(firebaseApp);
        const { postId } = req.body;

        function readBlog(postId) {
            const readRef = ref(db);
            get(child(readRef, `posting/${postId}`))
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