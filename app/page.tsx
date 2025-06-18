import Card from "./card";

const variables = {
  testimony:
    "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding! I can only do so much with the time I have so focusing on the latest productivity technologies is crucial. Especially when creating long strings to test if the component can handle them. Private chefs videos are my secret pleasure.",
  name: "Sarah Dole",
  thumbnailSrc: "/img/profile-thumbnail.png",
  tagName: "sarahdole",
};

export default function Home() {
  const { name, testimony, thumbnailSrc, tagName } = variables;
  return (
    <div className="h-full min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[200px]">
      <Card
        name={name}
        testimony={testimony}
        thumbnailSrc={thumbnailSrc}
        tagName={tagName}
      />
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by
        <a
          href="https://www.greatfrontend.com/projects/u/username"
          target="_blank"
        >
          Kevin
        </a>
        .
      </div>
    </div>
  );
}
