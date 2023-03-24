import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import { Fragment } from 'react';

export default function AppLayout(props) {
    return (
        <>
            <div className='layout'>
                <Header />
                <div className="middle">
                    <Sidebar />
                    <main>
                        {props.children}
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}