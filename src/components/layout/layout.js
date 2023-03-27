import Header from './header';
import Sidebar from './sidebar';

export default function AppLayout(props) {
    const [recentPost] = props;

    return (
        <>
            <div className='layout'>
                <Header />
                <div className="middle">
                    <Sidebar recentPost={recentPost} />
                    <main>
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    );
}