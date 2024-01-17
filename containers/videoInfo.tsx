"use client";

import "@/styles/globals.css";
import Image from "next/image";

type VideoInfoProps = {
  name: string;
  date: string;
  visits: number;
  hashmd5: string;
  image: string;
};

const VideoInfo = ({ name, date, visits, hashmd5, image }: VideoInfoProps) => {
  return (
    <div className="shadow-lg rounded-lg border border-white ">
      {" "}
      <Image
        src={image}
        alt=""
        width={400}
        height={300}
        sizes="(width: 100%)"
        className="rounded-t-lg w-full"
      />
      <div className="p-5">
<<<<<<< HEAD:containers/info.tsx
        <h3 className="text-2xl font-bold md:text-3xl text-gray-100 mb-3"></h3>
=======
        <h3 className="text-2xl font-bold md:text-3xl text-black-100 mb-3">
          {name}
        </h3>
>>>>>>> 695027943e37542621176d4cf7bbd8a127121c43:containers/videoInfo.tsx
        <p className=" text-lg  font-normal text-gray-100">{date}</p>

        {/* ----------------- */}

        <p className=" text-lg text-gray-100">{visits} </p>
        <p className=" text-lg text-gray-100">{hashmd5} </p>
      </div>
    </div>
  );
};

export default VideoInfo;