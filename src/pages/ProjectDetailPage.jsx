import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/ProjectDetailPage.module.css";

/* swiper import */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 프로젝트 데이터
const projectData = [
  /* 포트폴리오 */
  {
    id: 1,
    title: "🙋🏻‍♀️ PERSONAL PORTFOLIO",
    description:
      "첫 번째로 제작한 포트폴리오 사이트입니다. React와 Styled-Components를 활용해 컴포넌트 기반으로 개발했으며 GSAP을 적용해 부드러운 스크롤 애니메이션과 생동감 있는 인터랙션을 구현했습니다. 반응형 디자인을 고려하여 다양한 디바이스에서도 일관된 사용자 경험을 제공할 수 있도록 제작했으며 유지보수와 확장성을 위해 코드 구조를 정리하며 지속적인 리팩토링을 진행 중입니다.",
    image: [
      "/images/portfolio/1.png",
      "/images/portfolio/2.png",
      "/images/portfolio/3.png",
      "/images/portfolio/4.png",
      "/images/portfolio/5.png",
    ],
    technologies: ["React", "Styled-Components", "GSAP"],
    link: "https://kaouo-portfolio.netlify.app/",
  },
  /* 햄부기 테스트 */
  {
    id: 2,
    title: "🍔 HAMBUGI TEST",
    description:
      "햄버거를 테마로 한 성격 유형 테스트 웹 사이트입니다. MBTI 성격 유형을 기반으로 사용자의 선택을 분석하고 맞춤형 결과를 제공합니다. React를 활용하여 컴포넌트 기반으로 설계했으며 직관적인 UI와 귀여운 디자인을 적용하여 누구나 쉽게 참여할 수 있도록 제작 중에 있으며 4월 말 배포 예정입니다.",
    image: [
      "/images/hambugi/test1.png",
      "/images/hambugi/test2.png",
      "/images/hambugi/test3.png",
      "/images/hambugi/test4.png",
      "/images/hambugi/test5.png",
    ],
    technologies: ["React", "GSAP"],
    link: "",
  },
  /* 3D 큐브 */
  {
    id: 3,
    title: "🧊 3D CUBE",
    description:
      "Three.js를 활용해 직접 구현한 3D 큐브입니다. 텍스처 이미지를 입혀 질감을 나타내고 다양한 조명 효과를 적용하여 입체감을 표현했습니다. 3D 그래픽 표현에 대한 기초적인 이해를 바탕으로 실험적인 인터랙션을 시도한 프로젝트입니다.",
    image: [
      "/images/anime/heart-cube.gif",
      "/images/anime/green-cube.gif",
      "/images/anime/wave-cube.gif",
      "/images/anime/marble-cube.gif",
    ],
    technologies: ["Three.js", "JavaScript"],
    link: "",
  },
  /* 교보문고 보라프렌즈 */
  {
    id: 4,
    title: "💜 KYOBO VORA FRIENDS",
    description:
      "교보문고에서 주관하는 서포터즈 활동으로 교보문고의 다양한 콘텐츠와 브랜드 메시지를 홍보하는 활동을 수행했습니다. 콘텐츠를 기획하고 제작하며 브랜디드 콘텐츠 운영 경험과 마케팅 실무 역량을 키웠고 특히 활동 기간 중 최우수 서포터즈로 2회 선정되며 콘텐츠 기획력과 꾸준한 참여도를 인정받았습니다.",
    image: "/images/kyobo/main.png",
    technologies: [
      "활동 기간: 2024.12 – 2025.02",
      "최우수 서포터즈 2회",
      "SNS 마케팅",
      "홍보 카드뉴스 제작",
      "도서 리뷰",
      "유튜브 채널 소개",
    ],
    type: "contribution",
    link: "https://blog.naver.com/okmohae/221955672361",
  },
  /* 툴디 서포터즈 */
  {
    id: 5,
    title: "💙 TOOLDI SUPPORTERS",
    description:
      "디자인 플랫폼 툴디에서 주관하는 서포터즈 활동으로 툴디를 소개하는 콘텐츠를 기획하고 제작했습니다. 실사용자 관점에서 사용법과 활용 사례를 소개하며 디자인 중심의 콘텐츠 마케팅 실무 경험을 쌓을 수 있었고 최우수 서포터즈로 선정되어 기획력과 콘텐츠 완성도를 인정받았습니다.",
    image: "/images/tooldi/main.png",
    technologies: [
      "활동 기간: 2024.10 - 2024.12",
      "최종 우수 서포터즈 선정",
      "SNS 마케팅",
      "홍보 카드뉴스 제작",
      "굿노트 템플릿 제작",
      "배경화면 제작",
    ],
    type: "contribution",
    link: "https://blog.naver.com/okmohae/223708700522",
  },
  /* 카드 뉴스 */
  {
    id: 6,
    title: "📰 CARD NEWS",
    description:
      "지금까지 제작한 카드뉴스를 아카이빙한 공간입니다. 다양한 디자인 플랫폼과 Photoshop 등을 활용해 다양한 주제를 시각적으로 구성했으며 SNS 홍보물까지 직접 기획하고 디자인한 작업물을 정리했습니다.",
    image: "/images/cardnews/main.png",
    technologies: ["", ""],
    type: "contribution",
    link: "",
  },
  /* 숏폼 */
  {
    id: 7,
    title: "📹 SHORT VIDEO",
    description:
      "트렌디한 숏폼 포맷에 맞춰 기획부터 촬영 및 편집까지 직접 제작한 콘텐츠입니다. 네이버 클립과 인스타그램 릴스 중심으로 짧은 시간 안에 메시지를 효과적으로 전달하는 구성에 집중했습니다. 콘텐츠의 흐름, 속도감, 화면 전환 타이밍 등 숏폼 특유의 리듬을 고려해 작업했습니다.",
    image: "/images/shortform/main.png",
    technologies: ["", ""],
    type: "contribution",
    link: "https://m.blog.naver.com/okmohae?tab=2",
  },
  /* 갤러리 */
  {
    id: 8,
    title: "📷 GALLERY",
    description:
      "트렌디한 숏폼 포맷에 맞춰 기획부터 촬영 및 편집까지 직접 제작한 콘텐츠입니다. 네이버 클립과 인스타그램 릴스 중심으로 짧은 시간 안에 메시지를 효과적으로 전달하는 구성에 집중했습니다. 콘텐츠의 흐름, 속도감, 화면 전환 타이밍 등 숏폼 특유의 리듬을 고려해 작업했습니다.",
    image: "/images/shortform/main.png",
    technologies: ["", ""],
    type: "contribution",
    link: "https://m.blog.naver.com/okmohae?tab=2",
  },
];

function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectData.find((item) => item.id === Number(id));
  const isContributionType = project?.type === "contribution";
  const hasTechStack = project.technologies.some(
    (tech) => tech && tech.trim() !== ""
  );

  return (
    <div className={styles.page}>
      <Header headerColor="#f8f9fa" textColor="#111" isMain={false} />

      <main className={styles.wrapper}>
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {!project ? (
            <h2>해당 프로젝트를 찾을 수 없습니다.</h2>
          ) : (
            <div className={styles.projectLayout}>
              {/* 왼쪽: 이미지 */}
              <div className={styles.leftColumn}>
                <div className={styles.imageWrapper}>
                  {Array.isArray(project.image) ? (
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={30}
                      pagination={{ clickable: true }}
                      className={styles.imageSwiper}
                    >
                      {project.image.map((imgSrc, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={imgSrc}
                            alt={`${project.title} 이미지 ${idx + 1}`}
                            className={styles.image}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.image}
                    />
                  )}
                </div>
              </div>

              {/* 오른쪽: 텍스트 영역 */}
              <div className={styles.rightColumn}>
                <h1 className={styles.title}>{project.title}</h1>

                <p className={styles.description}>
                  {project.description.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>
                    {isContributionType ? "🔎 What I Did" : "🛠️ Tech Stack"}
                  </h3>
                  <div className={styles.techList}>
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        className={styles.techItem}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    className={styles.linkButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PROJECT LINK
                  </a>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetailPage;
