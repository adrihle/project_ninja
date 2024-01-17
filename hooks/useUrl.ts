import { usePathname, useRouter, useSearchParams } from "next/navigation";

// HOOK (FUNCION DISEÑADA PARA REACT) PARA CONTROLAR LOS QUERY PARAMS DE LA URL
const useURL = () => {
  // HERRAMIENTAS DE NEXT PARA CONTROLAR LA URL ASI COMO LOS PARAMETROS DE BUSQUEDA (QUERY PARAMS)
  const search = useSearchParams();
  const url = new URLSearchParams(search as any);
  const path = usePathname();
  // REPLACE LO QUE HACE ES REEMPLAZAR LA URL EXISTENTE SIN RE-RENDERIZAR LA PAGINA
  const { replace } = useRouter();


  const query = {} as any;

  search?.forEach((value, key) => {
    query[key] = value;
  });

  const setQuery = (params: any = {}) => {
    Object.entries(params).forEach(([key, value]) => {
      url.set(key, value as any);
    });
    replace(`${path}?${url.toString()}`, { scroll: false });
  };

  return {
    // CON SET QUERY ASIGNAMOS NUEVOS VALORES O ACTUALIZAMOS LOS EXISTENTES
    setQuery,
    // QUERY SON LOS VALORES ACTUALES QUE CONTIENE LA URL
    query,
  };
};

export default useURL;

