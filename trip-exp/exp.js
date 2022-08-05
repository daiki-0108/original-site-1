//animation
$('.in').waypoint({ //fadeIn
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animated fadeIn');
      this.destroy();
    }
  },
  /*
    要素の上端が画面の70%位置に来たときにhandlerメソッドを呼び出す
   */
  offset: '70%',
});

$('.up').waypoint({ //fadeInUp
  handler(direction) {
    $(this.element).addClass('animated fadeInUp');
    this.destroy();
  },
  offset: '70%',
});

$('.fence').waypoint({ // fadeInleft/faadeInRight  
  handler(direction) {
    $(this.element).find('.left').addClass('animated fadeInLeft');
    $(this.element).find('.right').addClass('animated fadeInRight');
    this.destroy();
  },
  offset: '70%',
});


//tab
const showTab = (selector) => {
  $('.tabs-menu > li').removeClass('active');
  // $('.tabs-content > section').hide();
  $('.tabs-content > section').addClass('hidden');
  $(`.tabs-menu a[href="${selector}"]`)
    .parent()
    .addClass('active');
  $(selector).removeClass('hidden');
};

// タブがクリックされたらコンテンツを表示
$('.tabs-menu a').on('click', (e) => {
  e.preventDefault();
  const selector = $(e.target).attr('href');
  showTab(selector);
});

// 初期状態として1番目のタブを表示
showTab('#tabs-1');