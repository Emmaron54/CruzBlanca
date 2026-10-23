
import { useRef, useState } from "react";

const sonidos = [
  "/sounds/weii.mp3",
  "/sounds/ula.mp3",
];

export default function EasterEgg() {
  const [visible, setVisible] = useState(false);
  const [animacion, setAnimacion] = useState(0);
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  const activarEasterEgg = () => {
    if (visible) return;

    setVisible(true);
    setAnimacion((actual) => actual + 1);

    // Elegir un sonido aleatorio
    const sonidoAleatorio =
      sonidos[Math.floor(Math.random() * sonidos.length)];

    // Crear y reproducir el sonido seleccionado
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(sonidoAleatorio);
    audioRef.current.volume = 0.1;

    audioRef.current.play().catch((error) => {
      console.warn("No se pudo reproducir el audio:", error);
    });

    // Ocultar el personaje después de 2.2 segundos
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 2200);
  };

  return (
    <>
      <button
        type="button"
        className="easter-egg-boton"
        onClick={activarEasterEgg}
      >
        <img
          src="/personaje.png"
          alt=""
          className="easter-egg-cabeza"
        />
      </button>

      <div
        key={animacion}
        className={`easter-egg-personaje ${
          visible ? "easter-egg-visible" : ""
        }`}
        aria-hidden="true"
      >
        <img src="/personaje.png" alt="" />
      </div>
    </>
  );
}
