/* global google,Sortable,distance,time,selected,recommended */
//==================Google Map======================

const setLatLng = ($obj) => {
  const lat = $obj.data('lat'); //地点のlat
  const lng = $obj.data('lng'); //地点のlng
  const latlng = new google.maps.LatLng(lat, lng); //地点のlatとlang
  return latlng;
};

//地図を表示
function initMap() {
  const center = new google.maps.LatLng(34.69281165935349, 135.19292660199665); //中心の緯度, 経度
  const map = new google.maps.Map($('#map').get(0), {
    zoom: 9.5,
    center: center,
  });

  const directionsRenderer = new google.maps.DirectionsRenderer();

  //ボタンを押したら経路表示
  $('.submit-btn').on('click', () => {
    
    //#selected liから地点の位置情報取得
    let origin = setLatLng($('#selected').find('li')); //スタート地点
    let destination = setLatLng($('#selected li').slice(-1)); //ゴール地点
    let waypoints = []; //中継地点
    for (let obj of $('#selected').find('li').slice(1, -1)) {
      waypoints.push({ location: setLatLng($(obj)) });
    };

    const directionsService = new google.maps.DirectionsService();
    directionsRenderer.setMap(null);
    const request = {
      origin: origin, //スタート地点
      destination: destination, //ゴール地点
      waypoints: waypoints, //中継地点
      travelMode: google.maps.DirectionsTravelMode.DRIVING, //移動手段
    };
    
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsRenderer.setOptions({
          preserveViewport: false //描画後に中心点を調整
        });
      };
      // ルート検索の結果を地図上に描画
      directionsRenderer.setDirections(result);
      directionsRenderer.setMap(map);

      //選択場所に項目が無い/足りない時の処理
      let $selectedLis = $('#selected').find('li');
      let $noSelect = $('.no-select'); //地点がないときのメッセージ
      let $lackSelect = $('.lack-select'); //地点が足りないときのメッセージ 
      if ($selectedLis.length == 0) {
        $noSelect.show();
        $lackSelect.hide();
        initMap();
        return;
      }
      else if ($selectedLis.length == 1) {
        $lackSelect.show();
        $noSelect.hide();
        return;
      }
      else {
        $noSelect.hide();
        $lackSelect.hide();
      }

      //時間・距離を表示する処理
      for (let selectedLi of $selectedLis) {
        $(selectedLi).find('.info-time').text(''); // info-timeのtextを空にする
        $(selectedLi).find('.info-distance').text(''); // info-distanceのtextを空にする
      }
      const getTime = () => { //時間の取得、表示
        let time = [];
        let counter = 0;
        for (let obj of directionsRenderer.directions.routes[0].legs) {
          //console.log(obj.duration.text);
          time.push(obj.duration.text);
          $($selectedLis[counter]).find('.info-time').text(time[counter]);
          counter++;
        }
      };

      const getDistance = () => { // 距離の取得、表示
        let distance = [];
        let counter = 0;
        for (let obj of directionsRenderer.directions.routes[0].legs) {
          // console.log(obj.distance.text);
          distance.push(obj.distance.text);
          $($selectedLis[counter]).find('.info-distance').text(distance[counter]);
          counter++;
        }
      };

      const infoTotalTime = $('#selected-spots').find('.info-totalTime'); // 合計時間の取得、表示
      infoTotalTime.text('');
      const getTotalTime = () => {
        let totalTime = [];
        let sum = 0;
        for (let obj of directionsRenderer.directions.routes[0].legs) {
          //console.log(obj.duration.value);
          totalTime.push(obj.duration.value);
        }
        for (let i = 0; i < totalTime.length; i++) {
          sum += totalTime[i];
        }
        let hour = Math.floor(sum / 3600);
        let min = Math.floor(sum % 3600 / 60);
        let tripTime = `${hour}時間${min}分`;
        //console.log(tripTime);
        infoTotalTime.text('合計時間：' + tripTime);
      };

      const infoTotalDis = $('#selected-spots').find('.info-totalDistance'); // 合計距離の取得、表示
      infoTotalDis.text('');
      const getTotalDistance = () => {
        let totalDistance = [];
        let sum = 0;
        for (let obj of directionsRenderer.directions.routes[0].legs) {
          //console.log(obj.distance.value);
          totalDistance.push(obj.distance.value);
        }
        for (let i = 0; i < totalDistance.length; i++) {
          sum += totalDistance[i];
        }
        let km = sum / 1000;
        //console.log(km);
        infoTotalDis.text('合計距離：' + km.toFixed(1) + 'km');
      };

      getTime(); // getTime実行
      getDistance(); // getDistance実行
      getTotalDistance(); // getTotalDistance実行
      getTotalTime(); // getTotalTime実行

    });
  });
};


//===================make-planのリストデータ======================
new Vue({
  el: '.wrapper',
  data: {
    spots: [
      { name: '甲子園球場', lat: 34.721338276459235, lng: 135.36169021095867 },
      { name: '西宮ガーデンズ', lat: 34.743978260219755, lng: 135.35987325573961 },
      { name: '姫路城', lat: 34.83957668336281, lng: 134.69391006432178 },
      { name: '城崎温泉', lat: 35.62998798672897, lng: 134.817126860324078 },
      { name: '有馬温泉', lat: 34.79759876338703, lng: 135.24780715221596 },
      { name: '明石海峡大橋', lat: 34.618656770084314, lng: 135.02173975118214 },
      { name: '北野異人館街', lat: 34.700851768333756, lng: 135.19079059806472 },
      { name: '南京町', lat: 34.68834359319578, lng: 135.18809681922897 },
      { name: '竹田城跡', lat: 35.30069194164594, lng: 134.82910372506552 },
      { name: '神戸ハーバーランド', lat: 34.679235328916434, lng: 135.1806263211367 },
    ]
  },
});

//============================trip plan explanation animated=================
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },

  /*要素の上端が画面の70%位置に来たときにhandlerメソッドを呼び出す*/
  offset: '70%',
});

$('.catch').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animated fadeIn');
      this.destroy();
    }
  },
  offset: '100%',
});

//----------------sortable--------------
new Sortable(selected, {
  group: 'shared', //recommendedとデータ共有
  animation: 150,
  onMove: function() {
    $('#selected li').find('.info-time').text('(時間)');
    $('#selected li').find('.info-distance').text('(距離)');
    $('#selected-spots').find('.info-totalTime').text('(合計時間)');
    $('#selected-spots').find('.info-totalDistance').text('(合計距離)');
  },
  onAdd: function() {
    $('#selected li').find('.info-time').text('(時間)');
    $('#selected li').find('.info-distance').text('(距離)');
    $('#selected-spots').find('.info-totalTime').text('(合計時間)');
    $('#selected-spots').find('.info-totalDistance').text('(合計距離)');
  },
});

new Sortable(recommended, {
  group: 'shared',//selectedとデータ共有
  animation: 150,
});

//================slide=============================
new Vue({
  el: '.slide-carousel',
  data: {
    hoverFlag: false,
    hoverIndex: null,
    images: [
      { name: '甲子園球場', src: '../image/recommend/Koshien-Stadium.jpg' },
      { name: '西宮ガーデンズ', src: '../image/recommend/Nishinomiya-Gardens.jpg' },
      { name: '姫路城', src: '../image/recommend/himezizyo.jpg' },
      { name: '城崎温泉', src: '../image/recommend/Kinosakionsen.jpg' },
      { name: '有馬温泉', src: '../image/recommend/Arimaonsen.jpg' },
      { name: '明石海峡大橋', src: '../image/recommend/Akashi.jpg' },
      { name: '北野異人館街', src: '../image/recommend/Kitanoizinkan.jpg' },
      { name: '南京町', src: '../image/recommend/Nankinmati.jpg' },
      { name: '竹田城跡', src: '../image/recommend/Takedazyo.jpg' },
      { name: '神戸ハーバーランド', src: '../image/recommend/Kobe-Harborland.jpg' },
    ],
  },

  methods: {
    mouseOverAction(index) {
      this.hoverFlag = true;
      this.hoverIndex = index;
    },
    mouseLeaveAction(index) {
      this.hoverFlag = false;
      this.hoverIndex = index;
    },
  }
});

$('.slider').slick({
  autoplay: true, // 自動でスクロール
  autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
  speed: 5000, // スライドが流れる速度を設定
  cssEase: 'linear', // スライドの流れ方を等速に設定
  slidesToShow: 6, // 表示するスライドの数
  swipe: false, // 操作による切り替えはさせない
  arrows: false, // 矢印非表示
  pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
  pauseOnHover: false,
  responsive: [

    {
      breakpoint: 1250, // 1249px以下のサイズに適用
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1000, // 999px以下のサイズに適用
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 750, // 749px以下のサイズに適用
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 500, // 499px以下のサイズに適用
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
