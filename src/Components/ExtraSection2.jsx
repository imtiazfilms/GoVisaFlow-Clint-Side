const ExtraSection2 = () => {
    return (
      <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-12 px-6 rounded-t-lg shadow-xl mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="space-y-6 w-[45%] mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full">
              <span className="text-xl font-bold">1</span>
            </div>
            <p className="text-lg">Submit your application online through our platform.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full">
              <span className="text-xl font-bold">2</span>
            </div>
            <p className="text-lg">Receive expert guidance and have your documents reviewed.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full">
              <span className="text-xl font-bold">3</span>
            </div>
            <p className="text-lg">Get your visa approved without any hassle.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExtraSection2;
  