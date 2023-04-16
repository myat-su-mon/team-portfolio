import React from "react";

const Foot = () => {
  return (
    <div>
      <div className=" bg-gray-700 py-14 px-28 flex items-center justify-between">
        <div className="text-white flex flex-col gap-16 w-[50%]">
          <h2
            className=" text-[40px]
          "
          >
            Let's Work Together
          </h2>
          <p>
            We'll do our best for our client .Trust us , we must not make our
            client regret about project. Our direction is to get trust and keep
            working long tern with our client.{" "}
          </p>
          <div className="flex gap-16">
            <div>
              <p>Call now:</p>
              <button>+95 425212523</button>
            </div>
            <div>
              <p>Email now:</p>
              <button>hashtag.team@gmail.com</button>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col gap-16 w-[40%] ">
          <p>We'll contact you later.</p>
          <div>
            <input
              className=" text-gray-700 outline-none rounded-l-lg text-lg py-2 "
              type="email"
            />
            <button className=" rounded-r-lg text-white bg-[#A30CFF] text-lg py-2 px-4">
              SEND
            </button>
          </div>
          <p>Follow Me:</p>
        </div>
      </div>
      <div className=" text-white flex justify-between px-28 bg-[#A30CFF]">
        <button>LOGO</button>

        <div>
          <div className=" main-bg-color p-4 font-color rounded-md">
            <p className="font-bold text-center">
              Copyright & copy {new Date().getFullYear()}@codeByNoone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
