import { useClima } from "../hooks/useClima";

export const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;

  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2>Clima de {name} es:</h2>

      <p>Temperatura Actual: {parseInt(main.temp - kelvin)}°C</p>
      <p>Temperatura Mínima: {parseInt(main.temp_min - kelvin)}°C</p>
      <p>Temperatura Máxima: {parseInt(main.temp_max - kelvin)}°C</p>
    </div>
  );
};
