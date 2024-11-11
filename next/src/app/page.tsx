import Image from "next/image";
import React from "react";
import logo from "/public/kritesh-timsina.jpg";
const Home = () => {
  return (
    <div>
      <Image alt="S" height={100} width={200} src={logo} />
    </div>
  );
};

export default Home;
