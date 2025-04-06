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
          src="/images/profile/kayoung-1.png"
          alt="profile1"
          className={styles.heroImage}
        />
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <h2 className={styles.introTitle}>WHO AM I ?</h2>
        <img
          src="/images/profile/kayoung-2.png"
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
        <h2 className={styles.aboutTitle}>ABOUT ME !</h2>
        <p className={styles.aboutSubtitle}>: INSIDE MY MIND</p>

        <div className={styles.aboutList}>
          {/* 01 */}
          <div className={styles.aboutItem}>
            <h4 className={styles.aboutMeTitle}>🔍 호기심이 이끄는 탐구</h4>
            <p className={styles.aboutText}>
              “왜 이렇게 만들었을까? 더 나은 방법은 없을까?”
              <br />
              어릴 적부터 사소한 것에도 끊임없이 질문을 던지며 성장해왔습니다.
              <br />
              그 관심은 더 넓은 영역으로 뻗어 나갔고
              <br />
              무언가를 이해하고 재구성하는 과정에 자연스레 스며들게 되었습니다.
              <br />
              새로운 기술을 익히고 작은 아이디어도 직접 구현해보는 과정에서{" "}
              <br />
              배우는 즐거움을 발견하고 있습니다.
            </p>
          </div>

          {/* 02 */}
          <div className={styles.aboutItem}>
            <h4 className={styles.aboutMeTitle}>
              👀 사용자의 입장에서 바라보다
            </h4>
            <p className={styles.aboutText}>
              “내가 만든 콘텐츠가 누군가에게 변화를 줄 수 있을까?”
              <br /> 콘텐츠는 보여주는 것으로 끝나지 않습니다.
              <br /> 어떻게 전달되고 어떤 반응을 이끌어내는지가 더 중요합니다.
              <br /> 사용자의 관점에서 한 걸음 더 들어가 보면
              <br /> 단어 하나, 문장 한 줄에도 이유가 필요해집니다.
              <br /> 저는 작은 선택에도 맥락을 담아내는 사람을 지향합니다.
            </p>
          </div>

          {/* 03 */}
          <div className={styles.aboutItem}>
            <h4 className={styles.aboutMeTitle}>
              🤝🏻 기술과 소통이 연결되는 지점
            </h4>
            <p className={styles.aboutText}>
              “좋은 결과는 혼자가 아니라 함께 만들어가는 과정에서 완성된다.”
              <br />
              눈에 보이는 결과물은 결코 혼자 그려지는 것이 아닙니다.
              <br />
              기획부터 디자인이나 구현까지 각자의 역할이 조화를 이루어야
              <br />
              비로소 사용자에게 더 나은 경험을 전달할 수 있다고 믿습니다.
              <br />
              원활한 소통과 협업 속에서 서로의 언어를 이해하고 연결하는 역할,
              <br /> 저는 그 흐름의 중심에서 기획과 실행을 이어주는 사람이
              되고자 합니다.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
