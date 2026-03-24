import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center pt-24 pb-24 px-4 sm:px-6"
    >
      <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col items-center text-center">
        <FadeIn delay={0} className="w-full text-center">
          <p className="text-[var(--teal)] text-xs sm:text-sm tracking-normal mb-5">
            あなたの本気のIT就活対策の第一歩に！
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--slate-white)] leading-tight mb-8">
            「優秀制作ロードマップ」
            <span className="block mt-2 text-[var(--teal)]">お渡しします。</span>
          </h1>
        </FadeIn>

        {/* カバー画像 */}
        <FadeIn delay={100} className="w-full text-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjtgVt5t2WL8y8w9mSAdZmkQAbh52fE5SOFINfYFucAyWYOFXxjBi5AJdsmOm6_VJ376SGo-K9xrK0Y_GXEUkrIF0ZL5xV8eT2lbCC4sC58ioggGWhvIsyc8UyQnNvr6AQRNK4rtyJSDOHi0qM9Jm-sp2VgDSmlJ_PI2jc58QjxOY1_hHsTjVWXJ3tQi0g=w537-h313"
            alt="優秀制作ロードマップ"
            className="mx-auto rounded-lg max-w-full"
            width={537}
            height={313}
          />
        </FadeIn>

        <FadeIn delay={150} className="w-full">
          <ul className="text-[var(--slate-light)] text-sm sm:text-base leading-loose mb-6 space-y-1 w-full">
            <li>・人事に評価される制作物はどんなものか？</li>
            <li>・どんなスキルを身につけるべきか？</li>
            <li>・何から始めていくといいのか？</li>
          </ul>

          <p className="text-[var(--slate)] text-sm sm:text-base leading-loose mb-8 whitespace-pre-line">
            {"が一冊にぎゅっと詰まったテキストです\n\nいつから手にしても対応できるように\n就活までの期間別で作ってます"}
          </p>
        </FadeIn>

        <FadeIn delay={250} className="w-full">
          <p className="text-[var(--teal)] text-lg sm:text-xl tracking-normal mb-4 text-center">
            中身をチラ見せします！
          </p>

          {/* コンテンツプレビュー画像 */}
          <div className="text-center mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXckW_IRWXhZpiEbSpl_3D8Ijs7UjVQgxZqYLKGiOnR4JelpOF4fNoDk3AioQjWnPOLjp7d6Uvs6umU0dUnhtZcsRNqGfCxmq1nKMmWULcE5j6gmIknTvwAHJnoIAcs-Q0FAGhYmIQ=w320-h235?key=QsqXlHy0vCkuN0hu2TOkhB-L"
              alt="ロードマップ中身プレビュー"
              className="mx-auto rounded-lg w-full max-w-sm sm:max-w-md"
              width={320}
              height={235}
            />
          </div>

          <div className="w-full max-w-md mx-auto bg-[var(--navy-light)] border border-[var(--navy-shadow)] rounded-lg p-5 mb-6">
            <p className="text-[var(--slate-light)] text-sm leading-loose whitespace-pre-line">
              {"「何を作れば評価されるか？」\n「どんなことから学ぶ必要があるか？」\n「実際何からすればいいのか？」"}
            </p>
            <p className="text-[var(--slate-white)] font-semibold text-sm mt-4">
              がこのロードマップで明確になります！
            </p>
          </div>

          <p className="text-[var(--slate-light)] text-sm sm:text-base leading-loose mb-10 whitespace-pre-line">
            {"就活で武器になる制作の作り方\n就活のためのプログラミングの学び方の手順\nを知れるだけじゃなく\n\n完成イメージの\nwebサイト・アプリも掲載しているので\n写経するドリルのようにも使える\nオススメテキストです"}
          </p>
        </FadeIn>

        <FadeIn delay={400} className="w-full text-center">
          <a
            href="#cta"
            className="w-full sm:w-auto inline-block border border-[var(--teal)] text-[var(--teal)] font-mono px-6 py-4 rounded text-sm sm:text-base hover:bg-[var(--teal)]/10 transition-colors duration-300 shadow-[0_0_20px_rgba(100,255,218,0.15)] hover:shadow-[0_0_30px_rgba(100,255,218,0.25)]"
          >
            無料で優秀制作ロードマップを受け取る →
          </a>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[var(--slate)] text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--slate)] to-transparent" />
      </div>
    </section>
  );
}
