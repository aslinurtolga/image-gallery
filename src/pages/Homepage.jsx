import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>My Photograph Portfolio</h1>
      <div className="img">
        {data.map((d) => {
          return <Picture data={d} />;
          // map func: her dizi öğesi için bir işlev çağırarak yeni bir dizi oluşturur. orjinal diziyi değiştirmez
          // burada map func ile datanın içerisinde ki Pictureları çağırarak yeni bir dizi return ediyoruz
        })}
      </div>
    </div>
  );
};

export default Homepage;
