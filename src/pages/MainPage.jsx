// src/pages/MainPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./MainPage.module.css";

function MainPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header isMain={true} />

      <main className={styles.container}>
        <div className={styles.left}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/memoji-1.png"
              alt="Memoji Left"
              className={styles.hoverImage}
              onClick={() => navigate("/about")}
            />
            <h2>ABOUT ME</h2>
            <p></p>
          </motion.div>
        </div>

        <div className={styles.right}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 30 }}
            animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="/images/memoji-2.png"
              alt="Memoji Right"
              className={styles.hoverImage}
              onClick={() => navigate("/projects")}
            />
            <h2>PROJECTS</h2>
            <p></p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainPage;
