import FadeIn from "@/components/FadeIn";

const steps = [
  {
    num: "①",
    title: "公式LINEを友達追加",
    body: "公式LINEではプログラミング、\nIT就活に関する質問に\n可能な限りお答えしています\n\nロードマップを受け取り\n開発を進める中で分からないことは\n相談してください！\n\n必要な人は電話での対応もOKです",
  },
  {
    num: "②",
    title: "簡単なアンケートに答える",
    body: "より良質なコンテンツ発信のため\n3分ほどで終わるIT就活に関する\nアンケートに協力してください！",
  },
  {
    num: "③",
    title: "回答をお知らせすれば直接、てつやからメッセージが届きます",
    body: "メッセージを確認したら\n優秀制作ロードマップをお渡しします！",
  },
];

type Props = {
  compact?: boolean; // stepsのみ表示、LINEボタンなし
};

export default function CTA({ compact = false }: Props) {
  return (
    <section id={compact ? undefined : "cta"} className="py-12 sm:py-16 px-4 sm:px-6 bg-[var(--navy-light)]">
      <div className="max-w-xl lg:max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--slate-white)] mb-2">
            「優秀制作ロードマップ」
          </h2>
          <p className="text-[var(--teal)] text-xs sm:text-sm tracking-normal mb-12 sm:mb-16">
            ロードマップの受け取り方
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4 text-left" style={{ marginBottom: compact ? 0 : "3rem" }}>
          {steps.map(({ num, title, body }, i) => (
            <FadeIn key={`${compact ? "c" : "f"}-${num}`} delay={i * 120}>
              <div>
                <div className="flex items-start gap-4 bg-[var(--navy)] border border-[var(--navy-shadow)] rounded-lg p-5 sm:p-6">
                  <span className="text-[var(--teal)] font-mono font-bold text-lg shrink-0 mt-0.5">
                    {num}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[var(--slate-white)] font-semibold text-sm sm:text-base mb-2">
                      {title}
                    </p>
                    <p className="text-[var(--slate)] text-sm leading-loose whitespace-pre-line">
                      {body}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center my-2">
                    <span className="text-[var(--slate)] text-xl">↓</span>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {!compact && (
          <FadeIn delay={400}>
            <p className="text-[var(--slate-white)] text-base sm:text-lg leading-loose mb-10 mt-12 whitespace-pre-line">
              {"何も意識してなかったけど\n動き出したい\n\nどうせ働くなら\nやりがいのある内定をゲットしたい！\n\nその一歩目をここで\n踏み出してみませんか？"}
            </p>

            <a
              href="https://lin.ee/kZTkHjkV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#06C755] hover:bg-[#05b34c] text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg transition-colors duration-300 shadow-[0_0_30px_rgba(6,199,85,0.3)] hover:shadow-[0_0_40px_rgba(6,199,85,0.45)]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINE追加してプレゼントを貰う
            </a>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
