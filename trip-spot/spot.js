const recommended = new Vue({
  el: '#wrapper',
  data: {
    spots: [
      {
        name: '阪神甲子園球場',
        src: '../image/recommend/Koshien-Stadium.jpg',
        href: 'spots-intr/html/stadium.html',
        exp: '春・夏の風物詩、高校野球のメッカとしてだけでなく、阪神タイガースのホームグラウンドとしても全国的に有名。'
      },
      {
        name: '西宮ガーデンズ',
        src: '../image/recommend/Nishinomiya-Gardens.jpg',
        href: 'spots-intr/html/gardens.html',
        exp: '西宮阪急、TOHOシネマズ 西宮OS、イズミヤを核に、大型7店舗など260店舗を超えるショップが集う、西日本最大級のショッピングセンターです。'
      },
      {
        name: '姫路城',
        src: '../image/recommend/himezizyo.jpg',
        href: 'spots-intr/html/himezi-castle.html',
        exp: '奈良の法隆寺とともに日本初のユネスコの世界文化遺産に登録された姫路城は、日本に現存する城の中でも、世界に認められた名城です。'
      },
      {
        name: '城崎温泉',
        src: '../image/recommend/Kinosakionsen.jpg',
        href: 'spots-intr/html/kinosaki.html',
        exp: '円山川の支流、大谿川沿いに広がる温泉街。1,400年もの歴史を誇り、「鴻の湯」「まんだら湯」など7ヵ所ある外湯（共同浴場）巡りも魅力のひとつです。文人たちにも愛された温泉地で、志賀直哉の「城の崎にて」の舞台として日本中にその名を知られるようになりました。'
      },
      {
        name: '有馬温泉',
        src: '../image/recommend/Arimaonsen.jpg',
        href: 'spots-intr/html/arima.html',
        exp: '六甲山の北麓に位置する、日本三古湯、日本三名泉の一つに挙げられる温泉。豊臣秀吉が愛したことでも知られており、現在でも昔ながらの情緒あふれる温泉街が広がります。2ヵ所の共同浴場と5ヵ所の泉源めぐり、日帰り入浴のできる宿も多く、温泉めぐりが満喫できます。'
      },
      {
        name: '明石海峡大橋',
        src: '../image/recommend/Akashi.jpg',
        href: 'spots-intr/html/akasi.html',
        exp: '明石海峡を横断し本州と淡路島を結ぶ、全長3,911m、世界最長の吊り橋。パールブリッジの愛称を持つほど、その佇まいは美しく、また夜間ライトアップでは時期によってデザインが変わり、幻想的な景観を織りなします。'
      },
      {
        name: '北野異人館街',
        src: '../image/recommend/Kitanoizinkan.jpg',
        href: 'spots-intr/html/kitano-town.html',
        exp: '神戸港開港後やって来た外国人の旧宅（異人館）が点在する北野界隈は、異国情緒あふれる神戸観光の人気エリアです。'
      },
      {
        name: '南京町',
        src: '../image/recommend/Nankinmati.jpg',
        href: 'spots-intr/html/nankin-town.html',
        exp: '横浜、長崎と並ぶ日本3大中華街のひとつ。本場仕込みの飲食店や雑貨店など、100店舗以上が軒を連ね、いつも活気に満ちています。'
      },
      {
        name: '竹田城跡',
        src: '../image/recommend/Takedazyo.jpg',
        href: 'spots-intr/html/takeda-castle.html',
        exp: '標高353.7メートルの山頂に位置する竹田城跡は、国指定重要文化財（史跡）。「日本の100名城」にも選定されている。'
      },
      {
        name: '神戸ハーバーランド',
        src: '../image/recommend/Kobe-Harborland.jpg',
        href: 'spots-intr/html/kobe-harborland.html',
        exp: 'きらめく海と爽やかな潮風、みどりにつつまれたエンターテイメントゾーン。ショッピングやグルメ、映画館、アミューズメントスペースなど大型複合施設が充実し、海を眺めながらぶらぶらするのが気持ちいい「港町・神戸」を実感できるエリア。'
      },
    ],
  },
});
