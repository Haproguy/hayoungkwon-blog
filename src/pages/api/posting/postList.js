import { firebaseApp } from '@/firebaseConfig';
import { getDatabase, ref, get } from 'firebase/database';


function postList(req, res) {
    const setDataList = getDatabase(firebaseApp);

    
}