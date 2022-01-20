import React from "react";
import VideoPlayer from "./VideoPlayer";
const Product = ({ videoId, price, description, title }) => {
  return (
    <div className="product br">
      <section className="product_vid">
        <VideoPlayer videoId={videoId} />
      </section>
      <section className="product_details">
        <div className="grid_1_1">
          <span className="badge b-gr">${price}</span>
          <span className="badge b-pur">
            for {price > 2000 ? "adults" : "kids"}
          </span>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </section>
    </div>
  );
};
export default Product;
