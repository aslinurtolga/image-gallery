import React from "react";
const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="pictureItem">
        <div className="imageContainer">
          <img src={data.src.large} alt="img" />
          {/* // img src= "foto bağlantı adresi" jsx hali */}
        </div>
        <div className="infoPhotographer">
          <p style={{ color: "Purple" }}>{data.photographer}</p>
          {/* <p style="color: purple;">photographername</p>*/}
        </div>
      </div>
    </div>
  );
};

export default Picture;
