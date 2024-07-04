import NavBar from "@/components/navBar/NavBar";
import styles from "./intereses.module.css";
import Background from "@/components/background/Background";

const Intereses = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.line}></div>
        <NavBar />
        <h1 className={styles.text}>Intereses</h1> <br />
        <ul className={styles.list}>
          <li className={styles.li}>Practicar programación.</li>
          <li className={styles.li2}>Ejercer desarrollo web.</li>
          <li className={styles.li3}>Entrenar en el gimnasio.</li>
          <li className={styles.li4}>Jugar videojuegos.</li>
          <li className={styles.li5}>Pasar tiempo con cercanos.</li>
        </ul>
      </div>
      <Background />
    </>
  );
};
export default Intereses;
