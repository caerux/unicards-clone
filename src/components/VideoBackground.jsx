const VideoBackground = () => {
  return (
    <div className="relative min-h-screen bg-transparent flex justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
      >
        <source src="nxt_wave_bg.mp4" type="video/mp4" />
      </video>

      <div className="xl:container md:mx-10 items-center">
        <div className="flex justify-between">
          <img src="/uni.svg" className=" h-20 w-20 " />
          <div className="align-middle items-center p-6">
            <button className="bg-gray-700 hover:bg-black text-white font-bold py-2 rounded-md">
              <span className="p-2 px-6">Uni Paycheck</span>
            </button>
          </div>
        </div>

        <div className="flex-1 items-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <div className="md:w-1/2 p-4 text-center md:text-left">
                <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  NX Wave.
                  <span className="font-medium">
                    The next-gen credit card for those who love rewards.
                  </span>
                </p>

                <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-5">
                  1% Cashback5x + RewardsZero + Forex Markup
                </p>
              </div>

              <div className="md:w-2/3 w-1/2 flex flex-col text-center md:text-left justify-between">
                <div className="mt-8 flex bg-black rounded-md p-1 justify-between">
                  {" "}
                  <input
                    type="number"
                    placeholder="Enter your number"
                    className="pl-2 rounded-md w-full md:w-auto bg-transparent"
                  />
                  <button className="flex text-sm bg-yellow-500 p-2 hover:bg-green-700 text-black font-bold rounded-md ml-2">
                    Apply Now
                  </button>
                </div>
                <div className="mt-5 flex items-center">
                  <input type="checkbox" id="terms-agree" className="mr-2" />
                  <label for="terms-agree" className="text-xs">
                    You agree to be contacted by Uni Cards over Call, SMS, Email
                    or WhatsApp to guide you through your application.
                  </label>
                </div>
              </div>
            </div>

            <img
              className="w-full md:max-w-sm lg:max-w-md xl:max-w-lg mt-4 md:mt-0"
              src="/nx_wave_hero.png"
              alt="1% Cashback"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
