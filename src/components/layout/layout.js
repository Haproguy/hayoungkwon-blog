import Header from './header';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';
import { loginGoogle, logout } from '@/logins';
import { useRouter } from 'next/router';

export default function AppLayout(props) {
    const router = useRouter();
    const [userName, setUserName] = useState('');

    //로그인 정보가 담겨있는 session에 토큰유무만 확인하여 헤더에 유저이름을 띄우고, 로그인되어있는 상태를 판별
    useEffect(() => {
        const loginSession = sessionStorage.key(0);

        if (loginSession) {
            const checkSession = JSON.parse(sessionStorage.getItem(loginSession));
            const loginName = checkSession.displayName;
            if (loginName) {
                setUserName(loginName)
            }
        } else {
            setUserName(null);
        }
    }, [userName])

    const logoutHandler = () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            logout();
            setUserName(null);
            router.push('/');
        }
    }

    return (
        <>
            <div className='layout'>
                <Header
                    blogName={'HaYoungKwon board'}
                    loginHandler={loginGoogle}
                    logoutHandler={logoutHandler}
                    userName={userName} />

                <div className="middle">
                    <Sidebar />

                    <main>
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    );
}