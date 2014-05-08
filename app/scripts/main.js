// shove all this shit in the global namespace because this is my website and I
// do what I want with it, ok?

var thisPage = 'hi i am zac(). most of this page uses dumb apis from around the web. the actual content is not mine. props to the good designers.';

console.log('do that thing that the tooltip said to do');

function zac() {
  var logText = [
    ' __  __     __  ',
    '/\\ \\_\\ \\   /\\ \\   ',
    '\\ \\  __ \\  \\ \\ \\  ',
    ' \\ \\_\\ \\_\\  \\ \\_\\ ',
    '  \\/_/\\/_/   \\/_/ ',
    '',
    ' *  *  *  *  *  * ',
    '',
    'if you are interested in hiring me, i can send you my bash history from the last week, which is like a resume, but way more up to date.',
    '(probably not interested in your offer, though, nothing personal)',
    'i already did fizzbuzz() for you and yeah i know what polymorphism is so don\'t ask in the interview',
    '<3 zac',
    '',
    '@zacechola on twitter and github, zecho on freenode, zac.echola@gmail.com via electronic mail',
  ];

  for ( var i = 0; i < logText.length; i += 1 ) {
    console.log(logText[i]);
  }

}

// These questions are seriously asked during interviews
function fizzbuzz() {
  for ( var i = 1; i <= 100; i += 1 ) {
    if ( i % 15 === 0 ) {
      console.log('FizzBuzz');
    } else if ( i % 3 === 0 ) {
      console.log('Fizz');
    } else if ( i % 5 === 0 ) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }

  console.log('lol()');
}

// lol a closure
function lol() {
  function foo ( x ) {
    var bar = 3;
    return function (y) {
      console.log( x + y + (++bar));
    }
  }

  var baz = foo(2);
  baz(1);
  console.log('i can do closures, too.');
}


// Load the bootstrap tooltip
$('.liar').tooltip();

//load some hipster text
$(document).ready(function() {
  $.getJSON('http://hipsterjesus.com/api/?paras=1&type=hipster-centric&html=false', function(data) {
    $('#hipster').html( data.text );
  });
});


// get some dribble images, links and stuff
$(document).ready(function() {
  $.getJSON('http://api.dribbble.com/shots/everyone', function(data) {
    console.log(data);
  });
});


$('.media').click(function() {
    $(this).find('img').addClass('animate moveImg auto-cursor');
    $(this).addClass('animate shrinkLeft auto-cursor');
    $(this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        console.log('animation ended!');
    });
});
