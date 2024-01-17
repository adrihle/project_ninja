import { Metadata } from "next/types";
import "@/styles/globals.css";

// ESTO ES MEJOR VERLO
export const metadata: Metadata = {
  title: "Prueba Junior",
  description: "Como mola esta empresa",
};

// ESTO ES UN EMVOLTORIO GENERAL PARA LA APLICACION
// AQUI SE PUEDE COLOCAR EL NAVBAR, Y OTROS ELEMENTOS
// QUE NO QUEREMOS QUE VUELVAN A RENDERIZAR CUANDO CAMBIAMOS DE PAGINA
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#1a237e" }}>{children}</body>
    </html>
  );
}
