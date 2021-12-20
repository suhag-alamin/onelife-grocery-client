import Banner from "../components/HomeComponents/Banner";
import Features from "../components/HomeComponents/Features";
import LatestProdcuts from "../components/HomeComponents/LatestProdcuts";

export default function Home() {
  return (
    <div>
      {/* banner  */}
      <Banner />
      {/* features  */}
      <Features />
      {/* latest products  */}
      <LatestProdcuts />
    </div>
  );
}
