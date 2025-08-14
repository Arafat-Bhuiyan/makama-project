import { useEffect, useState } from "react";

export const TermsContent = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    fetch("/public/terms.json")
      .then((res) => res.json())
      .then((data) => setTerms(data));
  }, []);

  return (
    <div className="space-y-6 text-black text-left p-4">
      {terms.map((term, index) => (
        <div key={index}>
          <h2 className="font-bold text-lg mb-2">{term.section}</h2>

          {term.content && <p className="mb-4">{term.content}</p>}

          {term.list && (
            <ul className="list-disc pl-6 space-y-1">
              {term.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {term.subSections && (
            <div className="space-y-3 mt-3">
              {term.subSections.map((sub, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold">{sub.title}</h3>
                  <p>{sub.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
