const handleClick = () => {
    const phoneNumber = '+573057194149';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
}  

const WhoAmI = () => {
    return (
        <div>
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
          </div>
    );
};

export default WhoAmI;