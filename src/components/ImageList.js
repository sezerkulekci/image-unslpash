import React from "react";
import ImageItem from "./ImageItem";

const ImageList = ({ imagesPlaceholder }) => {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
};

export default ImageList;
