// Мобильное меню

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click",function () {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    }else {
        mainMenu.classList.remove("active-menu")
    }
})




let searchButton = document.querySelectorAll (".magnifier");
let modal = document.querySelector (".modal");
let closeBtn = document.querySelector (".btn-close");

console.log(searchButton);
console.log(modal);
console.log(closeBtn);

searchButton.forEach(function(btn) {
    btn.addEventListener("click",function() {
        modal.classList.add("show");
        modal.classList.remove("hide");
    })
})
searchButton.forEach(function(btn) {
    btn.addEventListener("click",openModal)
    })

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})

    $('.slider-block').slick({
              infinite: false,
              speed: 300,
              slidesToShow: 5,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
              ]
            });
            
            $('.slider-third').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 4,
                      infinite: true,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  }
                ]
              });
              $('.slider-fourth').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 4,
                      infinite: true,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  }
                ]
              });

              $('.slider-fifth').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 4,
                      infinite: true,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  }
                ]
              });
              
              $('.slider-ninth').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 4,
                      infinite: true,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  }
                ]
              });
