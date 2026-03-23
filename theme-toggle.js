(() => {
  const storageKey = 'ctb-theme';
  const root = document.documentElement;

  const applyTheme = (mode) => {
    root.setAttribute('data-theme', mode);
    localStorage.setItem(storageKey, mode);
  };

  // Load saved theme or system preference
  const savedTheme = localStorage.getItem(storageKey);
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let initialTheme = 'light'; // Default to light
  if (savedTheme) {
    initialTheme = savedTheme;
  } else if (systemPrefersDark) {
    initialTheme = 'dark';
  }
  applyTheme(initialTheme);

  // Create Theme Toggle Button
  const btn = document.createElement('button');
  btn.textContent = 'Toggle Theme';
  btn.classList.add('theme-toggle-button'); // Add a class for styling
  btn.addEventListener('click', () => {
    const currentTheme = localStorage.getItem(storageKey);
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
  document.body.appendChild(btn);

  // Add theme toggle button style manually for now, to ensure it appears
  const style = document.createElement('style');
  style.textContent = `
    .theme-toggle-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      padding: 10px 14px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      font-weight: 700;
      background: linear-gradient(135deg, #2563eb, #1e40af);
      color: #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,.15);
      transition: all 0.2s ease-in-out;
    }
    .theme-toggle-button:hover {
      filter: brightness(1.05);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0,0,0,.2);
    }
    .theme-toggle-button:active {
      transform: translateY(0);
    }
    .theme-toggle-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `;
  document.head.appendChild(style);
})();
