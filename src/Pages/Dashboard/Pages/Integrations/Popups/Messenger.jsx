import React from "react";
import CustomInput from "../../../../../Common/CustomInput";
import CustomButton from "../../../../../Common/CustomButton";

const Messenger = ({ setModal }) => {
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-[#0000008F]">
      <div className="py-8 px-7 w-full mx-auto z-10 max-w-lg bg-white border border-[#66708533] rounded-lg">
        <h1 className="text-xl font-bold text-[#29303D]">
          Messenger integration
        </h1>
        <p className="mt-4 text-sm font-medium text-[#29303D]">
          Log in to{" "}
          <a
            className="underline"
            href="https://developers.facebook.com/apps"
            target="_blank" rel="noreferrer"
          >
            Facebook for Developers
          </a>{" "}
          and paste your Page ID, App secret and Access token below.{" "}
          <a
            className="underline"
            href="https://blog.quickchat.ai/post/how-to-build-an-ai-facebook-messenger-chat-bot/"
            target="_blank" rel="noreferrer"
          >
            Step-by-step guide
          </a>
        </p>
        <div>
          <CustomInput
            label="Facebook Page ID"
            type="url"
            placeholder="Enter Link"
            styles={"my-4"}
          />
          <CustomInput
            label="Facebook App Secret ID"
            type="url"
            placeholder="Enter Link"
            styles={"my-4"}
          />
          <CustomInput
            label="Facebook Access Token"
            type="url"
            placeholder="Enter Link"
            styles={"my-4"}
          />
          <div>
            <p className="mt-4 mb-1.5 text-sm font-medium text-[#344054]">
              Your Verify Token:
            </p>
            <p className="mb-4 text-sm text-[#29303D]">
              Use this Verify Token when configuring your{" "}
              <a
                className="underline"
                href="https://developers.facebook.com/apps"
                target="_blank" rel="noreferrer"
              >
                Facebook app
              </a>
            </p>
          </div>
          <div className="flex">
            <CustomButton
              title="Cancel"
              styles={"bg-white text-[#667085] w-20 px-4 py-2"}
              outlined
              onClick={() => {
                setModal("");
              }}
            />
            <CustomButton
              title="Done"
              styles={"ml-2 w-20 px-4 py-2"}
              onClick={() => {
                setModal("");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;