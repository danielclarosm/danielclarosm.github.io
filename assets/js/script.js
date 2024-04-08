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

const isDark = () => body.classList.contains('body-dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

	addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('body-light', 'fa-moon') : setTheme('body-dark', 'fa-sun')

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
        // Si ya está en inglés, reemplazar '/en/' con '/'
        targetUrl = currentUrl.replace('/en/', '/');
    } else {
        // Si no está en inglés, agregar '/en' al inicio y ajustar el nombre del archivo
        var filename = currentUrl.substring(currentUrl.lastIndexOf('/') + 1); // Obtener solo el nombre del archivo
        var fileMapping = {
            'index.html': 'index.html',
            'legal.html': 'legal.html',
            'contacto.html': 'contact.html',
            'proyectos.html': 'projects.html'
        };

        var fileMappingInverse = {
            'index.html': 'index.html',
            'legal.html': 'legal.html',
            'contact.html': 'contacto.html',
            'projects.html': 'proyectos.html'
        };

        // Construir la URL en inglés
        var englishFilename = fileMapping[filename];
        if (englishFilename) {
            targetUrl = '/en/' + englishFilename;
			if (targetUrl == fileMappingInverse[filename]) {
				targetUrl = englishFilename;
			}
        } else {
            // Redirigir a la página de inicio en inglés si no se encuentra una correspondencia
            targetUrl = '/en/';
        }
		
    }

    // Redirigir a la nueva URL
    window.location.href = targetUrl;
});

