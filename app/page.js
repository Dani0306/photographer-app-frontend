import CarouselSection from "@/components/CarouselSection";
import Galery from "@/components/Galery";
import HowDoesItWork from "@/components/HowDoesItWork";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <CarouselSection />
      <HowDoesItWork />
      <Services />
      <Galery />
    </>
  )
}
