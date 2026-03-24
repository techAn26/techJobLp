import FadeIn from "@/components/FadeIn";

export default function Solution() {
  return (
    <section id="solution" className="py-20 sm:py-24 px-4 sm:px-6 bg-[var(--navy-light)]">
      <div className="max-w-xl lg:max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--slate-white)] leading-snug mb-10 whitespace-pre-line text-center">
            {"IT就活は\n優秀な制作物で\n突破できる！"}
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-[var(--slate)] text-sm sm:text-base leading-loose mb-8 whitespace-pre-line">
            {"結論、\nIT就活は優秀な制作物で\n突破できると断言します！"}
          </p>

          <p className="text-[var(--slate)] text-sm sm:text-base leading-loose mb-8 whitespace-pre-line">
            {"IT業界における\n新卒採用は\nポテンシャルを\n見る一方で\n\n他の業界と違って\n即戦力となりえそうな\n人材を求めています"}
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-[var(--slate-light)] text-sm sm:text-base leading-loose mb-8 whitespace-pre-line">
            {"だから、\n人事が評価する\n優秀な制作物を作るために\n必要な工程\n\n工程の中で\n学習が必要となる\nプログラミング言語や\nIT知識\n\n何を作るために\nどういった知識が\nどういう順番で\n必要となるのか？"}
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="bg-[var(--navy)] border border-[var(--teal)]/40 rounded-lg p-6 sm:p-8 mb-8">
            <p className="text-[var(--slate-white)] text-base sm:text-lg font-semibold mb-4 whitespace-pre-line text-center">
              {"これらを\nひとつにまとめた\n優秀制作ロードマップを\n作りました！"}
            </p>
            <p className="text-[var(--teal)] text-sm sm:text-base whitespace-pre-line text-center">
              {"優秀制作ロードマップを\nフル活用して\nIT就活を攻略しよう！"}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-[var(--slate)] text-sm sm:text-base leading-loose mb-8 whitespace-pre-line">
            {"ITの分野は広く深く\n分からないことだらけです...\n\nけど将来性はとても高く\n需要も相当あります\n\n自分の将来に\n期待するためにも\n\nここから。"}
          </p>

          <p className="text-[var(--slate-white)] text-base sm:text-lg font-semibold mb-4 whitespace-pre-line text-center">
            {"一人で迷子になる\nIT就活はもう\n辞めにしましょう"}
          </p>

          <p className="text-[var(--slate)] text-sm sm:text-base leading-loose whitespace-pre-line">
            {"どうしようもなくない状態を\n助けるんじゃなくて\n\nどうしようもなくなる前に\nあなたの力になりたいと\n思っています。"}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
