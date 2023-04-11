import Header from './header';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';
import { loginGoogle, logining, logout } from '@/logins';

export default function AppLayout(props) {
    const [userName, setUserName] = useState('');

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