import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ isMain, brightTheme }) {
  const navigate = useNavigate();

  return (
    <header
      className={`${styles.header} ${brightTheme ? styles.brightTheme : ""}`}
    >
      {/* 로고 클릭 시 /main 으로 이동 */}
      <div className={styles.logo} onClick={() => navigate("/main")}>
        KAYOUNG
      </div>

      {/* 메인 페이지에서는 오른쪽 연락처 정보 표시 */}
      {isMain && (
        <div className={styles.contact}>
          <a href="mailto:iamkaouo@gmail.com">iamkaouo@gmail.com</a>
          <a href="facetime:+821054544121">+82 5454 4121</a>
        </div>
      )}
    </header>
  );
}

export default Header;
