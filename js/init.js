(function($){
  $(function(){

    
    $('.scrollspy').scrollSpy();
    $('.slider').slider();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    console.log('hello world');
    console.log('Welcome to the Back End');

    $('.scrollspy').scrollSpy({target: ".academic", offset: -900});
    
    
    var delay = 1000;    

    $('#btn-more').fadeIn(delay);
    console.log('delay ->'+delay);
    
    $('#btn-more').addClass(" pulse");
    console.log('pulse');
    $('.fav').addClass(" pulse");
    console.log('pulse');

    $(".slide-out-right").ready(function(){
        
    });
   
    $('#btn-more').click(function() {
      $('#btn-back').delay( delay ).fadeIn(delay);
       console.log("fade in back" );$('#btn-more').removeClass(" pulse");

    });

          
  // ——————————————————————————————————————————————————
  // TextScramble
  // ——————————————————————————————————————————————————

  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[&]{}@—=+?()";
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————

  const phrases = [
    "Systems Developer",
    "UX Designer",
    "Digital Artist",
    "FilmMaker",
  ];

  const el = document.querySelector("#mainTitle");
  const fx = new TextScramble(el);

  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1500);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();


  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  
  });   // end of document ready

})(jQuery); // end of jQuery name space
