import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/IntroPage.module.css";

function IntroPage() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 4000);
    const moveTimer = setTimeout(() => navigate("/main"), 5200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(moveTimer);
    };
  }, [navigate]);

  return (
    <div className={`${styles.intro} ${fade ? styles.fadeOut : ""}`}>
      <div className={styles.typingWrapper}>
        <h1 className={styles.typing}>"HELLO, KAYOUNG WORLD!"</h1>
      </div>
    </div>
  );
}

export default IntroPage;
