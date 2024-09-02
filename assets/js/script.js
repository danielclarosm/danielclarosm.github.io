const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark-mode')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light-mode', 'fa-moon') : setTheme('dark-mode', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.menu-list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-menu-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-menu-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)

var fileMapping = {
    'index.html': 'index.html',
    'sobre-mi.html': 'about-me.html',
    'proyectos.html': 'projects.html',
    'educacion.html': 'education.html',
    'contacto.html': 'contact.html'
};

var fileMappingInverse = {
    'index.html': 'index.html',
    'about-me.html': 'sobre-mi.html',
    'projects.html': 'proyectos.html',
    'contact.html': 'contacto.html'
};

/* Script para cambiar idioma de la web */
document.getElementById('language-toggle').addEventListener('click', function (event) {
    event.preventDefault();

    // Obtener la URL actual
    var currentUrl = window.location.pathname;

    // Verificar si la URL actual ya está en inglés
    var isInEnglish = currentUrl.startsWith('/en/');

    // Definir la URL destino basada en el estado actual
    var targetUrl;
    if (isInEnglish) {
        // Si ya está en inglés, extraer el nombre de la página actual
        var filename = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
        
        // Buscar el nombre de la página en inglés correspondiente en el mapeo inverso
        var reverseFilename = fileMappingInverse[filename];
        
        if (reverseFilename) {
            // Si se encuentra una correspondencia en el mapeo inverso, redirigir a la página en español
            targetUrl = '/' + reverseFilename;
        } else {
            // Si no se encuentra una correspondencia, redirigir a la página principal en español
            targetUrl = '/';
        }
    } else {
        // Si la página actual está en español, agregar '/en/' al inicio de la URL
        var filename = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
        var englishFilename = fileMapping[filename];
        if (englishFilename) {
            // Si se encuentra una correspondencia en el mapeo, redirigir a la versión en inglés
            targetUrl = '/en/' + englishFilename;
        } else {
            // Si no se encuentra una correspondencia, redirigir a la página principal en inglés
            targetUrl = '/en/';
        }
    }

    // Redirigir a la nueva URL
    window.location.href = targetUrl;
});