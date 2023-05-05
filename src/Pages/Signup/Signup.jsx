import React from "react";
import CustomInput from "../../Common/CustomInput";
import CustomButton from "../../Common/CustomButton";
import Logo from "../../Assets/icons/logo.svg";
import EmailIcon from "../../Assets/icons/email.svg";
import PasswordIcon from "../../Assets/icons/password.svg";
import GoogleIcon from "../../Assets/icons/google.svg";
import TickIcon from "../../Assets/icons/tick.svg";
import NextonLogo from "../../Assets/icons/nexton.svg";
import StrategicSystemsLogo from "../../Assets/icons/strategic-systems.svg";
import ClearBoxLogo from "../../Assets/icons/clearbox.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col-reverse lg:grid  lg:grid-cols-2 lg:items-center mx-auto lg:h-screen">
      <div className="bg-[#ECECFF] pb-10 lg:pb-0  mt-10 lg:mt-0 h-full flex items-center">
        <img className="absolute top-6 left-6 w-48" src={Logo} alt="" />
        <div className="mt-10 px-4 lg:px-10 w-full lg:w-4/5 ">
          <h1 className="text-3xl font-bold text-[#29303D] leading-10">
            Set up your AI assistant in just 5 minutes
          </h1>
          <p className="mt-4 text-base text-[#667085]">
            Set up your AI assistant in just 5 minutes
          </p>
          <div className="mt-6 mb-10">
            <div className="flex mb-5">
              <img src={TickIcon} alt="" />
              <p className="ml-2 text-base text-[#667085]">
                Boost your revenue by up to 24%
              </p>
            </div>
            <div className="flex mb-5">
              <img src={TickIcon} alt="" />
              <p className="ml-2 text-base text-[#667085]">
                Get 24/7 live chat at a fraction of the cost
              </p>
            </div>
            <div className="flex mb-5">
              <img src={TickIcon} alt="" />
              <p className="ml-2 text-base text-[#667085]">
                Have the AI agent answer based on your custom knowledge
              </p>
            </div>
          </div>
          <p className="mb-10 text-xl text-[#29303D] font-bold">
            Trusted by 1000s of companies
          </p>
          <div className="flex overflow-auto -mx-3">
            <img className="mr-8" src={NextonLogo} alt="" />
            <img className="mr-8" src={StrategicSystemsLogo} alt="" />
            <img className="mr-8" src={ClearBoxLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-20 lg:mt-10 px-4 lg:px-10 lg:w-4/5 lg:ml-auto">
        <h1 className="text-4xl text-[#101828] leading-[60px] font-semibold">
          Start Your Free Trial
        </h1>
        <p className="text-lg text-[#667085] mt-1 mb-4">
          No credit card required.
        </p>
        <CustomInput
          label="Email"
          prefix={EmailIcon}
          type="text"
          placeholder="Your Work Email"
          onChange={() => {}}
        />
        <CustomInput
          label="Password"
          prefix={PasswordIcon}
          type="text"
          placeholder="Enter Password"
          onChange={() => {}}
        />
        <CustomInput
          label="Confirm Password"
          prefix={PasswordIcon}
          type="text"
          placeholder="Enter Password"
          onChange={() => {}}
        />
        <CustomButton
          styles="mt-6 w-full flex justify-center"
          title="Sign Up"
          onClick={() => {}}
        />
        <p className="mt-6 mb-8 text-sm text-center text-[#344054] font-medium">
          By signing up, you agree to the{" "}
          <a className="underline">Terms of Service</a> and{" "}
          <a className="underline">Privacy Policy</a>.
        </p>
        <button
          className="w-full flex items-center justify-center border border-[rgba(0, 0, 0, 0.26)] rounded-xl py-3 px-5 text-[#667085] text-base font-medium"
          onClick={() => {}}
        >
          <img className="mr-3" src={GoogleIcon} alt="" />{" "}
          <span>Sign Up With Google</span>
        </button>
        <p className="pt-1 flex justify-end underline text-blue-600">
          <Link to="/signin">Already have an account.</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
