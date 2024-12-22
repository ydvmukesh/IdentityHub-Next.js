import Banner from "@/components/home/Banner";
import CallToAction from "@/components/home/CallToAction";
import Service from "@/components/home/Service";
import Testimonial from "@/components/home/Testimonial";
import WhyChoose from "@/components/home/WhyChoose";


export default function Home() {
  return (
    <>
      <div className="banner-bg  2xl:mt-[-80px]">
        <Banner />
        <Service />
      </div>

      <WhyChoose features={[]} contactData={[]} detailedFeatures={[]} cardInfo={[]} secureFeatures={[]} />

      <div className="testimonail-cta-wrapper relative">
        <Testimonial />
        <CallToAction />
      </div>
    </>

  );
}
