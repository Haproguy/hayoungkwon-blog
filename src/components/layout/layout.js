import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

export default function AppLayout(props) {
    return (
        <>
            <Header />
            <div className="middle">
                <Sidebar />
                <main>
                    {props.children}
                </main>
            </div>
            <Footer />
        </>
    );
}