import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./ProjectsPage.module.css";

// 프로젝트 목록 데이터
const projectData = [
  {
    id: 1,
    title: "PERSONAL PORTFOLIO",
    category: "WEB",
    image: "/images/portfolio.png",
  },
  {
    id: 2,
    title: "HAMBUGI TEST",
    category: "WEB",
    image: "/images/hambugi.png",
  },
  {
    id: 3,
    title: "MARKETING LANDING PAGE",
    category: "MARKETING",
    image: "/images/project3.png",
  },
  {
    id: 4,
    title: "INFORGRAPHIC DESIGN",
    category: "ETC",
    image: "/images/project4.png",
  },
];

const categories = ["WEB", "MARKETING", "ETC"];

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("WEB");

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <>
      <Header isMain={false} />
      <div className={styles.page}>
        {/* 탭 메뉴 */}
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${
                selectedCategory === cat ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 프로젝트 카드 리스트 */}
        <div className={styles.projects}>
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={styles.project}
            >
              <div className={styles.thumbnail}>
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/default.jpg"; // 이미지 에러 시 기본 이미지
                  }}
                />
              </div>

              {/* 세로 구분선 */}
              <div className={styles.divider} />

              {/* 텍스트 정보 */}
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
