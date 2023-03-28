import Header from './header';
import Sidebar from './sidebar';

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
        </>
    );
}