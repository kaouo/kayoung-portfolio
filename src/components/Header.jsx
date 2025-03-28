import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ isMain = false }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/main");
  };

  return (
    <header className={styles.header}>
      {/* 로고 클릭 시 메인 페이지로 이동 */}
      <div
        className={styles.logo}
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        KAYOUNG
      </div>

      {isMain && (
        <div className={styles.contact}>
          <a href="mailto:iamkaouo@gmail.com">iamkaouo@gmail.com</a>
          <a href="tel:+8254544121">+82 5454 4121</a>
        </div>
      )}
    </header>
  );
}

export default Header;
