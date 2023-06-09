import React from "react";
import CustomInput from "../../../Common/CustomInput";
import RefreshIcon from "../../../Assets/icons/refresh.svg";
import CloseIcon from "../../../Assets/icons/close.svg";

const SuffixButton = () => (
  <button className="ml-2 bg-active-color rounded-lg py-2 px-5  border-none text-white text-sm font-medium">
    Add
  </button>
);

const WebPage = ({ hideText = false }) => {
  return (
    <>
      {!hideText && (
        <>
          <p className="mt-8 text-base font-bold text-black">
            Add your web pages
          </p>
          <p className="mt-3 mb-2 text-base  text-dark-gray">
            List your website URLs so our AI chat agent can scan and gather
            relevant information to assist users (e.g. your homepage, blogs,
            about us page). The more content, the better.
          </p>
        </>
      )}
      <CustomInput
        styles={"mt-4"}
        placeholder="Enter URL"
        type="url"
        suffix={<SuffixButton />}
      />
      <div className="mt-4 md:mt-8">
        <div className="md:flex justify-between items-center mb-5">
          <div className="flex items-center">
            <p className="text-sm font-medium text-dark-gray">
              kaizencosmetics.com
            </p>
          </div>
          <div className="flex items-center md:w-60 justify-between text-left">
            <div className="flex items-center mt-2 md:mt-0">
              <span className="w-3 h-3 inline-block bg-recent-update-circle rounded-full"></span>
              <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
                Last analyzed 4 hours ago
              </p>
            </div>
            <div className="flex -mt-9 md:mt-0">
              <img className="mr-4 cursor-pointer" src={RefreshIcon} alt="" />
              <img className="cursor-pointer" src={CloseIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center mb-5">
          <div className="flex items-center">
            <p className="text-sm font-medium text-dark-gray">
              kaizencosmetics.com/blog/
            </p>
          </div>
          <div className="flex items-center md:w-60 justify-between text-left">
            <div className="flex items-center mt-2 md:mt-0">
              <span className="w-3 h-3 inline-block bg-recent-update-circle rounded-full"></span>
              <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
                Last analyzed 12 hours ago
              </p>
            </div>
            <div className="flex -mt-9 md:mt-0">
              <img className="mr-4 cursor-pointer" src={RefreshIcon} alt="" />
              <img className="cursor-pointer" src={CloseIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center mb-5">
          <div className="flex items-center">
            <p className="text-sm font-medium text-dark-gray">
              kaizencosmetics.com/about-us
            </p>
          </div>
          <div className="flex items-center md:w-60 justify-between text-left">
            <div className="flex items-center mt-2 md:mt-0">
              <span className="w-3 h-3 inline-block bg-old-update-circle rounded-full"></span>
              <p className="ml-1 mr-4 text-xs font-medium text-[rgba(41, 48, 61, 0.44)]">
                Last analyzed 1 week ago
              </p>
            </div>
            <div className="flex -mt-9 md:mt-0">
              <img className="mr-4 cursor-pointer" src={RefreshIcon} alt="" />
              <img className="cursor-pointer" src={CloseIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebPage;
