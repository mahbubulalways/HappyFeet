import collection1 from "@/assets/collection/men.jpg";
import collection2 from "@/assets/collection/women.jpg";
import collection3 from "@/assets/collection/kids.jpg";
import collection4 from "@/assets/collection/accessories.jpg";
import Image from "next/image";

const Collections = () => {
  const collections = [
    {
      id: 1,
      image: collection1,
      link: "/mens",
    },
    {
      id: 11,
      image: collection2,
      link: "/mens",
    },
    {
      id: 111,
      image: collection3,
      link: "/mens",
    },
    {
      id: 1111,
      image: collection4,
      link: "/mens",
    },
  ];
  return (
    <div className="container grid grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-10 pt-10 xl:pt-20">
      {collections.map((collection) => (
        <div key={collection?.id}>
          <Image src={collection?.image} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default Collections;
