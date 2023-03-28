import { getDatabase, push, ref } from 'firebase/database';
import { firebaseApp } from '@/firebaseConfig';

export default function createPost(req, res) {
    if (req.method == 'POST') {
        const db = getDatabase(firebaseApp);
        const { title, content, postdate } = req.body;

        function postBlog(title, content, postdate) {
            push(ref(db, 'posting/'), {
                title: title,
                content: content,
                date: postdate
            });
        }
        postBlog(title, content, postdate);
    }

    res.status(200).json({ message: 'posting OK' })
}