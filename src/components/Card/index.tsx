import { createFromIconfontCN } from '@ant-design/icons';
import styles from "./styles.module.css";
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export default function Box() {
  return (
    <>
    
    <div className={styles.card}>
        <IconFont className={styles.icon} type="icon-tuichu" />
        <h3>Share team inboxes</h3>
      <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
    </div>
    </>
  )
}
