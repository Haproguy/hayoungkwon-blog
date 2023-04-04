import { firebaseApp } from '@/firebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { dateFormatYDM } from '@/etc/etc';

export default function postImage(req, res) {
    if (req.method === 'POST') {
        const { uploadImg } = req.body;
    
        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage, `board-image/${dateFormatYDM + uploadImg.name}`);
        uploadBytes(storageRef, uploadImg)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => res.status(200).json({ imageURL: url }))
            })
    }
}


