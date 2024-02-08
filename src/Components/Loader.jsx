import React from "react";
import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <Bars
      height="80"
      width="80"
      color="black"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
