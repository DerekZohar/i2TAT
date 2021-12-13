import translateAPI from "app/api/modules/translateAPI";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function Selector({ language, onChange }) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    translateAPI.getLanguages().then((res) => {
      setLanguages(res.data);
    });
  }, [language]);
  return (
    <Select
      value={language}
      options={languages.map((item) => {
        return { label: item.name, value: item.code };
      })}
      onChange={(e) => onChange(e)}
    />
  );
}
