function footer(){
  var i = 0;
  var footer = document.getElementsByTagName('footer')[0];
  footer.addEventListener("click", function(){
    i += 1;
    console.log("clique numéro " + i);
  });
};


function hamburger(){
  var hamburgerMenu = document.getElementById('navbarHeader');
  var hamburgerBtn = document.getElementsByClassName('navbar-toggler')[0];
  hamburgerBtn.addEventListener("click", function(){
    hamburgerMenu.classList.toggle('collapse');
  });
};


function firstcard(){
  var card = document.getElementsByClassName('card')[0];
  var editBtn = document.getElementsByClassName('btn-outline-secondary')[0];
  editBtn.addEventListener("click", function(){
    card.style.color = 'red';
  });
};


function secondCard(){
  let secondCard = document.getElementsByClassName('card')[1];
  let editSecondBtn = document.getElementsByClassName('btn-outline-secondary')[1];
  let colored = false;
  editSecondBtn.addEventListener("click", function(){
    if (colored === false) {
      colored = true;
      secondCard.style.color = 'green';
    }
    else {
      colored = false;
      secondCard.style.color = '';
    }
  });
};


function nuclear(){
  let link = document.styleSheets[0];
  let navbar = document.getElementsByTagName('header')[0];
  navbar.addEventListener("dblclick", function(){
    if (link.disabled === true) {
      link.disabled = false;
    }
    else {
      link.disabled = true;
    }
  });
};


function reduce(){
  let cardContent = document.getElementsByClassName('card-text');
  let viewbtns = document.getElementsByClassName('btn-success');
  let images = document.getElementsByClassName('card-img-top');

  for (let i = 0; i < cardContent.length; i++) {
    let cardText = document.getElementsByClassName('card-text')[i].textContent;
    let reduce = false;
    viewbtns[i].addEventListener("mouseover", function(){
      if (reduce === false) {
        images[i].style.width = '20%';
        cardContent[i].textContent = "";
        reduce = true;
      }
      else {
        images[i].style.width = '100%';
        cardContent[i].textContent = cardText;
        reduce = false;
      }
    });
  }
};


function changeOrder(){
  let btn = document.getElementsByClassName('btn-secondary')[0];
  btn.addEventListener("click", function(){
    let cardToMove = document.getElementsByClassName('col-md-4')[5];
    let row = cardToMove.parentNode;
    let firstChild = row.firstChild;
    row.insertBefore(cardToMove, firstChild);
  });
}

function inverseChangeOrder(){
  let btn = document.getElementsByClassName('btn-primary')[0];
  btn.addEventListener("click", function(e){
    e.preventDefault();
    let cardToMove = document.getElementsByClassName('col-md-4')[0];
    let row = cardToMove.parentNode;
    row.insertBefore(cardToMove, null);
  });
};


function keytouch(){
  let logo = document.getElementsByClassName('navbar-brand')[0];
  let body = document.getElementsByTagName('body')[0];
  logo.addEventListener("click", function(){
    logo.addEventListener("keydown", function(e){
      if (e.code == "KeyQ") {
        body.className="col-4";
      //  body.classList.add('col-4')
      }
      else if (e.code == "KeyY") {
        body.className="col-4 offset-md-4";
      //  body.classList.add('col-4');
      //  body.classList.add('offset-md-4');
      }
      else if (e.code == "KeyP") {
        body.className="col-4 offset-md-8";
      //  body.classList.add('col-4');
      //  body.classList.add('offset-md-8');
      }
      else if (e.code == "KeyB") {
        body.className="";
      }
    })
  })
};

footer();
hamburger();
firstcard();
secondCard();
nuclear();
reduce();
changeOrder();
inverseChangeOrder();
keytouch();
