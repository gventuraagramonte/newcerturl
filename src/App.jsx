import React, { useEffect, useState } from "react";
import { deleteURL, fetchURL } from "./api/api";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoCertificados from "./components/ListadoCertificados";

function App() {
  const [certificado, setCertificado] = useState([]);
  const [resultado, setResultado] = useState([]);
  const eliminarPaciente = async (id) => {
    console.log("Eliminando paciente ", id);
    const borrarRegistro = await deleteURL(id);
    console.log(borrarRegistro);
    window.location.reload();
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const respuesta = await fetchURL();
      setResultado(respuesta.data.products);
    };
    consultarAPI();
  }, []);
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario certificado={certificado} setCertificado={setCertificado} />
        <ListadoCertificados
          resultado={resultado}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
