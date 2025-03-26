import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>KAYOUNG</div>
      <div className={styles.contact}>
        <a href="mailto:iamkaouo@gmail.com">iamkaouo@gmail.com</a>
        <a href="facetime:+821054544121">+82 5454 4121</a>
      </div>
    </header>
  );
}

export default Header;
