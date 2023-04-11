import { getDatabase, push, ref } from 'firebase/database';
import { firebaseApp } from '@/firebaseConfig';

export default function createPost(req, res) {
    if (req.method == 'POST') {
        const db = getDatabase(firebaseApp);
        const { title, content, postdate, writer } = req.body;

        function postBlog(title, content, postdate, writer) {
            push(ref(db, 'posting/'), {
                title: title,
                content: content,
                date: postdate,
                writer: writer
            });
        }
        postBlog(title, content, postdate, writer);
    }

    res.status(200).json({ message: 'posting OK' })
}