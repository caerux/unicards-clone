import React from "react";

const BlackSection = () => (
  <div>
    <div className="bg-black  justify-center items-center relative">
      <div className="container">
        <img
          className="absolute top-0 left-0 "
          src="/circles.png"
          alt="Image"
        />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 p-4 text-center md:text-left">
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              We’ve all heard of instant groceries, now say hello to
              <span className="text-green-500"> instant credit</span>
            </p>

            <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-5 text-gray-400">
              0% hassle, 100% paperless. Get your Uni Card instantly.
            </p>
          </div>

          <img
            className="w-full md:max-w-sm lg:max-w-md xl:max-w-lg mt-4 md:mt-0"
            src="/app_screen_1.webp"
            alt="1% Cashback"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 p-4 text-center md:text-left">
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              With Uni,
              <span className="text-green-500">you’re always in control.</span>
            </p>

            <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-5 text-gray-400">
              Set your own payment limits. Choose how and where you spend. Lock
              and unlock your card. All right from the app.
            </p>
          </div>

          <img
            className="w-full md:max-w-sm lg:max-w-md xl:max-w-lg mt-4 md:mt-0"
            src="/app_screen_2.webp"
            alt="1% Cashback"
          />
        </div>

        <div className="mt-4 flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/3 p-4">
            <img className="w-32" src="/whatsapp_bubble.webp" alt="Image 1" />
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white">
              Help, just a WhatsApp away. Anytime, Anyday.
            </p>
            <p className="flex text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
              During hectic work hours. On lazy Sunday mornings. In the thick of
              night. Anytime.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img
              className=" flex w-32"
              src="/rupee_bubble.webp"
              alt="Image 2"
            />
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white">
              No hidden charges, no last-minute surprises.
            </p>
            <p className="flex text-sm md:text-base lg:text-lg xl:text-xl text-gray-700">
              {" "}
              100% money back guarantee if a charge is applied without your
              knowledge.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img className="w-32" src="/antivirus_bubble.webp" alt="Image 3" />
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white">
              Super secure. Because we care about your money.
            </p>
            <img
              src="https://www.uni.cards/images/pcidss_cert.svg"
              alt="PCI DSS Certified"
              className="w-16 md:w-24 mt-2"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-700 flex justify-center items-center p-16">
      <div className="p-4 flex-row md:flex-row items-center">
        <div className="md:w-full md:pr-4 text-center xl:px-20">
          <p className="text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold text-white">
            At Uni, we’re committed to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
              delivering an unmatched credit experience{" "}
            </span>{" "}
            for millions of Indians.
          </p>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-5 text-gray-400">
            On this mission, we’ve partnered with some of the best in the
            business.
          </p>
        </div>
        <div className="md:w-full pt-16">
          <img
            src="https://www.uni.cards/images/SBM.svg"
            alt="Partner Logo"
            className="mx-auto"
          />
        </div>
      </div>
    </div>

    <div className="flex justify-center bg-black text-white p-10 h-40 items-center">
      <p className=" max-w-2xl text-center text-sm md:text-xl lg:text-2xl xl:text-2xl text-gray-400">
        Please note that to stay compliant with RBI guidelines, we have
        discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
      </p>
    </div>

    <div className="h-44 flex items-center flex-row bg-gradient-to-r from-green-500 to-yellow-300 text-white py-6 justify-center">
      <p className="mx-auto mr-4 text-xl xl:text-3xl">Download now to get started</p>
      <div className="flex flex-row mx-auto">
        <a
          href="#"
          className="mr-4 bg-white bg-transparent text-white border border-black px-4 py-2 rounded shadow-md flex items-center"
        >
          <img src="google-play.png" alt="Google Play" className="h-8 mr-2" />
          Google Play
        </a>
        <a
          href="#"
          className=" bg-transparent text-white border border-black px-4 py-2 rounded shadow-md flex items-center"
        >
          <img src="apple.png" alt="App Store" className="h-8 mr-2" />
          App Store
        </a>
      </div>
    </div>

    <div className="flex flex-row bg-gray-800 text-white py-4 justify-center items-center">
      <p className="mx-auto">
        Uni maintains the highest level of security standards
      </p>
      <img
        src="https://www.uni.cards/images/pcidss_cert.svg"
        className="mx-auto"
      />
    </div>

    <div className="bg-black text-white py-6">
      <div className="container mx-auto flex-row items-center justify-center">
        <img
          src="/uni.svg"
          alt="Image Description"
          className="h-12 w-12 mr-4"
        />
        <div>
          <p>
            Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,
            Koramangala, Bengaluru, Karnataka 560034
          </p>
          <p>Contact Us: 080 68216821</p>
          <p>Email: care@uni.club</p>
        </div>
        <hr className="border-white my-4" />

        <div className="flex justify-between text-white text-center py-4">
          <p>Grievance Redressal Mechanism - SBM Bank India</p>
          <p>CSR Policy</p>
        </div>
        <hr className="border-blue my-4" />

        <div className="flex flex-row justify-between">
          <div className="flex grid grid-cols-3 grid-rows-2 gap-4  md:text-sm ">
            <div>Instagram</div>
            <div>LinkedIn</div>
            <div>Twitter</div>
            <div>Facebook</div>
            <div>Careers</div>
          </div>
          <div className="grid grid-cols-4 gap-1 md:text-sm text-center">
            <div className="">Credit Card KFS</div>
            <div className="">Credit Card MITCs</div>
            <div className="">Uni T&Cs</div>
            <div className="">Lending Partner TnCs</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlackSection;
