import NavBar from "@/components/navBar/NavBar";
import styles from "./sobreMi.module.css";
import Background from "@/components/background/Background";

const SobreMi = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.line}></div>
        <NavBar />
        <h1 className={styles.header}>Un Poco Más de Mi</h1> <br />
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Desde niño tuve pasión por los videojuegos, ya que me intrigaba como
            es que a través de programas era posible la creación de, a día de
            hoy, películas jugables. Conocí la programación viendo pequeños
            cursos de Java en Youtube para después Actualmente me encuentro en
            constante aprendizaje, creando proyectos que aporten valor y
            soluciones a la cotidianidad. Además, estoy en búsqueda laboral
            activa para ejercer el desarrollo web y encontrar mi rol en el
            mercado IT.
          </p>
        </div>
      </div>
      <Background />
    </>
  );
};

export default SobreMi;
