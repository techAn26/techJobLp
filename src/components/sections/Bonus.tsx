import FadeIn from "@/components/FadeIn";

export default function Bonus() {
  return (
    <section id="features" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-xl lg:max-w-2xl mx-auto text-center">
        <FadeIn>
          <p className="font-mono text-[var(--teal)] text-xs sm:text-sm tracking-widest mb-3 text-center">
            Bonus
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--slate-white)] mb-10 text-center">
            ★ また、今なら特典で
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="bg-[var(--navy-light)] border border-[var(--teal)]/30 rounded-lg p-6 sm:p-8">
            <p className="text-[var(--teal)] font-bold text-lg sm:text-xl mb-4 whitespace-pre-line text-center">
              {"人事に制作物を魅せる\nGitHubテンプレート"}
            </p>
            <p className="text-[var(--slate-light)] text-base sm:text-lg mb-6 text-center">
              をプレゼント！
            </p>

            <div className="text-center mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeFIbk4KYAtrlf_Tyi0iBDNQGyMzuPMi50IVookL4_VjrKPdKQb102gGiQDS5kYOkvG1H8hxJBJerw6Dac9HryfkE_xhIFo_B0mS1odbDUDP1I1LweJ-WAec_BrEBUixwDOwA2e3w=w320-h232?key=QsqXlHy0vCkuN0hu2TOkhB-L"
                alt="GitHubテンプレートプレビュー"
                className="mx-auto rounded max-w-full"
                width={320}
                height={232}
              />
            </div>

            <p className="text-[var(--slate)] text-sm sm:text-base leading-loose whitespace-pre-line">
              {"このテンプレートで\n自分が使えるプログラミング言語と\nその言語を駆使して制作した制作物を\n分かりやすくアピールできます\n\n優秀制作ロードマップで開発した\n制作物をうまくアピールしよう！"}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
