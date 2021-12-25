import Banner from "../components/HomeComponents/Banner";
import Features from "../components/HomeComponents/Features";
import LatestProdcuts from "../components/HomeComponents/LatestProdcuts";
import ProductCategory from "../components/HomeComponents/ProductCategory";
import WeeklyDeals from "../components/HomeComponents/WeeklyDeals";

export default function Home() {
  return (
    <div>
      {/* banner  */}
      <Banner />
      {/* features  */}
      <Features />
      {/* latest products  */}
      <LatestProdcuts />
      {/* product catergory  */}
      <ProductCategory />
      {/* WeeklyDeals  */}
      <WeeklyDeals />
    </div>
  );
}
