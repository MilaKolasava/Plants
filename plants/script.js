const headerBurger = document.querySelector(".header__burger");
const headerNavigation = document.querySelector(".navigation");

const closeMenu = () => {
  document.body.classList.remove("_lock");
  headerBurger.classList.remove("_active");
  headerNavigation.classList.remove("_active");
};

if (headerBurger) {
  headerBurger.addEventListener("click", function (event) {
    document.body.classList.toggle("_lock");
    headerBurger.classList.toggle("_active");
    headerNavigation.classList.toggle("_active");
  });
}
const menuLinks = document.querySelectorAll(".navigation-link-item[data-goto]");
const isNotEmptyMenuLinks = menuLinks.length > 0;

if (isNotEmptyMenuLinks) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(event) {
    const menuLink = event.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

      if (headerBurger.classList.contains("_active")) {
        closeMenu();
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }
}

headerNavigation.addEventListener("click", (event) => {
  const isMobileMenuOpen = headerNavigation.classList.contains("_active");

  if (isMobileMenuOpen) {
    closeMenu();
  }
});


const serviceMenu = document.querySelectorAll('.service__information-item');
const serviceButton = document.querySelectorAll('.button_colored');
console.log(serviceButton);
console.log(serviceMenu);

if (serviceButton) {
  for (let a = 0 ; a < serviceButton.length; a++) {
    serviceButton[a].addEventListener('click', function (event) {
    
      for (let serviceButtonItem of serviceButton) {
        serviceButtonItem.classList.remove('_active');
      } 

      serviceButton[a].classList.toggle('_active');;

      for (let serviceMenuItem of serviceMenu) {
        serviceMenuItem.classList.remove('_active');
      } 
  
      for (let i = 0; i < serviceMenu.length; i++) {
        if (serviceMenu[i].dataset.type === serviceButton[a].dataset.type) {
          serviceMenu[i].classList.toggle('_active');
        }
      }
    
    
  });
}
}