"use client";

import { Button } from "@/components";
import { useURL } from "@/hooks";
import { FormEventHandler } from "react";

const Search = () => {
  // EXTRAEMOS LA FUNCION PARA SETEAR LA QUERY DESDE EL HOOK
  const { setQuery } = useURL();

  // FUNCION QUE SE DISPARA CUANDO SE PRESIONA EL BOTON DE SUBMIT
  const onSubmit: FormEventHandler = (e) => {
    // ESTA LINEA IMPIDE QUE SE RE-RENDERIZE DE NUEVO EL FORMULARIO EVITANDO BUGS
    e.preventDefault();
    // EXTRAEMOS EL VALOR DEL CANAL DEL INPUT DE BUSQUEDA
    console.log('MANEJADOR DE EVENTOS DEL FORMULARIO', e);
    const channel = (e as any)?.target[0].value;
    // USAMOS LA FUNCION PARA SETEAR EN LA QUERY (PARAMETROS DE BUSQUEDA) EL NOMBRE DEL CANAL
    setQuery({ channel, page: 1 });
  };

  return (
    <main className="container mx-auto pt-14 px-8">
      <div className="flex justify-center ">
        {/* ESTE COMPONENT ENVUELVE LOS INPUTS DEL FORMULARIO Y DISPARA LA FUNCION onSubmit cuando se presiona el boton de submit*/}
        <form
          className="flex flex-col gap-6 w-2/4 justify-center justify-items-center rounded-lg   "
          onSubmit={onSubmit}
        >
          {/* ESTE ES EL ELEMENTO 0 DEL TARGET DEL FORMULARIO, CUYO VALUE CONTIENE EL CANALA QUE SE BUSCA*/}
          <input className="rounded-lg px-3 py-3 " name="channel" />
          <Button htmlType="submit">Submit</Button>
        </form>
      </div>
    </main>
  );
};

export default Search;
