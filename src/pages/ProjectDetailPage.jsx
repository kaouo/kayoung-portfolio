import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/ProjectDetailPage.module.css";

const projectData = [
  {
    id: 1,
    title: "",
    description: "",
    image: "/images/project1.png",
    technologies: ["", ""],
    link: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "/images/project2.png",
    technologies: ["", ""],
    link: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "/images/project3.png",
    technologies: ["", ""],
    link: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    image: "/images/project4.png",
    technologies: ["", ""],
    link: "",
  },
];

function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectData.find((item) => item.id === Number(id));

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
            <>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
              )}

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>사용 기술</h3>
                <ul className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  className={styles.linkButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👉 프로젝트 바로가기
                </a>
              )}
            </>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetailPage;
