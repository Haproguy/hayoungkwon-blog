import styles from '@/components/index/greetings.module.scss';
import Box from '@/components/UI/box';
import Modal from '@/components/UI/modal';

export default function Greetings(props) {
    const { modalTrigger, modalClickHandler } = props;

    return (
        <div className={styles.greetingWrap}>
            <Box>
                <h2>안녕하세요</h2>
                <div>하영권의 게시판입니다.</div>
                <div onClick={modalClickHandler}>상세이력보기</div>
            </Box>
        </div>
    );
}