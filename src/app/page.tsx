import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureVoice from "@/components/FeatureVoice";
import FeatureSchedule from "@/components/FeatureSchedule";
import FeatureSecurity from "@/components/FeatureSecurity";
import Demo from "@/components/Demo";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Signup from "@/components/Signup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-32">
        <Hero />
        <FeatureVoice />
        <FeatureSchedule />
        <FeatureSecurity />
        <Demo />
        <SocialProof />
        <Pricing />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
