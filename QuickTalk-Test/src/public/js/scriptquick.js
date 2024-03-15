//Funcion de cambair a modo oscuro
const darkmode = () => {
  document.querySelector("body").setAttribute("data-bs-theme","dark")
  document.querySelector(".sidebar").setAttribute("data-bs-theme","dark")
  document.querySelector(".content").setAttribute("data-bs-theme","dark")
  document.querySelector("#darkmode").setAttribute("class","fa-solid fa-sun")
}

//Funcion de cambair a modo claro
const lightmode = () => {
  document.querySelector("body").setAttribute("data-bs-theme","light")
  document.querySelector(".sidebar").setAttribute("data-bs-theme","light")
  document.querySelector(".content").setAttribute("data-bs-theme","light")
  document.querySelector("#darkmode").setAttribute("class","fi fi-rs-moon-stars")
}
//Funcion de cambair a modo oscuro o claro
const cambiarmodo = () => {
  document.querySelector("body").getAttribute("data-bs-theme") === "light"?
  darkmode() : lightmode();
}
//Funcion para que se adapte al tema que tiene el usuario
const checkSystemTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkmode();
  } else {
      lightmode();
  }
}
//Hcae la verificacion al cargar la pagina que tema tiene del sistema
window.onload = checkSystemTheme;


document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.sidebar a','.row');
  const contentSections = document.querySelectorAll('.content > div');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
        const target = this.getAttribute('href').substring(1);
        contentSections.forEach(section => {
        if (section.id === target) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});
