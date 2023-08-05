import axios from "axios";

const obtenerTodosVehiculosFachada = async () => {
  return await obtenerTodosVehiculosAPI();
};

const obtenerVehiculoFachada = async (placa) => {
  return await obtenerVehiculoAPI(placa);
};

const obtenerTodosVehiculosAPI = async () => {
  const data = axios
    .get(`http://localhost:8081/API/v1.0/Inventario/vehiculos`)
    .then((r) => r.data);
  console.log(data);
  return data;
};

const obtenerVehiculoAPI = async (placa) => {
  const data = axios
    .get(`http://localhost:8081/API/v1.0/Inventario/vehiculos/${placa}`)
    .then((r) => r.data);
  console.log(data);
  return data;
};

export { obtenerTodosVehiculosFachada, obtenerVehiculoFachada };
