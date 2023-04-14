import { push, ref } from 'firebase/database';
import { database } from '@/firebaseConfig';

export default function createPost(req, res) {
    if (req.method == 'POST') {
        const db = database;
        const { title, content, postdate, writer } = req.body;

        function postBlog(title, content, postdate, writer) {
            push(ref(db, '/posting'), {
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