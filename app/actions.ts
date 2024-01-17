'use server'

// SON ACCIONES O FUNCIONES QUE SE EJECUTAN EN EL SERVIDOR SON EQUIVALENTES A LLAMADAS COMO POST, GET ETC ETC
// PERO EN EL ECOSISTEMA DE NEXT

// IMPORTACIONES DE LIBRERIAS
import { redirect } from "next/navigation";
import crypto from 'crypto';

// IMPORTACIONES DE INFORMACION QUE SIMULA LA BASE DE DATOS
import { VIDEOS, CHANNEL_STATS } from "./mock";

// CONFIGURACION DE NUESTRO "SERVER"
// ESTO AUNQUE ES UNA CONSTANTE PLANA, SE USA as const POR VERBOSITY, 
// PARA RECALCAR MEDIANTE EL CODIGO Y REAFIRMAR ALGO QUE QUEREMOS QUE 
// EL DESARROLLADOR TENGA EN CUENTA
const MAX_VIDEO_PER_PAGE = 10 as const;
const CREDENTIALS = {
  USERNAME: 'CEO',
  PASSWORD: '123456',
  // SE USA as const PARA QUE NO SE PUEDA REASIGNAR 
} as const;

// FUNCION QUE CONTROLA EL LOGIN, CUANDO HACEMOS CLICK A SUBMIT EN LA PANTALLA DE LOGIN SE 
// LLAMA ESTA FUNCION
export async function login({ username, password }: any) {
  if (username === CREDENTIALS.USERNAME && password === CREDENTIALS.PASSWORD) {
    // REDIRIGIMOS Y AÑADIMOS EL QUERY PARAM (PARAMETRO DE BUSQUEDA) DE AUTH, PARA "CONTROLAR" DE 
    // MANERA FICTICIA, RECUERDA, ASI NO SE HACE EN LA REALIDAD, QUE EL USUARIO ES AUNTENTICADO
    redirect('/?auth=true');
  }
}

const generateHashMd5 = (name: string) => {
  const md5hash = crypto.createHash('md5');
  md5hash.update(name);
  return md5hash.digest('hex');
};

// CHUNKS ES UN TROZO DE INFORMACION, 
function createVideoChunks(videos: (typeof VIDEOS)) {
  // DEFINIMOS UN ARRAY VACIO (CAMION)
  const result = [];
  // LOOPEAMOS O RECORREMOS ESTE BUCLE FOR, CON LA CANTADIAD TOTAL DE VIDEOS, INCREMENTANDO CON
  // EL MAX DE VIDEOS POR PAGINA
  for (let i = 0; i < videos.length; i += MAX_VIDEO_PER_PAGE) {
    // SACAMOS CADA BOLSA DE NARANJAS (LA LLENAMOS) PARA NO PILLAR SIEMPRE LA MISMA INFORMACION
    // Y QUE SEA CORRELATIVA
    const chunk = videos.slice(i, i + MAX_VIDEO_PER_PAGE);
    // LAS METEMOS EN LA CAMION
    result.push(chunk);
  }
  return result;
}

// DINERO HACIENDA IMPUESTO, ESTA EN EL MEDIO PERO EN LUGAR DE QUITAR LO QUE HACE ES CAMBIAR O AÑADIR, O TAMBIEN QUITAR
const postprocessVideoInfo = (videos: (typeof VIDEOS) = []) => {
  return videos.map((video, index) => {
    return {
      ...video,
      // ESTO NO TIENE IMPORTANCIA ES SOLO PARA MODIFICAR LAS IMAGENES
      image: video.image.replace('*', `${index}`),
      // ESTE SIII!!! ESTE ES EL QUE PIDEN EN EL EJERCICIO, LO QUE HACEMOS ES ENCRYPTAR EL NOMBRE DEL VIDEO
      // EN HASH MD5 PARA GENERARLO EN UNA NUEVA PROPIEDAD PARA EL EJERCICIO
      hashmd5: generateHashMd5(video.name),
    };
  });
};

// ESTA FUNCION REPRESENTA UNA LLAMADA GET DE UN SERVIDOR EN LA CUAL LE PASAMOS EL PARAMETRO PAGE, INDICANDO
// LA PAGINA QUE QUEREMOS Y NOS DEVUELVE INFORMACION DEL CANAL, TAL COMO LOS VIDEOS DE ESA PAGINA!!! COMO LA
// INFORMACION DEL CANAL
export async function getVideos({ page }: any) {
  const chunks = createVideoChunks(VIDEOS);
  // ESTO ES SOLO PARA ASEGURAR QUE QUE AUNQUE NO EXISTA PAGINA INICIAL, PUEDA PILLAR LA PRIMERA PAGINA
  const initialPage = (page && page > 1) ? page - 1 : 0;

  return {
    videos: postprocessVideoInfo(chunks[initialPage]),
    channelStats: CHANNEL_STATS,
    page,
    maxItems: VIDEOS.length,
  };
}
