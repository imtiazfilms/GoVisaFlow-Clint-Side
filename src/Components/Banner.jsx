import { Typewriter } from 'react-simple-typewriter';
import Slider from "./Slider";
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co.com/LJXRZsC/DALL-E-2024-12-06-16-37-00-A-visually-appealing-background-for-a-visa-related-website-banner-The-ima.webp"
        alt="Visa Banner"
        className="w-full h-auto object-cover"
      />
      <div className="absolute hidden  top-10 left-0 right-0 md:flex flex-col items-center justify-center py-12 px-4 sm:px-8 md:px-12 bg-opacity-60 text-black/80 lg:mt-16">
        <Fade duration={1500} distance="30px" triggerOnce>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Welcome to GoVisaFlow
          </h1>
        </Fade>

        <Fade duration={1500} delay={300} distance="30px" triggerOnce>
          <p className="text-lg sm:text-xl text-center max-w-lg sm:max-w-2xl">
            Your one-stop solution for hassle-free visa applications. Explore, apply, and travel with ease.
          </p>
        </Fade>

        <Fade duration={1500} delay={600} distance="30px" triggerOnce>
          <div className="mt-4 text-center text-xl sm:text-2xl font-semibold">
            <Typewriter
              words={['Explore visa options', 'Apply for your visa today!', 'Travel worldwide with ease', 'Get your visa without hassle!']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>
        </Fade>
      </div>
      <div className="absolute top-2 lg:top-80 md:top-56 lg:pb-56 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-4/5 md:w-3/5 lg:w-1/2">
        <Slider />
      </div>
    </div>
  );
};

export default Banner;
