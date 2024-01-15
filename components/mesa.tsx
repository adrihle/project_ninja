type MesaProps = {
  numPatas?: number;
  color?: React.CSSProperties['backgroundColor'];
  numCajones?: number;
  alAbrirCajon?: () => void;
  cajonSaludador?: number;
}

const createArray = (length: number) => {
  const resultArray = [];
  for (let i = 0; i < length; i++) {
    resultArray.push(i);
  }
  return resultArray;
};

const Cajon = ({ numCajon, onClick }: { numCajon: number, onClick: (i: number) => void }) => {
  return <div onClick={() => onClick(numCajon)}>CAJON {numCajon + 1}</div>
}

const Mesa = ({ numPatas = 4, color = 'blue', numCajones = 2, alAbrirCajon, cajonSaludador = 1 }: MesaProps) => {
  const cajones = createArray(numCajones);

  const onClick = (cajonClick: number) => {
    if (cajonSaludador !== cajonClick + 1) return
    alAbrirCajon?.();
  }

  return (
    <div>
      <div style={{ backgroundColor: color }}>Mesa</div>
      <div>nº patas: {numPatas}</div>
      {cajones.map(c => <Cajon numCajon={c} onClick={onClick} key={c}/>)}
    </div>
  );
};

export default Mesa;
