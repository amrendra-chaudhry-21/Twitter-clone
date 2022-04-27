import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="https://th.bing.com/th/id/OIP.8_iebuNRocZqbZ6L9S8xbgHaFj?pid=ImgDet&rs=1" alt="profile.png.jpg" />
        </div>
        <div className="posts__first__name">
          <strong>Amrendra Chaudhary</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
        @Amrendra_43<span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          iure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere
          aliquid dolores placeat vitae accusamus excepturi officiis magnam
          pariatur?
        </div>
        <div className="postss__details__img">
          <img src="https://pbs.twimg.com/media/FP12663akAEbj3W?format=jpg&name=900x900" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;