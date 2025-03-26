import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>© KAYOUNG PORTFOLIO 2025</div>
      <div className={styles.right}>
        <a href="https://github.com/kaouo" target="_blank" rel="noreferrer">
          Git
        </a>
        <span>/</span>
        <a href="https://velog.io/@kaouoi" target="_blank" rel="noreferrer">
          Velog
        </a>
        <span>/</span>
        <a
          href="https://iridescent-engine-d99.notion.site/1b6adbc00ab280908d64f2e57f8bcb47?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          Notion
        </a>
      </div>
    </footer>
  );
}

export default Footer;
