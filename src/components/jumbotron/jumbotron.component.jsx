import React from "react";

const Jumbotron = () => {
  const myName = "Mohamad Handy Nugraha";
  const myAge = 23;
  return (
    <div className="jumbotron text-center">
      <h1>Hello world, my name is {myName}</h1>
      <h3>I am {myAge} years old!</h3>
      <span>This is a simple table app.</span>
      <br />
      <button className="btn btn-success btn-lg">Subscribed!</button>
    </div>
  );
};

export default Jumbotron;
