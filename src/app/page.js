import Image from "next/image";
import Horizentalcard from "./components/horizentalcard";
import StepCard from "./components/StepCard";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSeciton from "./components/ThirdSeciton";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>  
    <div className="sticky top-0 z-50">
    <Navbar />
    </div>
<FirstSection />




<SecondSection />




<ThirdSeciton />




<FourthSection />




<FifthSection />




<FAQSection />
<CTASection />


<Footer />

</>


  );
}
