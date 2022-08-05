/* global VueLazyload */

const LightBox = window.Lightbox.default; //vue-image-lightboxライブラリの取り込み

Vue.use(VueLazyload, { //VueLazyloadの読み込み
  preLoad: 1.3,
  error: 'https://dummyimage.com/130x120/ccc/999.png&text=Not+Found',
  loading: 'https://dummyimage.com/130x120/dcdcdc/999.png&text=Now loading',
  attempt: 1
});

Vue.component('light-box', LightBox); //Vue.componentへのLightBox取り込み

new Vue({
  el: '.wrapper',
  data: {
    
    portfolioes: [
      {
        name: 'trip-plan',
        src: '../image/about-me/plan.jpg',
        href: '../trip-exp/index.html'
      }, 
    ],
    
    skills: [
      {
        name:'HTML5',
        src:'../image/about-me/skill/html.jpg',
        content:'Webサイトを一から構築するためのHTMLコーディングが可能です。',
      },
      {
        name:'CSS3',
        src:' ../image/about-me/skill/css.jpg',
        content:'Webサイトを一から構築するためのCSSコーディングが可能です。デザインを一から考え、Webサイトとして公開した経験もあります。',
      },
      {
        name:'JavaScript',
        src:'../image/about-me/skill/Javascript.jpg',
        content:'基本的なDom操作、イベント処理、非同期処理が可能です。また、UIやUXを考慮した画面の中の動きや機能の実装が可能です。',
      },
      {
        name:'jQuery',
        src:'../image/about-me/skill/jquery.png',
        content:'スライダー・フェードイン・スムーズスクロールなどの、webサイトに簡単な動きをつけるための、jQueryカスタマイズが可能です。',
      },
      {
        name:'Vue.js',
        src:'../image/about-me/skill/Vue.jpg',
        content:'基本的なディレクティブの使用や、双方向データバインディングが可能です。また、コンポーネントの使用も可能です。',
      },
      {
        name:'Node.js',
        src:'../image/about-me/skill/nodejs.svg',
        content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
      {
        name:'PHP',
        src:'../image/about-me/skill/php.png',
        content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
      {
        name:'MySQL',
        src:'../image/about-me/skill/mysql.png',
        content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
      {
        name:'Bootstrap',
        src:'../image/about-me/skill/bootstrap.png',
        content:'Bootstrapを利用したレスポンシブのWebサイトの制作、グローバルナビやテーブルなどのパーツの実装が可能です。',
      },
      {
        name:'Google Maps API',
        src:'../image/about-me/skill/google-map.png',
        content:'Google Maps APIを使用して、地理データの取得・地図の表示ができます。また、Google Maps Platformが提供しているDirections APIを使用し、交通データの取得、地点間の経路の表示が出来ます。',
      },
      {
        name:'レスポンシブ対応',
        src:'../image/about-me/skill/responsive.png',
        content:'スマートフォンやタブレット、PCなど、レスポンシブ対応を意識したデザインやコーディングが可能です。',
      },
      {
        name:'Photoshop',
        src:'../image/about-me/skill/photoshop.png',
        content:'Photoshopを使用して画像の加工や、デザイン、イラストの作成の経験があります。',
      },
    ],

    images: [
      {
        name: '成果物１',
        thumb: '../image/about-me/university-deliverables/Deliverables-1.jpg',
        src: '../image/about-me/university-deliverables/Deliverables-1.jpg',
      },
      {
        name: '成果物2',
        thumb: '../image/about-me/university-deliverables/Deliverables-2.jpg',
        src: '../image/about-me/university-deliverables/Deliverables-2.jpg',
      },
      {
        name: '成果物3',
        thumb: '../image/about-me/university-deliverables/Deliverables-3.jpg',
        src: '../image/about-me/university-deliverables/Deliverables-3.jpg',
      },
      {
        name: '成果物4',
        thumb: '../image/about-me/university-deliverables/Deliverables-4.jpg',
        src: '../image/about-me/university-deliverables/Deliverables-4.jpg',
      },
      {
        name: '成果物5',
        thumb: '../image/about-me/university-deliverables/Deliverables-5.jpg',
        src: '../image/about-me/university-deliverables/Deliverables-5.jpg',
      },
      {
        name: '成果物6',
        thumb: '../image/about-me/university-deliverables/Deliverables-6.jpg',
        src: '../image/about-me/university-deliverables/Deliverables-6.jpg',
      },
    ],
  },

  methods: {
    show: function(index) {
      this.$refs.lightbox.showImage(index);
    }
  }

});

$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  /*
    要素の上端が画面の70%位置に来たときにhandlerメソッドを呼び出す
   */
  offset: '70%',
});

$('.catch').waypoint({
  handler(direction) {
    $(this.element).addClass('animated fadeIn');
    this.destroy();
  },
  offset: '70%',
});
