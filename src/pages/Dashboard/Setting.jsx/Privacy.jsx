import { useEffect, useState } from "react";

export const PrivacyContent = () => {
  const [privacy, setPrivacy] = useState([]);

  useEffect(() => {
    fetch("/privacy.json")
      .then((res) => res.json())
      .then((data) => setPrivacy(data));
  }, []);

  return (
    <div className="space-y-6 text-black text-left p-4">
      {privacy.map((section, index) => (
        <div key={index}>
          <h2 className="font-bold text-lg mb-2">{section.section}</h2>

          {section.content && <p className="mb-4">{section.content}</p>}

          {section.list && (
            <ul className="list-disc pl-6 space-y-1">
              {section.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {section.subSections && (
            <div className="space-y-3 mt-3">
              {section.subSections.map((sub, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold">{sub.title}</h3>
                  {sub.content && <p>{sub.content}</p>}
                  {sub.list && (
                    <ul className="list-disc pl-6 space-y-1">
                      {sub.list.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
