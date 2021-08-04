document.addEventListener('DOMContentLoaded', () => {

  const navBurger = document.querySelectorAll('.navbar-burger');
  const $navbarBurgers = Array.prototype.slice.call(navBurger, 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((element) => {
      element.addEventListener('click', () => {
        const target = element.dataset.target;
        const $target = document.getElementById(target);

        element.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  const menuLink = document.querySelectorAll('.navbar-start .navbar-item');

  menuLink.forEach((element) => {
    element.addEventListener('click', () => {
      setTimeout(() => {
        history.replaceState({}, document.title, '.');
      }, 3000);
    });
  })

});
