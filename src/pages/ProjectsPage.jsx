import { useState } from "react";
import styles from "./ProjectsPage.module.css";
import Header from "../components/Header";

const projectData = [
  { id: 1, title: "PERSONAL PORTFOLIO", category: "WEB" },
  { id: 2, title: "HAMBUGI TEST", category: "WEB" },
  { id: 4, title: "MARKETING LANDING PAGE", category: "MARKETING" },
  { id: 3, title: "INFORGRAPHIC DESIGN", category: "ETC" },
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

        <div className={styles.projects}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.project}>
              <div className={styles.thumbnail}></div>
              <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
