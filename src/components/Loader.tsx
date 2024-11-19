import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full md:w-[797px] mx-auto flex items-center justify-center h-screen ">
      <PacmanLoader color="#FD3846" />
    </div>
  );
};

export default Loader;
