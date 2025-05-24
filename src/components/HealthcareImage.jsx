 import human from '../assets/human.webp'; 
 const HealthcareImage = () => (
  <div className="relative">
    <div className="w-64 h-80 mx-auto relative bg-gradient-to-b from-orange-200 to-orange-300 rounded-full opacity-90">
      {/* Simplified human figure representation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl">

          <img src={human} />
        </div>
      </div>
      
     
    </div>
    
    {/* Control slider */}
    <div className="flex justify-center mt-4">
      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors">
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  </div>
);
export default HealthcareImage;