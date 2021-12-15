import React, { useState, useEffect } from "react";
import { createURL } from "../api/api";

const Formulario = ({ setCertificado, certificado }) => {
  const [proyecto, guardarProyecto] = useState({
    description: "",
    name: "",
    imageURL: "",
    price: 1,
    dateDomain: "",
    daysExp: "",
  });

  // Extraemos las variables
  const { description, name, imageURL, price, dateDomain } = proyecto;
  const [error, setError] = useState(false);

  // Lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if (
      [
        proyecto.description,
        proyecto.name,
        proyecto.imageURL,
        proyecto.dateDomain,
      ].includes("")
    ) {
      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }

    setError(false);

    // Objeto certificado
    const guardarFormulario = async () => {
      const hola = await createURL(proyecto);
      window.location.reload();
      return "Listo";
    };

    guardarFormulario();
    // Reiniciar el formulario
    guardarProyecto({
      description: "",
      name: "",
      imageURL: "",
      price: 1,
      dateDomain: "",
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de certificados
      </h2>
      <p className="text-lg mt-5 text-center">
        Agrega Certificados y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-5 px-5 mb-10"
      >
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>Todos los campos son obligatorios</p>
          </div>
        )}
        <div className="mb-5">
          <label
            htmlFor="certificado"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del dominio
          </label>
          <input
            id="certificado"
            type="text"
            placeholder="Niubiz en linea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="description"
            value={description}
            onChange={onChangeProyecto}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="URL"
            className="block text-gray-700 uppercase font-bold"
          >
            URL Certificado
          </label>
          <input
            id="URL"
            type="text"
            placeholder="www.example.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="name"
            value={name}
            onChange={onChangeProyecto}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="dominiodate"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha vencimiento dominio
          </label>
          <input
            id="datedominio"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="dateDomain"
            value={dateDomain}
            onChange={onChangeProyecto}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-gray-700 uppercase font-bold"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Describe el dominio"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="imageURL"
            value={imageURL}
            onChange={onChangeProyecto}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase rounded-md font-bold hover:bg-indigo-700 transition-all"
          value="Add certificate"
        />
      </form>
    </div>
  );
};

export default Formulario;
