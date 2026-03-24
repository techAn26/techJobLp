import FadeIn from "@/components/FadeIn";

export default function PainPoints() {
  return (
    <section className="pt-20 sm:pt-24 px-4 sm:px-6 bg-[var(--navy-light)]">
      <div className="max-w-xl lg:max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--slate-white)] leading-tight mb-12 whitespace-pre-line text-center">
            {"闇雲に動いても、\n結果は出ません。"}
          </h2>
        </FadeIn>

        <div className="space-y-4 mb-10">
          <FadeIn delay={100}>
            <div className="bg-[var(--navy)] border border-[var(--navy-shadow)] rounded-lg p-5 sm:p-6">
              <p className="text-[var(--slate-light)] text-sm sm:text-base leading-loose whitespace-pre-line">
                {"「とにかくプログラミングの\n勉強をしないと...\n\n調べた感じProgateが\nおすすめっぽいしやってみるか！」"}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-[var(--navy)] border border-[var(--navy-shadow)] rounded-lg p-5 sm:p-6">
              <p className="text-[var(--slate-light)] text-sm sm:text-base leading-loose whitespace-pre-line">
                {"「インターンにいけばスキルも\nエピソードも手に入るし\n一石二鳥じゃん！」"}
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <p className="text-[var(--teal)] text-lg sm:text-xl font-semibold mb-4 text-center">
            これではうまくいきません
          </p>
          <p className="text-[var(--slate-light)] text-base sm:text-lg mb-8 text-center">
            それに時間が足りません
          </p>

          <p className="text-[var(--slate)] text-sm sm:text-base leading-loose mb-8 whitespace-pre-line">
            {"焦りから動きたくなる\n気持ちはすごく分かります\n\nでも本当に必要なのは\nゴールまでの打算的な道筋です"}
          </p>

          <p className="text-[var(--slate-white)] font-semibold text-base sm:text-lg mb-2 text-center whitespace-pre-line">
            {"今からでも間に合います\nゴールを見据えた計画を\n立てましょう"}
          </p>

          <p className="text-[var(--slate)] text-sm sm:text-base leading-loose mt-8 whitespace-pre-line">
            {"難しい部分は私に、\nサポートさせてください！"}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
