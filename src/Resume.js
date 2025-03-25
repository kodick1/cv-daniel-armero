import React from 'react';
import './tailwind.css';

const Resume = () => {

const handleClick = () => {
const phoneNumber = '+573057194149';
const whatsappUrl = `https://wa.me/${phoneNumber}`;
window.open(whatsappUrl, '_blank');

}  

  return (
    <div className="container mx-auto px-4 py-8 ">  
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Section */}
        <div className="w-full md:w-1/2 ">
        <div className='mb-3 flex items-center shadow-md rounded-lg gap-4 p-4'>
          <img 
            src="/api/placeholder/200/200" 
            alt="Profile" 
            className="text-center rounded-full mx-auto  shadow-md" 
          />
          <h2 className="text-xl font-bold">Daniel Eduardo Armero Muñoz  </h2>
          <p className="text-gray-600">Tecnólogo en sistematización de datos</p>
          </div>
          <div className="bg-gray-300 shadow-md rounded-lg mb-6 p-4">
            <div className='font-semibold flex gap-4'>
            <a className='cursor-pointer' onClick={handleClick}>Number: +57 3057194149</a>
            <a href="mailto:danielarmero32@gmail.com" className="cursor-pointer inline-block">
            Email: danielarmero32@gmail.com
                </a>
              </div>
          </div>   
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
 <div className="bg-white shadow-md rounded-lg mb-6">
            <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg">
              <h3 className="text-lg font-semibold">Referencias</h3>
            </div>
            <div className="p-4">
              <h2 className='font-bold'>Johan García</h2>
              <p>Team leader 3205882336</p>
              <h className='font-bold'>Carlos Bello</h>
              <p>Desarrollador Full-stack 3238075336</p>
              <h2 className='font-bold'>Cristian sotelo</h2>
              <p>Analista de bases de datos 3246194520</p>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full md:w-2/4">
          {/* Professional Experience  */}
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
            </div> <div className="p-4">
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
          {/* Education */}
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
      </div>
    </div>
  );
};
export default Resume;