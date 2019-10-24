import React from "react";
import "../scss/loading.scss";
import ReactLoading from "react-loading";

const Loading = () => (
  <div className="loading">
    <ReactLoading type="bubbles" color="#000" />
  </div>
);

export default Loading;
