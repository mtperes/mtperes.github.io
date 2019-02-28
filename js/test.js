/*
  Mtperes mod on Gabriel Nunes PEN https://codepen.io/hezag/pen/ZGxOLX
*/

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }
var currentQuote = '', currentAuthor = '';

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "7b3f58cd92mshd93afa9bf5abc45p1cf593jsn0880e8c5f1fc",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(r) {
      if (typeof r === 'string') {
       r = JSON.parse(r); 
      }
      if (Array.isArray(r)) {
       r = r[0];
      }
      currentQuote = r.quote;
      currentAuthor = r.author;
    
      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(r.quote);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(r.author);
        });
    }
  });
 }
 $(document).ready(function() {
  getQuote();
  $('#btn-more').on('click', getQuote);

});