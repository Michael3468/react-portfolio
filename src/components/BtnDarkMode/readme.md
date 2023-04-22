# Add styles to main.css and use these variables for backgrounds and text-colors

when click to toggleDarkMode button, add or remove `.dark` class to tag <body> and `.dark-mode-btn--active` class to toggle button

```css
:root {
  /* Colors from main.css*/
  --black: #171718;
  --white: #fff;
  --purple: #5c62ec;

  /* Light mode for button */
  --page-bg: var(--white);
  --text-color: var(--black);
  --title-1: var(--purple);

  --project-card-bg: var(--white);
  --project-card-text: var(--black);
  --box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.25);
}

.dark {
  /* Dark mode for button */
  --page-bg: #252526;
  --text-color: var(--white);

  --title-1: var(--white);

  --project-card-bg: var(--black);
  --project-card-text: var(--white);
  --box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.8);
}
```
