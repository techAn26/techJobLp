import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import CTA from "@/components/sections/CTA";
import Story from "@/components/sections/Story";
import Solution from "@/components/sections/Solution";
import Bonus from "@/components/sections/Bonus";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bonus />           {/* Hero直後 — GitHubテンプレート特典 */}
        <PainPoints />
        <CTA />     {/* Story前 — ロードマップの受け取り方 */}
        <Story />
        <Solution />
        <CTA />             {/* 最終CTA — LINEボタン付き */}
      </main>
      <Footer />
    </>
  );
}
