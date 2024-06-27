import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
  const swiperData = [
    {
      id: 1,
      bgImg: "https://source.unsplash.com/random/?fitness",
      slogan: "Keep your body",
      title: "Burning",
      desc: "Get ready to burn off some serious fat with our high quality products.",
    },
    {
      id: 2,
      bgImg: "https://source.unsplash.com/random/?gym",
      slogan: "Just Believe In",
      title: "Yourself",
      desc: "We are here to help you achieve your goals.",
    },
    {
      id: 3,
      bgImg: "https://source.unsplash.com/random/?yoga",
      slogan: "Grow Your Body",
      title: "Strength",
      desc: "Make your body stronger with our high quality products.",
    },
    {
      id: 4,
      bgImg: "https://source.unsplash.com/random/?food",
      slogan: "Good food Good helth",
      title: "Healthy  Food",
      desc: "We are here to provide best diet chart.",
    },
  ];

  return (
    <>
      <div className="w-full h-auto py-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full h-auto"
        >
          {swiperData.map((data) => (
            <SwiperSlide
              key={data.id}
              className="w-full  relative "
              style={{
                backgroundImage: `url(${data.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "70vh",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center  flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4"
                style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              >
                <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">
                  {data.slogan}
                </h5>
                <h5 className="lg:text-8xl md:text-7xl sm:text-5xl text-5xl text-white font-bold mb-4 uppercase">
                  {data.title}
                </h5>
                <p className="lg:text-lg md:text-base sm:text-base text-base text-white font-medium mb-6 text-center">
                  {data.desc}
                </p>
                <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[75%] h-14 mt-5 text-xl font-semibold rounded-full">
                  Get Started
                </PrimaryBtn>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">
          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
              1200+
            </h5>
            <p className="text-lg text-gray-600 font-medium">Members</p>
          </div>

          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
              120+
            </h5>
            <p className="text-lg text-gray-600 font-medium">Expert Trainers</p>
          </div>

          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
              1200+
            </h5>
            <p className="text-lg text-gray-600 font-medium">Members</p>
          </div>

          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
              1+
            </h5>
            <p className="text-lg text-gray-600 font-medium">
              Years of Experience
            </p>
          </div>

          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
              100+
            </h5>
            <p className="text-lg text-gray-600 font-medium">GYMs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;