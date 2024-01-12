'use client'

import Bombilla from "@/components/caja";

const Login = () => {
  return (
    <div>
      bombilla salon
      <Bombilla onTurnColor={() => alert('hola ceo')} />
      bombilla cuarto de baño
      <Bombilla cristalColor="aliceblue" turnOnColor="yellow"  />
      bombilla cocina
      <Bombilla turnOnColor="green" />
    </div>
  )
};

export default Login;
