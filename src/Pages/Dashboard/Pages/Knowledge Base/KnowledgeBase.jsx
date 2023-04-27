import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Databases from "../../../../Common/Tabs/Databases/Databases";
import WebPage from "../../../../Common/Tabs/WebPage/WebPage";
import Documents from "../../../../Common/Tabs/Documents/Documents";
import Profile from "../../../../Common/Tabs/Profile/Profile";
import Sinppets from "../../../../Common/Tabs/Sinppets/Sinppets";
import Socials from "../../../../Common/Tabs/Socials/Socials";
import ProfileIcon from "../../../../Assets/icons/profile.svg";
import WebIcon from "../../../../Assets/icons/web.svg";
import DatabaseIcon from "../../../../Assets/icons/database.svg";
import DocumentIcon from "../../../../Assets/icons/document.svg";
import SocialIcon from "../../../../Assets/icons/social.svg";
import SnippetIcon from "../../../../Assets/icons/snippet.svg";
import CustomButton from "../../../../Common/CustomButton";
import RefreshIcon from "../../../../Assets/icons/refresh.svg";

const KnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [step, setStep] = useState(0);

  const Tabs = [
    { title: "Profile", icon: ProfileIcon, component: <Profile /> },
    {
      title: "Web Page",
      icon: WebIcon,
      component: <WebPage hideText={true} />,
    },
    {
      title: "Databases",
      icon: DatabaseIcon,
      component: <Databases hideText={true} />,
    },
    {
      title: "Documents",
      icon: DocumentIcon,
      component: <Documents hideText={true} />,
    },
    {
      title: "Socials",
      icon: SocialIcon,
      component: <Socials hideText={true} />,
    },
    {
      title: "Snippets",
      icon: SnippetIcon,
      component: <Sinppets hideText={true} />,
    },
  ];

  const getCurrentTab = () =>
    Tabs.map((item) => {
      if (item.title === activeTab) return item.component;
    });

  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4 text-xl font-bold text-[#29303D]">
          Knowledge base
        </h1>
        <p className="mb-3 text-base text-[#000000]">
          Right off the bat, your AI chat agent boasts a remarkable grasp of the
          world and can engage in conversations on a wide array of subjects. To
          further enhance its capabilities, you can equip it with specialized
          knowledge about your website, company, products, and more.
        </p>
        <p className="mb-3 text-base text-[#000000]">
          Discover more: Tips for Structuring Your Knowledge Base (link)
        </p>
        <p className="mb-3 text-base text-[#000000]">
          Even if you select a different secondary language for your chatbot in
          Settings, your knowledge base must be in English. Don't worry – your
          AI chat agent will automatically converse in your chosen language.
        </p>
      </div>
      <div className="p-8 bg-white border border-[rgba(102, 112, 133, 0.2]  rounded-xl">
        <div className="flex justify-between ">
          <div>
            <h1 className="mb-2 text-base font-bold text-[#29303D]">
              Knowledge Base
            </h1>
            <p className="mb-8 text-sm font-medium text-[#29303D]">
              Select the relevant knowledge tab & edit your knowledge!
            </p>
          </div>
          <div>
            <div className="flex items-center justify-end">
              <CustomButton title={"Retrain Agent"} prefix={RefreshIcon} styles="py-2 px-4"/>
            </div>
            <div className="flex items-center justify-end w-60 text-left mt-2">
              <span className="w-3 h-3 inline-block bg-[#FFDD55] rounded-full"></span>
              <p className="ml-1 text-sm font-medium text-[#29303D70]">
              5 Changes Since Last Retraining
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          {Tabs.map((item, index) => (
            <div
              className={`flex px-4 pb-1 whitespace-nowrap  cursor-pointer border-b-2${
                index === step ? " border-[#7F56D9]" : ""
              }`}
              onClick={() => {
                setStep(index);
                setActiveTab(item.title);
              }}
            >
              <img src={item.icon} alt="" />
              <p
                className={`ml-2 text-sm font-bold ${
                  index === step ? "text-[#7F56D9]" : "text-[#667085]"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="min-h-16"> {getCurrentTab()}</div>
      </div>
    </DashboardLayout>
  );
};

export default KnowledgeBase;