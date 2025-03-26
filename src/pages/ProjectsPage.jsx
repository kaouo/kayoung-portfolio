import { useState } from "react";

function ProjectsPage() {
  const [category, setCategory] = useState("react");

  const projects = {
    react: ["Portfolio", ""],
    web: ["", ""],
    vue: [""],
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.menu}>
        <button onClick={() => setCategory("react")}>React & Vue</button>
        <button onClick={() => setCategory("web")}>Web</button>
        <button onClick={() => setCategory("vue")}>Vue</button>
      </div>

      <div style={styles.projectList}>
        {projects[category].map((title, index) => (
          <div key={index} style={styles.project}>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: { padding: "40px", color: "#fff", backgroundColor: "#111" },
  menu: { display: "flex", gap: "10px", marginBottom: "30px" },
  projectList: { display: "grid", gap: "20px" },
  project: { fontSize: "1.5rem", borderBottom: "1px solid gray" },
};

export default ProjectsPage;
