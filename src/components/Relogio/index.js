import React, { useState, useEffect } from 'react';
import "./style.css";

const Relogio = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Atualiza o horário a cada segundo
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <time id="horaAtual">{formattedTime}</time> 
  );
};

export default Relogio;
