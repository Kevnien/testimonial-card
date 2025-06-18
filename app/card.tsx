import Profile, { ProfileProps } from "./profile";

interface CardProps extends ProfileProps {
  testimony: string;
}

export default function Card({
  name,
  thumbnailSrc,
  tagName,
  testimony,
}: CardProps) {
  return (
    <div className="card w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg">
      <Profile name={name} thumbnailSrc={thumbnailSrc} tagName={tagName} />
      <p className="main-text font-normal text-base text-neutral-600  line-clamp-3 text-ellipsis">
        {testimony}
      </p>
    </div>
  );
}
