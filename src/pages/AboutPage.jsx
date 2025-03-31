import React, { useEffect, useState } from "react";
import styles from "../styles/AboutPage.module.css";
import Header from "../components/Header";

const keywords = [
  "창의적 사고",
  "브랜딩 감각",
  "콘텐츠 기획자",
  "데이터 감수성",
  "커뮤니케이션",
  "성실함",
];

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header isMain={false} />
      <div className={styles.wrapper}>
        {/* 한 줄 소개 */}
        <h1 className={`${styles.heading} ${loaded ? styles.fadeInUp : ""}`}>
          IT와 콘텐츠 마케팅을 아우르는
          <br />
          융합형 인재를 지향합니다.
        </h1>

        {/* 키워드 */}
        <div className={styles.keywords}>
          {keywords.map((text, i) => (
            <div
              key={i}
              className={`${styles.keyword} ${
                loaded ? styles.fadeInKeyword : ""
              }`}
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
