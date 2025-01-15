import Banners from "@/components/Home/Banners/Banners";
import BestSellerProducts from "@/components/Home/BestSellerProducts/BestSellerProducts";
import Collections from "@/components/Home/Collections/Collections";
import FeatureProducts from "@/components/Home/FeatureProduct/FeatureProducts";
import JustLandProduct from "@/components/Home/JustLandProduct/JustLandProduct";
import SecondBanner from "@/components/Home/SecondBanner/SecondBanner";
import ThirdBanner from "@/components/Home/ThirdBanner/ThirdBanner";

const HomePage = async () => {
  return (
    <div>
      <Banners />
      <Collections />
      <JustLandProduct />
      <SecondBanner />
      <FeatureProducts />
      <ThirdBanner />
      <BestSellerProducts />
    </div>
  );
};

export default HomePage;
