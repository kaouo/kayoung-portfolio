import { useState } from "react";
import styles from "./ProjectsPage.module.css";

const projectData = [
  { id: 1, title: "Personal Portfolio", category: "WEB" },

  { id: 2, title: "Marketing Landing Page", category: "MARKETING" },
  { id: 3, title: "Infographic Design", category: "ETC" },

  { id: 4, title: "Product Showcase", category: "WEB" },
];

const categories = ["WEB", "MARKETING", "ETC"];

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("WEB");

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

  return (
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
          <div
            key={project.id}
            className={`${styles.project} ${styles.projectEnter}`}
          >
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
