import { Fragment } from "react";

type TimelineProps = {
  size: number;
};

export const Timeline: React.FC<TimelineProps> = ({ size = 1 }) => {
  const timelineHeight = Array.from({ length: size }, () => "");
  return (
    <div className=" flex flex-col gap-[0.5px] items-center justify-start ">
      <span className="flex justify-center items-center w-4 h-4 bg-blue-900 rounded-full"></span>
      {timelineHeight.map((_, idx) => (
        <Fragment key={idx}>
          <span className=" bg-typography  w-[1px] h-20"></span>
          <span className="flex justify-center items-center w-4 h-4 bg-blue-900 rounded-full"></span>
        </Fragment>
      ))}
      {/* <span className=" bg-typography  w-[1px] h-20"></span>
      <span className="w-4 h-4 bg-blue-900 rounded-full"></span> */}
    </div>
  );
};
