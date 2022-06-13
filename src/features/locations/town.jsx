import Image from "next/image";
import { format } from "date-fns";

export default function Town({ teaser, startsAt, headline, location, tag }) {
  return (
    <div className="flex items-center w-full relative">
      <div className="h-[190px] w-[270px] relative">
        <Image
          className="object-fill"
          layout="fill"
          src={`/images/${location.split(",")[0].toLowerCase()}.jpg`}
        />
        <div
          className={`${
            tag === "domestic" ? "border-[#32C5FF]" : "border-[#F7B500]"
          } absolute top-[10px] border-l-[6px] -left-[6px] font-[400] tracking-wide text-[14px] bg-white px-[8px] py-[4px]`}>
          {tag.toUpperCase()}
        </div>
      </div>
      <div className="w-1/2 p-8 bg-white h-[190px]">
        <div className="text-gray-400 uppercase text-sm">{headline}</div>
        <div className="text-[24px] font-[700] text-gray-800">{location}</div>
        <div className="font-medium text-gray-700">
          {format(new Date(startsAt), "MMMM', 'dd', 'yyyy")}
        </div>

        <div className="text-sm">{teaser.split(".")[0]}</div>
      </div>
    </div>
  );
}
