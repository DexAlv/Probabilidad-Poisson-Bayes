import { useState } from "react";
import Card from "./Card";

function Poisson() {
  const [lambda, setLambda] = useState(0);
  const [X, setX] = useState(0);
  const [resultado, setResultado] = useState(null);

  function factorial(n) {
    if (n < 0) return undefined;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

  function calcularPoisson(lambda, x) {
    const e = 2.718281828;
    const res = (Math.pow(e, -lambda) * Math.pow(lambda, x)) / factorial(x);
    setResultado(res * 100);
  }

  return (
    <div className="tarjeta">
      <Card
        title="Distribución de Poisson"
        description="La distribución de Poisson es una distribución de probabilidad discreta
        que describe la probabilidad de que un número determinado de eventos
        ocurran en un intervalo fijo de tiempo o espacio."
        image="./poisson.jpg"
        resize="30%"
        datos_formula={["λ es la tasa media de ocurrencias", "x es el número de eventos"]}
        key={1}
      />
      <h3 style={{textAlign: "center", marginTop: "15px"}}>Calculadora</h3>
      <div className="calculadora">
        <div className="calc-form">
          <div className="input-container">
            <label htmlFor="lambda">λ:</label>
            <input
              type="number"
              step="0.01"
              id="lambda"
              name="lambda"
              onChange={(e) => setLambda(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="equis">X:</label>
            <input
              type="number"
              id="equis"
              name="equis"
              onChange={(e) => setX(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              calcularPoisson(lambda, X);
            }}
          >
            Calcular Poisson
          </button>
        </div>
        <h3>{!resultado ? "" : resultado+" %"} </h3>
      </div>
    </div>
  );
}

export default Poisson;
