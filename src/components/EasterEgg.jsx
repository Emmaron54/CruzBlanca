
import { useRef, useState } from "react";

export default function EasterEgg() {
  const [visible, setVisible] = useState(false);
  const [animacion, setAnimacion] = useState(0);
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  const activarEasterEgg = () => {
    if (visible) return;

    setVisible(true);
    setAnimacion((actual) => actual + 1);

    // Reproducir el sonido
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/ula.mp3");
      audioRef.current.volume = 0.1;
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch((error) => {
      console.warn("No se pudo reproducir el audio:", error);
    });

    // Esconder el personaje después de la animación
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
        aria-label="Descubrir sorpresa"
        title="Descubrir sorpresa"
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
