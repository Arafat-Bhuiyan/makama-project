import { useState } from "react";

import { PrivacyContent } from "./Privacy";
import { TermsContent } from "./Terms";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Content Area */}

        <div className="">
          <div className="bg-white">
            {/* Tab Navigation */}
            <div className="">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("terms")}
                  className={`px-6 py-4 transition-colors relative text-2xl font-normal ${
                    activeTab === "terms"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-black"
                  }`}
                >
                  Terms And Condition
                </button>
                <button
                  onClick={() => setActiveTab("privacy")}
                  className={`px-6 py-4 text-2xl font-normal transition-colors relative ${
                    activeTab === "privacy"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-black"
                  }`}
                >
                  Privacy policy
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="py-4">
              {activeTab === "terms" ? <TermsContent /> : <PrivacyContent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
