import styles from './spec.module.scss';
import Box from '../UI/box';

export default function Spec() {
    return (
        <div className={styles.specWrap}>
            <div className={styles.left}>
                <Box>
                    <h2>구현기능</h2>
                    <div className={styles.toolsList}>
                        <div>react-quill을 사용한 글쓰기기능</div>
                        <div>firebase를 이용한 CRUD기능</div>
                        <div>구글로그인</div>
                    </div>
                </Box>
            </div>

            <div className={styles.right}>
                <Box>
                    <h2>사용한 라이브러리</h2>
                    <div className={styles.libsList}>
                        <div>React.js</div>
                        <div>Next.js</div>
                        <div>SASS &#40; SCSS &#41;</div>
                        <div>Firebase</div>
                        <div>React-Quill &#40; quill-editor &#41;</div>
                        <div>Axios</div>
                    </div>
                </Box>
            </div>
        </div>
    );
}