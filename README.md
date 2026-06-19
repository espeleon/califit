# CaliFit

App de calistènia de 10 setmanes basada en el mètode *Desencadenado* (Fitness Revolucionario).
Bilingüe català / castellà, amb cronòmetre, calendari, sistema de nivells per exercici i guia per començar a córrer. Funciona com a app instal·lable al mòbil (PWA).

---

## Fitxers del projecte

Tots han d'anar a la **mateixa carpeta arrel** del repo:

| Fitxer | Què és |
|---|---|
| `index.html` | L'app sencera (HTML + CSS + JS en un sol fitxer) |
| `manifest.json` | Metadades de la PWA: nom, colors, icones |
| `sw.js` | Service worker: fa que funcioni sense connexió |
| `icon-192.png` | Icona 192×192 |
| `icon-512.png` | Icona 512×512 |
| `icon-512-maskable.png` | Icona per a Android (zona segura) |
| `apple-touch-icon.png` | Icona per a iPhone (180×180) |

---

## Publicar a GitHub Pages

1. Puja **tots els fitxers** al repo `espeleon/califit` (commit + push), a la carpeta arrel.
2. A GitHub: **Settings → Pages → Source: branch `main` / carpeta `/root`**.
3. Espera ~1 minut. L'app queda a:

   **https://espeleon.github.io/califit/**

---

## Instal·lar-la a l'iPhone (com una app)

1. Obre `https://espeleon.github.io/califit/` amb **Safari** (no Chrome — a iOS només Safari pot instal·lar PWAs).
2. Toca el botó **Compartir** (el quadrat amb la fletxa cap amunt).
3. Baixa i toca **"Afegir a la pantalla d'inici"**.
4. Apareix la icona de CaliFit. En obrir-la des d'allà: pantalla completa, sense barra del navegador, i funciona offline.

### A Android
Chrome mostra automàticament un avís **"Instal·lar app"** o un botó al menú (⋮) → **"Instal·lar aplicació"**.

---

## ⚠️ IMPORTANT: cada cop que actualitzis l'app

Quan facis canvis a `index.html` (o qualsevol fitxer) i els pugis, has de **canviar el número de versió** del service worker perquè els usuaris rebin els canvis i no es quedin amb la versió antiga en cau:

A `sw.js`, línia 4:

```js
const CACHE_VERSION = 'califit-v1';   // → canvia a 'califit-v2', 'v3', etc.
```

Puja `sw.js` amb el número nou. Els usuaris rebran la versió actualitzada la propera vegada que obrin l'app amb connexió.

---

## Funcionalitats

- **Onboarding** de 5 passos (nivell, dies/setmana, punt de partida, molèsties, nom).
- **Programa de 10 setmanes** fidel al llibre: piràmides i supersets (setm. 1-2), força (3-4), potència (5-6), acondicionament global (7-8), resistència + Tabata (9), HIIT pur (10).
- **Sessions** amb escalfament, descripció del mètode, vídeos de YouTube i exercicis marcables.
- **Cronòmetre** amb tres modes: lliure (compta amunt), compte enrere (presets d'1/2/7 min) i Tabata (8×20s/10s amb avís sonor i vibració).
- **Calendari** d'entrenaments i **historial** de sessions.
- **Nivells per exercici** (5 nivells cadascun) amb botó "Estic aquí" i suggeriment de pujada cada 3 sessions.
- **Guia per començar a córrer** progressiva de 8 setmanes.
- **Glossari** de termes tècnics.
- **Formulari d'opinió** (enviat via Formspree).
- **Canvi d'idioma** CA / ES instantani (botó a dalt a la dreta), amb preferència desada.

---

## Notes tècniques

- Tot l'estat (perfil, historial, nivells) es desa al **localStorage** del dispositiu. No hi ha servidor ni comptes.
- El service worker **només funciona sobre HTTPS** (GitHub Pages ja el serveix) o `localhost`. Obrint el fitxer amb `file://` (doble clic local) el SW no s'activa — és normal.
- A iOS les notificacions push de PWA només funcionen des d'iOS 16.4 i amb l'app instal·lada. Ara mateix l'app no en fa servir.

---

## Si algun dia la vols a l'App Store

L'app web es pot empaquetar amb [Capacitor](https://capacitorjs.com/) reaprofitant el 100% del codi actual. Necessitaries: un Mac amb Xcode i un compte d'Apple Developer (99 €/any). Però per validar i fer servir l'app, la PWA n'hi ha prou.

## Licencia

Este proyecto es de uso personal. Los ejercicios de calistenia son conocimiento común en el dominio público. Los vídeos incrustados pertenecen a sus respectivos autores en YouTube.
