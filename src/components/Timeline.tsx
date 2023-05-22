import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
const Timeline = () => {
  return (
    <div className=" flex flex-col gap-[0.5px] items-center justify-start ">
      <span className="rounded-full bg-blue-900 w-6 h-6 flex justify-center items-center p-[6px]">
        <BsCalendarEvent className="text-sm text-primary" />
      </span>
      <span className=" bg-typography  w-[1px] h-20"></span>
      <span className="rounded-full bg-blue-900 w-6 h-6 flex justify-center items-center p-[6px]">
        <BsCalendarEvent className="text-sm text-primary" />
      </span>
      <span className=" bg-typography  w-[1px] h-20"></span>
      <span className="rounded-full bg-blue-900 w-4 h-4 "></span>
    </div>
  );
};

export default Timeline;
