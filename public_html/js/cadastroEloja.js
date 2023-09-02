//cadastro

const botaopipe = document.getElementById("botao-pipe");
const botaocoin = document.getElementById("botao-coin");
const coin = document.getElementById("coin");
const pipe = document.getElementById("pipe");



botaocoin.onclick = function tocarcoin() {
    coin.play();
    alert("Cadastro enviado com sucesso");
};

botaopipe.onclick = function tocarpipe() {
    pipe.play();
};



// loja


let count = 0;
//if add to cart btn clicked
$('.cart-btn').on('click', function (){
  let cart = $('.cart-nav');
  // find the img of that card which button is clicked by user
  let imgtodrag = $(this).parent('.buttons').parent('.content').parent('.card').find("img").eq(0);
  if (imgtodrag) {
    // duplicate the img
    var imgclone = imgtodrag.clone().offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
    }).css({
      'opacity': '0.8',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'z-index': '100'
    }).appendTo($('body')).animate({
      'top': cart.offset().top + 20,
      'left': cart.offset().left + 30,
      'width': 75,
      'height': 75
    }, 1000, 'easeInOutExpo');

    setTimeout(function(){
      count++;
      $(".cart-nav .item-count").text(count);
    }, 1500);

    imgclone.animate({
      'width': 0,
      'height': 0
    }, function(){
      $(this).detach()
    });
  }
});

// animação 

function uianimated() {
  var uianimateds = document.querySelectorAll('.uianimated');

  for (var i = 0; i < uianimateds.length; i++) {
    var windowheight = window.innerHeight;
    var uianimatedtop = uianimateds[i].getBoundingClientRect().top;
    var uianimatedpoint = 40;

    if (uianimatedtop < windowheight - uianimatedpoint) {
      uianimateds[i].classList.add('active');
    } else {
      uianimateds[i].classList.remove('active');
    }
  }
}

function onPageload() {
  uianimated();
  window.addEventListener('scroll', uianimated);
}

window.addEventListener('load', onPageload);