import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1300px] h-[800px] flex items-center justify-center pt-[10px] mx-44">
      <div class="grid grid-cols-2 gap-[96px]">
        <div class="hero-text-box flex flex-col justify-center">
          <h1 class="heading-primary text-[44px] text-[#555] font-bold">
            Boost <br />
            Your Business <br />
            <span className="text-primarycolor">By Us</span>
          </h1>
          <p class="hero-description pt-[22px] text-[24px] text-[#555]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            harum obcaecati assumenda libero id modi officia reprehend
            necessitatibus sint cupiditate.
          </p>
          <div class="btn btn-boost bg-primarycolor w-[200px] h-[60px] p-2 rounded-[32px] rounded-bl-md mt-4 text-white text-[22px] flex items-center justify-center">
            Boost Now
          </div>
        </div>

        <div class="hero-img-box relative">
          <div class="hero-img-img">
            <img
              src="https://i.ibb.co/znpfVcg/hero-img.jpg"
              alt="Laptop Image"
              class="w-[90%] h-[90%] rounded-[60px] rounded-br-[22px]"
            />
          </div>
          <div className="absolute w-[150px] h-[150px] bg-gradient-to-r from-[#b8b5df] to-[#8372be] rounded-full top-[50%] right left-0 translate-x-[-50%]"></div>
          <div className="absolute w-[80px] h-[80px] bg-gradient-to-r from-[#b8b5df] to-[#8372be] rounded-full bottom-0 right left-[70%] translate-y-[50%]"></div>
        </div>
      </div>
      <div class="hr">
        <hr />
        <p></p>
      </div>
    </div>
  );
};

export default Home;
