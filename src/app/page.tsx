import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Story from "@/components/sections/Story";
import Solution from "@/components/sections/Solution";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Story />
        <Solution />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
