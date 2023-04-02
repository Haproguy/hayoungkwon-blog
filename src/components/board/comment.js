import styles from './comment.module.scss';

export default function Comment(props) {
    const comment = props;

    return (
        <div className={styles.comment}>
            <h2 className={styles.howManyComment}>0개의 댓글</h2>
            <div className={styles.commentContents}>
                <h3 className={styles.commenter}>작성자</h3>

                <div className={styles.commentMain}>댓글내용</div>
            </div>
        </div>
    );
}