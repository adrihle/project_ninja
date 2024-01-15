import Image from "next/image";

type VideoInfoProps = {
  name: string,
  date: string,
  visits: number,
  hashmd5: string,
  image: string,
}

const VideoInfo = ({ name, date, visits, hashmd5, image }: VideoInfoProps) => {
  return (
  <div style={{ padding: '30px' }}>
      <Image src={image} width={300} alt={name} height={300}/>
      <br/>
      {name}
      <br/>
      {date}
      <br/>
      {visits}
      <br/>
      {hashmd5}
    </div>
  );
};

export default VideoInfo;
