import Image from "next/image";

export interface ProfileProps {
  name: string;
  thumbnailSrc: string;
  tagName: string;
}

export default function Profile({ name, thumbnailSrc, tagName }: ProfileProps) {
  return (
    <div className="profile flex items-center gap-4 self-stretch">
      <Image
        src={thumbnailSrc}
        alt="profile thumbnail"
        width={50}
        height={50}
      />
      <div className="text-pair flex flex-col gap-px grow">
        <h2 className="font-semibold text-lg text-justify text-neutral-900">
          {name}
        </h2>
        <h3 className="font-normal text-sm text-neutral-600">@{tagName}</h3>
      </div>
    </div>
  );
}
