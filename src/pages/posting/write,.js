import dynamic from 'next/dynamic';
import styles from './write.module.scss';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false
})

export default function Write(props) {
    const { editHtml, onChangeValueHander } = props;

    return (
        <div className={styles.edit}>
            <ReactQuill
                value={editHtml}
                onChange={onChangeValueHander} />
        </div>
    );
}