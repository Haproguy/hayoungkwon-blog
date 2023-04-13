import styles from './footer.module.scss';

export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContents}>
                <div>
                    <h3>프로젝트 기간</h3>
                    <div>2022.03.23 ~ 2022.04.13</div>
                </div>

                <div>
                    <h3>E-mail</h3>
                    <div>proguy425@naver.com</div>
                </div>
            </div>
        </footer>
    );
}