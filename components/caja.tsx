import React, { useState } from "react";

type BombillaProps = {
  cristalColor?: React.CSSProperties['backgroundColor'],
  turnOnColor?: React.CSSProperties['backgroundColor'],
}

const Bombilla = ({ cristalColor, turnOnColor = 'tomato' }: BombillaProps) => {
  const [color, setColor] = useState(cristalColor);

  const onClick = () => {
    // ternario operador
    setColor((previousState) => {
      return previousState === cristalColor ? turnOnColor : cristalColor;
    });
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
