import React, { useState } from "react";

type Color = React.CSSProperties['backgroundColor'];

type BombillaProps = {
  colorCristal?: Color,
  colorEncendido?: Color,
  encender?: () => void,
}

const holaEmpleado = () => {
  alert('hola empleado');
}

const Bombilla = ({ colorCristal = 'violet', ...restoDePropiedades }: BombillaProps) => {
  const [color, setColor] = useState(colorCristal);
  const { colorEncendido = 'tomato', encender = holaEmpleado } = restoDePropiedades;
  const estaEncendido = color !== colorEncendido;

  const onClick = () => {
    // ternario operador
    setColor((previousState) => {
      return previousState === colorCristal ? colorEncendido : colorCristal;
    });
    if (estaEncendido && encender) {
      encender();
    }
  }

  return (
    <div style={{ border: '1px solid black' }}>
      <div>Casquillo</div>
      <div style={{ backgroundColor: color }}>Cristal</div>
      <div onClick={onClick}>Cable</div>
    </div>
  );
};

export default Bombilla;
