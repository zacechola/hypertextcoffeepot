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
    };
  }

  var baz = foo(2);
  baz(1);
  console.log('i can do closures, too.');
}

// Alrighty, let's protect some namespace now
(function($, document, window) {


    // get some dribble images, links and stuff

    $(document).ready(function() {
    $.ajax({
        dataType: 'jsonp',
        url: 'http://api.dribbble.com/shots/everyone?per_page=30',
        data: 'jsonp',
        success: function (data) {

            var arr = [];

            for(var i = 0, l = data.shots.length; i < l; i++) {

                // Make sure we've got images and titles, because these are important things on secondary 'pages'
                if (data.shots[i].width > 400 && data.shots[i].description) {
                    arr.push(data.shots[i]);
                }
            }

            // Get a random object from arr
            var randItem = arr[Math.floor(Math.random()*arr.length)];

            // Cool, MANIPULATE THAT DOM
            manipulateDatDOM(randItem);

        }
    });
    });




    // Manipulate that DOM
    function manipulateDatDOM(data) {

        var imageUrl = data.image_url,
            image_sm = data.image_400_url,
            url = data.url,
            title = data.title,
            desc = data.description,
            playerName = data.player.username,
            playerUrl = data.player.url,
            template = '<img class="media-object" src="' + imageUrl + '" alt="' + title + '" >';

        // Create the image
        $('.media').append(template);

        // Drop in event listener for clicky of imagey
        $('.media').click(function() {
            $(this).find('img').addClass('animate moveImg auto-cursor');
            $(this).addClass('animate shrinkLeft auto-cursor');
            $('img').bind("animationend webkitAnimationEnd MSAnimationEnd", function(){
                // When the animation has ended, load in some info
                var template = '<div class="animate fadeIn"><h2><a href="' + url + '">' + title + '</a></h2><p>' + desc + '</p><p>Artwork by: <a href="' + playerUrl + '">' + playerName + '</a></p></div>';
                $('.content').append(template);
            });
        });

    }




    // Load the bootstrap tooltip
    $('.liar').tooltip();

    //load some hipster text
    $(document).ready(function() {
        $.getJSON('http://hipsterjesus.com/api/?paras=1&type=hipster-centric&html=false', function(data) {
            $('#hipster').html( data.text );
        });
    });

})(jQuery, document, window);
