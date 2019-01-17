import React from "react";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button className="btn btn-primary btn-large" onClick={dec}>
        DEC
      </button>
      <button className="btn btn-primary btn-large" onClick={inc}>
        INC
      </button>
      <button className="btn btn-primary btn-large" onClick={rnd}>
        RND
      </button>
    </div>
  );
};

export default Counter;
