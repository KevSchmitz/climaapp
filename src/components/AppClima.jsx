import { useClima } from "../hooks/useClima";
import { Formulario } from "./Formulario";
import { Loading } from "./Loading";
import { Resultado } from "./Resultado";

export const AppClima = () => {
  const { cargando, noResultado, resultado } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {
          cargando ? (
            <Loading />
          ) : resultado.name ? (
            <Resultado />
          ) : noResultado ? (
            <p>{noResultado}</p>
          ) : (
            <p>El Clima se va a mostrar aquí</p>
          ) /* Cuando tienes un objeto vacío y luego va a tener algo */
        }
      </main>
    </>
  );
};
