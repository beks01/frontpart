import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

const MyPuffLoader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
        <MoonLoader color={"#32a852"} size={100} />
    </div>
  )
}

export default MyPuffLoader;