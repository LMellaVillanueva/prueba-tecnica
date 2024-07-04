"use client";
import NavBar from "@/components/navBar/NavBar";
import styles from "./contacto.module.css";
import { useState } from "react";
import Background from "@/components/background/Background";

const Contacto = () => {
  const [info, setInfo] = useState({ name: "", email: "", message: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const regexName = /^[a-zA-Z]+$/;
    const regexEmail =
      /^[a-zA-Z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-zA-Z0-9])*@gmail\.com$/;

    if (!info.name) return window.alert("Debes enviar tu nombre!");

    if (info.name.length <= 2 || !regexName.test(info.name))
      return window.alert("Debes enviar un nombre válido!");

    if (!regexEmail.test(info.email))
      return window.alert("Debes ingresar un email válido!");

    if (info.message.length <= 10)
      return window.alert(
        "Debes ingresar un mensaje de al menos 10 carácteres!"
      );

    window.alert(`Mensaje enviado!
            Nombre: ${info.name}, Email: ${info.email}, Mensaje:
            ${info.message}
            `);
    setInfo({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.line}></div>
        <h1 className={styles.text}>Contactemos!</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Nombre:{" "}
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={info.name}
            className={styles.input}
          />

          <label htmlFor="email" className={styles.label}>
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={info.email}
            className={styles.input}
          />

          <label htmlFor="message" className={styles.label}>
            Mensaje:{" "}
          </label>
          <textarea
            name="message"
            id="message"
            cols={35}
            rows={4}
            onChange={handleTextArea}
            value={info.message}
            className={styles.inputArea}
          ></textarea>

          <button type="submit" className={styles.button}>
            Enviar Mensaje
          </button>
        </form>
      </div>
      <Background />
    </>
  );
};
export default Contacto;
