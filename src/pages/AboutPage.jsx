import React from "react";
import styles from "../styles/AboutPage.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header isMain={false} brightTheme={true} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>
            BUILDING THE <span className={styles.highlight}>FUTURE</span>
            <br />
            ONE <span className={styles.highlight}>PIXEL</span> AT A TIME
          </h1>
          <div className={styles.underline}>
            <span className={styles.label}>about me</span>
            <div className={styles.line} />
          </div>
        </div>
        <img
          src="/images/kayoung.png"
          alt="profile1"
          className={styles.heroImage}
        />
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <h2 className={styles.introTitle}>WHO AM I ?</h2>
        <img
          src="/images/kayoung2.png"
          alt="profile2"
          className={styles.introImage}
        />
        <h3 className={styles.introName}>HELLO, I'M KAYOUNG</h3>
        <p className={styles.introRole}>WEB DEV × DIGITAL MARKETING</p>
        <p className={styles.introDesc}>
          안녕하세요. 저는 기획부터 구현까지 함께하는 풀스택형 크리에이터
          홍가영입니다.
          <br />
          소프트웨어콘텐츠학과를 전공하고 7년째 개인 블로그를 운영하며 콘텐츠를
          꾸준히 제작해왔습니다.
          <br />
          기술과 콘텐츠의 융합을 통해 사람들에게 더 깊은 가치를 전달하고자
          합니다.
        </p>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <h2 className={styles.introTitle}>ABOUT ME !</h2>
        <p className={styles.sectionSubtitle}>: INSIDE MY MIND</p>

        <div className={styles.aboutList}>
          {/* 01 */}
          <div className={styles.aboutItem}>
            <h4 className={styles.aboutTitle}>🔍 호기심이 이끄는 탐구</h4>
            <p className={styles.aboutText}>
              “왜 이렇게 동작할까? 더 나은 방법은 없을까?”
              <br />
              어렸을 때부터 사소한 것에도 끊임없이 질문을 던지며 성장해왔습니다.
              <br />
              개발을 시작하면서 이 호기심은 더욱 깊어졌고 코드를 한 줄 한 줄이
              제게는 퍼즐처럼 느껴졌습니다.
              <br />
              새로운 기술을 배우고 작은 아이디어도 직접 구현해보는 과정에서
              배우는 즐거움을 발견합니다.
            </p>
          </div>

          {/* 02 */}
          <div className={styles.aboutItem}>
            <h4 className={styles.aboutTitle}>👥 개발자이기 전에 사용자</h4>
            <p className={styles.aboutText}>
              “내가 만든 서비스가 누군가에게 도움이 될까?”
              <br />
              기능을 만드는 것보다 더 중요한 것은 그것이 어떻게 쓰일지 고민하는
              것입니다.
              <br />
              사용자의 입장에서 한 걸음 더 깊이 들어가면 버튼 하나, <br />
              애니메이션 흐름 하나에도 이유가 필요해집니다.
              <br />
              코드 한 줄과 디자인 한 픽셀까지도 의미를 담아 정리하고 싶습니다.
            </p>
          </div>

          {/* 03 */}
          <div className={styles.aboutItem}>
            <h4 className={styles.aboutTitle}>🤝 기술과 소통이 만나는 지점</h4>
            <p className={styles.aboutText}>
              “좋은 서비스는 혼자가 아니라 함께 만들어가는 과정에서 완성된다.”
              <br />
              프론트엔드 개발은 단순히 화면을 그리는 작업이 아닙니다.
              <br />
              디자이너, 백엔드 개발자, 기획자 등 다양한 팀원들과 협업하며
              완성도를 높이는 과정입니다.
              <br />
              각자의 아이디어가 조화를 이룰 때 비로소 사용자에게 완성된 경험을
              전달할 수 있다고 믿습니다.
              <br />
              개발뿐만 아니라 원활한 소통과 협업을 통해 함께 성장하는 개발자가
              되고 싶습니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
