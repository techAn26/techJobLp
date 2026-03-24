import FadeIn from "@/components/FadeIn";

const episodes = [
  {
    heading: "大きな目標なんてない！",
    body: "講義を受けたり、\nバイトしたり、\n友達と遊んだり\nと惰性で楽しく生活する日々\n\n正直、プログラミングやPCが\n特別好きとか得意ってわけじゃない\n\nただの理系学生にとって\n就活はただの地獄じゃないですか？\n\nYouTubeやTikTokをみたら\n意識高いビジネスピッチを\n披露する学生もみたことありますが\n僕や僕の周りはそんなことなかったです。\n\n学歴や資格も自慢できるようなものはないし\nプログラミングや仕事のスキルに\n自信が持てるわけもなく\n\nうまくいくビジョンが見えず\n将来が不安になる。",
  },
  {
    heading: "きっかけは\nインターンシップに\n参加し始める友人",
    image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd4LhrjGTJyDhgDRjv3U0SMx5WiXJjaxGv-azNC43zAgNDMJzeW3g753WCbGRYfNGXZ-CDhW1Xc1hCWaIYDIGOXNltST8e50YWEChR2XcZhOv9_Aga5Q7BO1X1M9oAGnWHIMQIXoQ?key=QsqXlHy0vCkuN0hu2TOkhB-L",
    imageWidth: 239,
    imageHeight: 195,
    body: "自分だけが取り残されているんじゃないか\nと焦り始めるくせに\n\n実際は何も始めない\n\nけど、周りにどうみられるかは気にするから\nちょっとでもいいとこいけないかな\n\nなんて考えてばっかりな自分を横目に\n友人は早期選考の話とか\nビジネスマナーの話を始めて\n\nどんどん不安になっていったのが\n僕の就活でした。",
  },
  {
    heading: "何もしないのは\n\u3000まずいと思うので。。",
    body: "絶対にインターンシップに\n参加しておいた方が良い\n\nそんな言葉が至る所で聞こえてきて\nずっと嫌だったけど\n周りで全く動き出してないやつも\nほぼいなくなって\n自分も重い腰をあげて\n初めてインターンに応募しました。",
  },
  {
    heading: "あれ！？\nインターンシップ\n全然参加できないんだけど！？",
    image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXenKvGM4phig7Xcyu6T2dVzXQW_cchKk-SreAVg05PP32SD8sSzHs4eKzRDS8_39qmIvfYeADnB3fXdWvo1H_pCC6VmjiJnimdPZYbMahanDI3kwC0Dvg_nFPmlSVllfbLoS7rrmg?key=QsqXlHy0vCkuN0hu2TOkhB-L",
    imageWidth: 231,
    imageHeight: 186,
    body: "けれど、なんの特徴もない\nただの理系学生だった僕を\n受け入れてくれる企業はなく\n\nESで全落ち、、\n動かないのは違うと思って\n\nせっかく気持ちを入れて申し込んだのに\nそんな結果になった僕は\nガチで焦り始めていました"
  },
  {

    heading: "あれ？\nもしかして本格的に\n俺、まずい？",
    body: "\n\n企業を選ばなければいける！\nとかそんな風に家族に言われることがあっても\nちゃんと受験したし\n一応プログラミングとかやってきたし\nって自分のプライドがそれを許しませんでした。\n\nそこから就活のために何かやろうと\n僕の熱が入っていったのです\n\nSPIとかTOEICとか基本情報とか\nそんなんじゃない\n\n理系就職のためのガクチカのために\n自分でアプリを開発しようと決意したんです。",
  },
  {
    heading: "よし！\nプログラミングの勉強\n始めるぞ！",
    image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdyuvwQ0xIH_SobrBszkLOL1M2QGhAvt8O2J0QVbQn8dOrbJ_hCTVe1a_u__yczfrb79CKMpaQY4ea6xXHEkWXQhj0rGG2e0Hhen0rgZMwr7DGFDJt_jZ7lQtCNenzFMu9swOiZoA?key=QsqXlHy0vCkuN0hu2TOkhB-L",
    imageWidth: 196,
    imageHeight: 196,
    body: "色々調べてみると\nProgateとかdotinstallとか\n良さそうなプログラミングの\n学習サイトがあるっぽい！\n\n正直何を勉強したらいいのか\nプログラミング言語が多すぎて\n良く分からないけど、、\n\nこのHTMLとかCSSとかを勉強すれば\nWebサイトが作れるっぽいから\nまずはここらへんをやってみるか\n\n思ったよりサクサク進むし\nそんなに難しくない\n\nコードをかけば良い感じに動くし\nなんなら少し楽しい\n\nこれなら何か作れるかもしれない！",
  },
  {
    heading: "あれ？\nエラーだらけで\nまったく動かない...",
    image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe3QEwBSBWxNdRqVKA-kMBOz1K_Cx6jWrZIex1r4d8TUem5PShtt3qsvpxKV6FS1tmZ9WtpCahodSFcMjiAps2yZJiBUdj5Y_DDbjsq8o3jnvHAYVfY5cGmlAOr0phUHKjrSk0LGw?key=QsqXlHy0vCkuN0hu2TOkhB-L",
    imageWidth: 247,
    imageHeight: 187,
    body: "オリジナルなWebサイトを作ってみようと\n色々コードを書いてみたけど\n少しアレンジしようとすると\n全然思うようにいかない、、\n\nエラーが英語で良く分からないし\nそうじゃなくてもエラーの内容が\n調べても全然良く分からない、、\n\n指示通りに手を動かす分にはうまく行くけど\n少しアレンジするとエラーになってしまう、、\n\n今こうしているうちにも、\n友達はどんどん就活を進めているのに、、\n早い人はもう内定が出たって聞くし\n俺は何しているんだろう、、",
  },
  {
    heading: "研究室の先輩に\n就活を相談してみる...",
    image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc1S_VF_3LI_cpBw0bPtTvLYgHGbVuwbOoKxMieZur3HJlPFCiZdSZNvarRGMRerYwhSf1ySg8omXIOFceq6x9vNQZvSlNsZFYHO6snt-3xKEkulgeEGGSt-7j5ft7u_MghaUXV0Q?key=QsqXlHy0vCkuN0hu2TOkhB-L",
    imageWidth: 233,
    imageHeight: 236,
    body: "途方にくれていたら\n大学の先輩が声をかけてくれて\n就活の不安を打ち明けました\n\nすると、たまたま知り合った\nIT系のベンチャー企業の社長を\n紹介してくれると言ってくれました\n\nしかもなんとちょうど\n学生インターンを探しているとのこと！\n\nITに明るい社長から直接\nプログラミングのことを教えてもらえる\n\nこんなチャンス、今しかない！と思い、\n働かせてもらうことにしました",
  },
  {
    heading: "突如始まる\nプログラマー研修",
    image: "https://storage.googleapis.com/zenn-user-upload/33d82e104f22-20240229.png",
    imageWidth: 339,
    imageHeight: 236,
    body: "ITもビジネスも、\n右も左も分からない中で\nとにかく不安でしたが\n一生懸命食らいつこうと\n覚悟しました\n\nさっそくプログラミング研修が始まり\nひやひやしながら研修をしてみると\n\n不思議なことに\nすいすいと学習を進められました\n\n内容はJavaScriptを使った実装に\n関する研修で、内容自体は\nProgateでやってたものより\n断然難しかったと思います\n\n研修の最後には\n一人で業務ツールを開発する課題を\n与えられましたが\n\nこれもなんとか\nコーディングしきることができ\n開発することができた、、\n\nなんで独学の時よりうまくいったんだろう、、\nそう思って社長に質問してみました",
  },
  {
    heading: "プログラミングは目的じゃない\n手段だよ。",
    highlight: true,
    body: "「何を目的に何を勉強するのかを考え、\n\u3000闇雲に勉強しないこと\n\u3000必要な知識をINPUTし\n\u3000コーディングでOUTPUTすること」\n\n「それから、ITの世界は広く深いから、\n\u3000まずは全体像が分かる人に\n\u3000分からないことを聞ける環境が必要だね」\n\nなるほど、、！\n\n自分はずっと\n何を作るのか？の目的が抜けて\nそんなことより闇雲にプログラミングを\n勉強しようとしてしまったから\n\nうまくいかなかったのか、、",
  },
  {
    heading: "今度こそ、\nこの学びを活かして\nプログラミングを攻略する！",
    image: "https://img-cdn.jg.jugem.jp/4a4/2064289/20200915_2128472.png",
    imageWidth: 239,
    imageHeight: 236,
    body: "そこから\nたくさんの業務を与えられ、\n自分なりに勉強を重ね\nPythonやTypeScriptなどの言語を\n使えるようになりました\n\n最後には、\n会社でちょっとした開発業務を\n一人で任されて\nなんとかやりきることができました\n\n社長からも評価され\n就活のエピソードも手に入り\n自分にも自信が持てるように\nなりました",
  },
  {
    heading: "いざ、新卒採用！",
    body: "夏のインターンの時は\nESに書くエピソードも強みも\nまったくなくて全落ちしたけど、、\n\n今回はプログラミング言語も\n開発エピソードも書くことができた！\n\nすると、\nESがほとんどの企業で\n選考通過して、\nすごく就活に\n前向きな気持ちになれました",
  },
  {
    heading: "第一志望の\nIT企業に合格！",
    highlight: true,
    image: "https://maruwanet.co.jp/staffblog/wp-content/uploads/2024/11/pose_happy_businessman_guts.png",
    imageWidth: 239,
    imageHeight: 236,
    body: "最終的には\n第一志望の\nIT系の開発会社の\n内定を獲得できました！\n\n就活を始めた頃は\nプログラミングのスキルも知識も\nエピソードも何もなくて\n\n自信のなさが\nESや面接に出て\nインターンシップは\n全落ち、、\n\nけど、\n最後には理想とする\n第一志望のIT企業に\n合格でき、\n\n胸を張って\n友達や家族に\n結果を報告できました！",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <p className="font-mono text-[var(--teal)] text-xs sm:text-sm tracking-widest text-center mb-3">
            Story
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--slate-white)] text-center mb-14">
            私のIT就活のこと
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-[var(--navy-shadow)]" />

          <div className="flex flex-col gap-10">
            {episodes.map(({ heading, body, highlight, image, imageWidth, imageHeight }, i) => (
              <FadeIn key={heading} delay={Math.min(i * 60, 300)}>
                <div className="pl-10 relative">
                  <div
                    className={`absolute left-3 top-2 w-2.5 h-2.5 rounded-full -translate-x-1/2 ring-2 ${
                      highlight
                        ? "bg-[var(--teal)] ring-[var(--teal)]/30"
                        : "bg-[var(--navy)] ring-[var(--navy-shadow)]"
                    }`}
                  />

                  <div
                    className={`rounded-lg p-5 sm:p-6 ${
                      highlight
                        ? "bg-[var(--navy-light)] border border-[var(--teal)]/40"
                        : "bg-[var(--navy-light)] border border-[var(--navy-shadow)]"
                    }`}
                  >
                    <h3
                      className={`font-bold text-base sm:text-lg mb-3 whitespace-pre-line leading-snug text-center ${
                        highlight ? "text-[var(--teal)]" : "text-[var(--slate-white)]"
                      }`}
                    >
                      {heading}
                    </h3>

                    {image && (
                      <div className="text-center my-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image}
                          alt={heading.replace(/\n/g, "")}
                          className="mx-auto max-w-full rounded"
                          width={imageWidth}
                          height={imageHeight}
                        />
                      </div>
                    )}

                    <p className="text-[var(--slate)] text-sm leading-loose whitespace-pre-line">
                      {body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
