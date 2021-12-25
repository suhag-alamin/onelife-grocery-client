import Banner from "../components/HomeComponents/Banner";
import Features from "../components/HomeComponents/Features";
import LatestProdcuts from "../components/HomeComponents/LatestProdcuts";
import ProductCategory from "../components/HomeComponents/ProductCategory";

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
    </div>
  );
}
