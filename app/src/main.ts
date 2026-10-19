import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// The splash animation starts on first paint (index.html); its exit begins at 1.1 s.
const SPLASH_EXIT_MS = 1100;

function dismissSplash() {
  const splash = document.getElementById('splash');
  const app = document.querySelector('app-root') as HTMLElement | null;
  if (app) app.hidden = false;
  if (!splash) return;

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    splash.remove();
    return;
  }
  splash.classList.add('out'); // zoom in + fade
  setTimeout(() => splash.remove(), 700);
}

const minSplash = new Promise((r) =>
  setTimeout(r, Math.max(0, SPLASH_EXIT_MS - performance.now())),
);

bootstrapApplication(App, appConfig)
  .then(() => minSplash)
  .then(dismissSplash)
  .catch((err) => {
    console.error(err);
    dismissSplash();
  });
