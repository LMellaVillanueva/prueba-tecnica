import NavBar from "@/components/navBar/NavBar";
import styles from "./page.module.css";
import selfie from "../../public/selfie.png";
import Image from "next/image";
import Background from "@/components/background/Background";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.anim}>
        <NavBar />
      </div>
      <header className={styles.header}>
        <p className={styles.text}>Hola!, soy Lucas Mella</p>
        <Image
          src={selfie}
          alt="Foto formal"
          width={200}
          height={200}
          className={styles.foto}
        />
        <div className={styles.line}></div>
      </header>
      <Background />
    </main>
  );
}
