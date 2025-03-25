{/* Education */}
const Education = () => {

    return (
      <div>
        <div className="bg-white shadow-md rounded-lg">
        <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg">
          <h3 className="text-lg font-semibold">Estudios</h3>
        </div>
        <div className="p-4">
            <h4 className="font-bold">Tecnónlogo en Sistematización de datos</h4>
            <p className="text-gray-600">Universidad Distrital Fransisco José de Caldas 2024 - Bogotá</p>
            <h4 className="font-bold">Open English</h4>
            <p className="text-gray-600">Nivel de Inglés - en proceso</p>
            <h4 className="font-bold">Técnico en Sistemas</h4>
            <p className="text-gray-600">Sena 2015 - Soacha</p>
            <h4 className="font-bold">Bachiller Básico</h4>
            <p className="text-gray-600">Institución Educativa León XIII 2015 - Soacha</p> 
        </div>
      </div>
       <div className="bg-white shadow-md rounded-lg mt-3">
       <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg">
         <h3 className="text-lg font-semibold">Idiomas</h3>
       </div>
       <div className="p-4 flex gap-4">
           <h4 className="font-bold">Español</h4>
           <p className="text-gray-600">Nativo</p>
           <h4 className="font-bold">Inglés</h4>
           <p className="text-gray-600">B1</p>
       </div>
     </div>
     </div>
    );
};
export default Education;