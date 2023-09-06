import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// The useTranslations helper will return the default language’s value if a key is not translated.

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname; // l'url => /fr/about
  const parts = pathname.split("/"); // [ '' , 'fr' ]
  const path = parts.pop(); // pop() supprime le dernier élément d'un tableau et retourne cet élément.

  console.log("pathname", pathname, "parts", parts, "path", path);

  if (parts.length === 1) {
    return "";
  }

  return path;
}
