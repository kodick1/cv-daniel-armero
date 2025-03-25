{/* Professional Experience  */}
const Experience = () => {

return (  
    <div className="bg-white shadow-md rounded-lg mb-3">
    <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg">
      <h3 className="text-lg font-semibold">Experiencia Profesional</h3>
    </div>
    <div className="p-4">          
        <h4 className="font-bold">Alg Creation - Desarrollador Junior</h4>
        <p className="text-gray-600 text-sm">Junio 2023 - Enero 2024 | Bogotá, Colombia</p>
        <ul className="list-disc list-inside text-sm">
          <li>Desarrollo y soporte de aplicaciones web y móvil</li>
          <li>Diseño de interfaces agradables</li>
          <li>Integración de sistemas de control de versiones en GIT </li>
        </ul>        
    </div> 
    <div className="p-4">
        <h4 className="font-bold">Tivit S.A.S</h4>
        <p className="text-gray-600 text-sm">Febrero 2019 - Enero 2020 | Bogotá, Colombia</p>
        <ul className="list-disc list-inside text-sm">
          <li>Soporte tecnico vía remota para aplicativos de las filiales de epm</li>
          <li>Manejo de sistemas Servive Desk, Remedy </li>
        </ul>
    </div>
    <div className="p-4 ">
        <h4 className="font-bold">Colombian Outsourcing Solutions</h4>
        <p className="text-gray-600 text-sm">Noviembre 2016 - Abril 2018 | Bogotá, Colombia</p>
        <ul className="list-disc list-inside text-sm">
          <li>Soporte técnico vía remota a la red móvil de claro</li>
          <li>Mantenimiento de aplicativos y atención al cliente</li>
        </ul>
    </div>
  </div>
    );
  };
export default Experience;