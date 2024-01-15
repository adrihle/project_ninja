'use client'

import { Mesa } from "@/components";

const SPEC = {
  COCINA: {
    NUM_CAJONES: 2,
  },
  SALON: {
    NUM_PATAS: 3,
    AL_ABRIR_CAJON: () => alert('hola vecino'),
    CAJON_SALUDANTE: 2,
  },
  CUARTO_BAÑO: {
    COLOR: 'green',
    AL_ABRIR_CAJON: () => alert('hola vecino'),
  },
  AZOTEA: {
    NUM_CAJONES: 90,
    AL_ABRIR_CAJON: () => alert('hola guapi'),
    CAJON_SALUDANTE: 80,
  },
  GARAGE: {
    NUM_CAJONES: 9,
    AL_ABRIR_CAJON: () => alert('hola mi madre'),
  },
  GARAGE2: {
    NUM_CAJONES: 9,
    AL_ABRIR_CAJON: () => alert('hola mi madre'),
  },
} as const;

const Login = () => {
  return (
    <div>
      {Object.entries(SPEC).map(([HABITACION, SPEC_HABITACION], index) => {
        const { NUM_CAJONES, NUM_PATAS, AL_ABRIR_CAJON, COLOR, CAJON_SALUDANTE } = SPEC_HABITACION as any;
        return (
          <div key={index} style={{ border: '1px solid black'}}>
            {HABITACION}
            <Mesa {...{
              numPatas: NUM_PATAS,
              color: COLOR,
              numCajones: NUM_CAJONES,
              alAbrirCajon: AL_ABRIR_CAJON,
              cajonSaludador: CAJON_SALUDANTE,
            }}/>
          </div>        
        )
      })}
</div>
  )
};

export default Login;
