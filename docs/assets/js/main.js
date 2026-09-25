(() => {
  document.documentElement.classList.add('js');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-navigation]');
  const desktopMedia = window.matchMedia('(min-width: 960px)');

  if (menuButton && navigation) {
    const setMenuState = (isOpen, returnFocus = false) => {
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
      navigation.dataset.open = String(isOpen);

      if (desktopMedia.matches) {
        navigation.removeAttribute('aria-hidden');
      } else {
        navigation.setAttribute('aria-hidden', String(!isOpen));
      }

      if (returnFocus) {
        menuButton.focus();
      }
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      setMenuState(!isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a') && !desktopMedia.matches) {
        setMenuState(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuState(false, true);
      }
    });

    document.addEventListener('click', (event) => {
      const header = event.target.closest('[data-header]');
      if (!header && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
      }
    });

    desktopMedia.addEventListener('change', () => setMenuState(false));
    setMenuState(false);
  }

  const year = document.querySelector('[data-current-year]');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
