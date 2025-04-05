import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "../styles/ProjectsPage.module.css";

// 프로젝트 목록 데이터
const projectData = [
  {
    id: 1,
    title: "PERSONAL PORTFOLIO",
    category: "WEB",
    image: "/images/portfolio/main.png",
  },
  {
    id: 2,
    title: "HAMBUGI TEST",
    category: "WEB",
    image: "/images/hambugi/main.png",
  },
  {
    id: 3,
    title: "3D CUBE",
    category: "ANIMATION",
    image: "/images/anime/main.gif",
  },
  {
    id: 4,
    title: "KYOBO VORA FRIENDS",
    category: "ACTIVITIES",
    image: "/images/kyobo/main.png",
  },
  {
    id: 5,
    title: "TOOLDI SUPPORTERS",
    category: "ACTIVITIES",
    image: "/images/tooldi/main.png",
  },
  {
    id: 6,
    title: "CARD NEWS",
    category: "ARCHIVING",
    image: "/images/cardnews/main.png",
  },
  {
    id: 7,
    title: "SHORT VIDEO",
    category: "ARCHIVING",
    image: "/images/shortform/main.png",
  },
  {
    id: 8,
    title: "GALLERY",
    category: "ARCHIVING",
    image: "/images/shortform/main.png",
  },
];

const categories = ["WEB", "ANIMATION", "ACTIVITIES", "ARCHIVING"];

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("WEB");

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <div className={styles.pageWrapper}>
      <Header isMain={false} />

      <main className={styles.page}>
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
                    e.target.src = "/images/default.jpg";
                  }}
                />
              </div>

              <div className={styles.divider} />
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectsPage;
