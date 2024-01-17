"use client";

import Text from "@/components/text";
import Title from "@/components/title";
import "@/styles/globals.css";
import Image from "next/image";
import React from "react";

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
      <Image
        src={image}
        alt=""
        width={400}
        height={300}
        sizes="(width: 100%)"
        className="rounded-t-lg w-full"
      />
      <div className="p-5">
        <Title title={name}></Title>
        <p className=" text-lg  font-normal text-gray-100">{date}</p>

        {/* ----------------- */}
        <Text text={visits}></Text>
        <Text text={hashmd5}></Text>
      </div>
    </div>
  );
};

export default VideoInfo;
