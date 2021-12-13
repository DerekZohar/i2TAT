import translateAPI from "app/api/modules/translateAPI";
import Selector from "app/components/Selector";
import { useEffect, useState } from "react";
import Tesseract from "tesseract.js";

export default function Home() {
  const [previewSource, setPreviewSource] = useState("");
  const [textInImage, setTextInImage] = useState("");
  const [translatedTextInImage, setTranslatedTextInImage] = useState("");
  const [percent, setPercent] = useState(0);
  const [languageToTranslate, setLanguageToTranslate] = useState({
    value: "vi",
    label: "Vietnamese",
  });

  console.log(languageToTranslate);
  const handleImageChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setPreviewSource(file);
    Tesseract.recognize(file, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setPercent(m.progress);
        }
      },
    }).then(({ data: { text } }) => {
      setTextInImage(text.trim());
      translateAPI
        .translate(text, languageToTranslate.value)
        .then((res) => {
          setTranslatedTextInImage(res.data.translatedText);
        })
        .catch((err) => {
          console.log(err.response);
        });
    });
  };

  const handlePaste = (e) => {
    e.preventDefault();
    let paste = e.clipboardData.getData("image");
    setPreviewSource(URL.createObjectURL(paste[0]));
  };

  return (
    <div className="p-20 ">
      {percent > 0 && (
        <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-sky-600 h-2.5 rounded-full transition-all duration-500 ease-linear"
            style={{ width: percent * 100 + "%" }}
          />
        </div>
      )}
      <div className="mt-4 flex justify-between gap-2">
        <label className="text-gray-700" htmlFor="name">
          <textarea
            className="flex-1 appearance-none border border-gray-300 h-96 w-[400px] py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            id="comment"
            placeholder="Enter your comment"
            name="comment"
            defaultValue={""}
            value={textInImage}
            onChange={(e) => console.log(e.target.value)}
          />
        </label>

        <div className="flex flex-col gap-4">
          <div>
            <p>Select output language</p>
            <Selector
              language={languageToTranslate}
              onChange={setLanguageToTranslate}
            />
          </div>

          <div>
            <img
              src={`${previewSource}`}
              alt=""
              onPaste={handlePaste}
              className="h-[300px] w-[300px] object-cover rounded-lg"
            />
            <input type="file" onChange={handleImageChange} />
          </div>
        </div>
        <label className="text-gray-700" htmlFor="name">
          <textarea
            className="flex-1 appearance-none border border-gray-300 h-96 w-[400px] py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            id="comment"
            placeholder="Enter your comment"
            name="comment"
            defaultValue={""}
            value={translatedTextInImage}
            onChange={(e) => console.log(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
