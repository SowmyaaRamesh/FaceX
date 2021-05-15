import React, { useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

export const Capture = () => {
  const [img, setImg] = useState("");
  const videoConstraints = {
    width: 320,
    height: 400,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);

    console.log(imageSrc);
    axios
      .post("http://localhost:5000/saveImg", {
        data: imageSrc,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [webcamRef]);

  return (
    <>
      <div className="container">
        <div className="preview-container">
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={320}
            videoConstraints={videoConstraints}
          />
          <button className="btn" onClick={capture}>
            <AddAPhotoIcon className="icon" />
            Capture
          </button>
        </div>
        <div className="filters">
          <div className="table">
            <div className="filter-options">
              <h2>Filters</h2>
              <div className="radio-group">
                <input type="radio" name="filter" id="f1" />
                <label htmlFor="f1">Filter1</label>
              </div>

              <div className="radio-group">
                <input type="radio" name="filter" id="f2" />
                <label htmlFor="f2">Filter1</label>
              </div>

              <div className="radio-group">
                <input type="radio" name="filter" id="f3" />
                <label htmlFor="f3">Filter1</label>
              </div>

              <div className="radio-group">
                <input type="radio" name="filter" id="f4" />
                <label htmlFor="f4">Filter1</label>
              </div>

              <div className="radio-group">
                <input type="radio" name="filter" id="f5" />
                <label htmlFor="f5">Filter1</label>
              </div>
            </div>
            <div className="article-options">
              <h2>Articles</h2>
              <div className="radio-group">
                <input type="radio" name="article" id="a1" />
                <label htmlFor="a1">Article1</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="article" id="a2" />
                <label htmlFor="a2">Article1</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="article" id="a3" />
                <label htmlFor="a3">Article1</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="article" id="a4" />
                <label htmlFor="a4">Article1</label>
              </div>
              <div className="radio-group">
                <input type="radio" name="article" id="a5" />
                <label htmlFor="a5">Article1</label>
              </div>
            </div>
          </div>
          <button className="btn apply-btn">
            <AddToPhotosIcon className="icon" />
            Apply
          </button>
        </div>

        <div className="final-img">
          <img
            className="edited-image"
            src={img}
            alt="bace"
            width="320"
            height="400"
          />
          <button className="btn ">
            <GetAppIcon className="icon" />
            Edited Image
          </button>
          <button className="btn ">
            <GetAppIcon className="icon" />
            Original Image
          </button>
        </div>
      </div>
    </>
  );
};
