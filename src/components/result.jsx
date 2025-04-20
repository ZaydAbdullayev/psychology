import { useState } from "react";
import medusa from "../assets/medusa1.png";
import {
  getPackAsImageData,
  savePackAsImage,
  uploadToImgbb,
} from "../context/fetch.service";
import { Button } from "./btn.component";

export const Result = ({ result, action }) => {
  const [sending, setSending] = useState(false);

  const cancel = () => {
    action("cancel");
  };

  const downloadResult = async () => {
    const cardElement = document.querySelector(".poster");
    savePackAsImage(cardElement);
  };

  const shareOnX = async () => {
    setSending(true);
    const cardEl = document.querySelector(".poster");
    const imgUrl = await uploadToImgbb(await getPackAsImageData(cardEl));
    const tweetText = `
MY MIND LABYRINTH RESULT

$MML
`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}&url=${encodeURIComponent(imgUrl)}`;
    window.open(tweetUrl, "_blank");
    setSending(false);
  };

  return (
    <div className="result-container">
      <h1 className="room1__title">
        Congratulations, you passed the first room.
      </h1>
      <figure className="result-content">
        <img src={medusa} alt="sl" />
        <figcaption>
          <h1>{result?.title}</h1>
          <p>{result.description}</p>
        </figcaption>
      </figure>
      <div className="btns">
        <Button text="GO BACK HOME" action={cancel} />
        <Button text="DOWNLOAD RESULT" action={downloadResult} />
        <button className={`btn-weird`} onClick={shareOnX}>
          POST TO X {sending && <BiLoaderCircle className="loader" />}
        </button>
      </div>
    </div>
  );
};
