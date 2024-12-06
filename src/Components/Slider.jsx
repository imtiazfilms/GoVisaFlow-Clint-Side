import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full px-4 lg:w-3/4 mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-xl"
      >
        <SwiperSlide>
          <div className="p-6 sm:p-8 bg-white bg-opacity-30 backdrop-blur-sm text-white rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold">Explore Visa Opportunities</h3>
            <p className="mt-4 text-base sm:text-lg">
              Find the best visa for your dream destination. Start your journey now.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 sm:p-8 bg-white bg-opacity-30 backdrop-blur-sm text-white rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold">Fast and Secure</h3>
            <p className="mt-4 text-base sm:text-lg">
              Seamlessly apply for your visa in just a few simple steps.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 sm:p-8 bg-white bg-opacity-30 backdrop-blur-sm text-white rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold">24/7 Support</h3>
            <p className="mt-4 text-base sm:text-lg">
              Our team is here to assist you anytime, anywhere, ensuring smooth processes.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
