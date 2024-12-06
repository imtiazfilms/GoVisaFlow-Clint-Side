import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co.com/LJXRZsC/DALL-E-2024-12-06-16-37-00-A-visually-appealing-background-for-a-visa-related-website-banner-The-ima.webp"
        alt="Visa Banner"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-10 left-0 right-0 flex flex-col items-center justify-center py-12 px-4 sm:px-8 md:px-12 bg-opacity-60 text-black/80">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Welcome to GoVisaFlow</h1>
        <p className="text-lg sm:text-xl text-center max-w-lg sm:max-w-2xl">
          Your one-stop solution for hassle-free visa applications. Explore, apply, and travel with ease.
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-8 lg:w-3/4 xl:w-1/2">
        <Slider />
      </div>
    </div>
  );
};

export default Banner;
