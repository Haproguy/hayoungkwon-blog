import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    setPersistence,
    browserSessionPersistence
} from "firebase/auth";
import { firebaseApp } from '@/firebaseConfig';

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export function loginGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            setPersistence(auth, browserSessionPersistence)
                .then(() => {
                    console.log('로그인완료');
                    window.location.href = '/';
                })
                .catch((error) => {
                    console.log(error);
                })
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode);
            console.log(errorMessage);
            console.log(credential)
        });
}


export function logining() {
    const loginingUser = sessionStorage.key(0);
    if (loginingUser == null) {
        return false;
    } else {
        return loginingUser;
    }
}

export function logout() {
    signOut(auth)
        .then(() => {
            sessionStorage.clear();
        })
        .catch((error) => {
            console.log(error)
        })
}