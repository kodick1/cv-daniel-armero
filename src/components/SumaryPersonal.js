{/* sumary personal */}
const SumaryPersonal = () => {

    return (
            <div>
        <div className="bg-white shadow-md rounded-lg mb-6">
            <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg">
              <h3 className="text-lg font-semibold">Quien Soy</h3>
            </div>
              {/* Personal Summary */}
            <div className="p-4">
              <p>Soy un estudiante de ingenieria en telematica con actitud y ganas de aprender mas sobre el desarrollo de software, con experiencia de 6 meses en el diseño de sitios web utilizando React.js y Bootstrap. Mi enfoque se centra en desarrollar interfaces de usuario intuitivas y responsivas, optimizadas para proporcionar una experiencia de usuario unica. Además, tengo habilidades en la traducción de contenido y la gestión de la introducción de datos.</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg mb-6">
            <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg">
              <h3 className="text-lg font-semibold">Programas</h3>
            </div>
               {/* Skills */}
               <div className="p-4 flex gap-4 flex-wrap">
  <p className="px-2 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 cursor-pointer">GIT</p>
  <p className="px-2 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 cursor-pointer">MySQL</p>
  <p className="px-2 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 cursor-pointer">PHP-POO</p>
  <p className="px-2 py-2 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600 cursor-pointer">Query-Ajax</p>
  <p className="px-2 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 cursor-pointer">Java</p>
  <p className="px-2 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 cursor-pointer">JavaScript</p>
  <p className="px-2 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 cursor-pointer">HTML</p>
  <p className="px-2 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 cursor-pointer">Bootstrap</p>
 </div>
 </div>
 </div>
    );
};
export default SumaryPersonal;