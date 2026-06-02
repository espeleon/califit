# CaliFit 💪

**App de calistenia progresiva adaptada a tu nivel.**  
Sin máquinas. Sin gimnasio. Solo tú.

---

## ¿Qué es CaliFit?

CaliFit es una app web de una sola página (HTML/CSS/JS puro, sin dependencias) que genera planes de entrenamiento de calistenia personalizados según tu nivel, días disponibles y posibles dolencias físicas.

### Funcionalidades

- **Onboarding completo** — nivel, días/semana, sexo (para umbrales de repeticiones), dolencias
- **Plan de sesiones adaptado** — 3, 4 o 5 días según disponibilidad, con 4–5 ejercicios por sesión
- **Vídeos incrustados** — demostración de cada ejercicio directamente en la app
- **Adaptaciones por dolencia** — avisos específicos para lumbar, hombros, rodillas, muñecas y cervicales
- **Calendario visual** — marca los días que has entrenado
- **Progresión por niveles** — 5 niveles por ejercicio con tiempos estimados de progreso
- **Historial** — registro de todas las sesiones completadas
- **Guía para correr** — plan de 8 semanas de cero a 30 minutos continuos
- **Memoria persistente** — usa localStorage, recuerda tu perfil entre sesiones

### Ejercicios incluidos

| Ejercicio | Niveles | Músculo principal |
|-----------|---------|-------------------|
| Flexiones | 1–5 | Pecho, tríceps, hombros |
| Flexiones Pike | 1–5 | Hombros, trapecios |
| Dominadas | 1–5 | Dorsales, bíceps |
| Sentadillas | 1–5 | Cuádriceps, glúteos |
| Core/Abdominales | 1–5 | Recto abdominal, oblicuos |
| Plancha isométrica | 1–5 | Core completo |
| Desplantes | 1–5 | Piernas, glúteos |

---

## Publicar en GitHub Pages — Guía paso a paso

### Paso 1 — Crear cuenta en GitHub

Si no tienes cuenta, ve a [github.com](https://github.com) y crea una gratuita.

### Paso 2 — Crear un repositorio nuevo

1. Haz clic en el botón verde **"New"** (o el **"+"** en la esquina superior derecha → *New repository*)
2. Rellena los campos:
   - **Repository name:** `califit` (o el nombre que prefieras)
   - **Description:** `App de calistenia progresiva`
   - **Visibility:** `Public` ← importante, GitHub Pages gratuito requiere repositorio público
   - Marca **"Add a README file"** (así se inicializa el repo)
3. Haz clic en **"Create repository"**

### Paso 3 — Subir los archivos

Tienes dos opciones:

**Opción A — Desde el navegador (más fácil):**

1. En tu repositorio recién creado, haz clic en **"Add file"** → **"Upload files"**
2. Arrastra el archivo `califit-app.html` a la zona de subida
3. **Renómbralo a `index.html`** antes de subirlo (o bórralo y súbelo con ese nombre)
4. En el campo *"Commit changes"* escribe: `Primera versión de CaliFit`
5. Haz clic en **"Commit changes"**
6. Repite para subir este `README.md`

**Opción B — Desde la terminal (si tienes Git instalado):**

```bash
git clone https://github.com/TUUSUARIO/califit.git
cd califit
# Copia califit-app.html aquí y renómbralo a index.html
cp /ruta/a/califit-app.html index.html
git add .
git commit -m "Primera versión de CaliFit"
git push origin main
```

### Paso 4 — Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (el engranaje, en el menú superior del repo)
3. En el menú lateral izquierdo, busca y haz clic en **"Pages"**
4. En la sección **"Branch"**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Haz clic en **"Save"**

### Paso 5 — Esperar y acceder

- GitHub tarda **1–3 minutos** en desplegar la primera vez
- Verás un mensaje verde con la URL: `https://TUUSUARIO.github.io/califit`
- ¡Listo! Los vídeos de YouTube funcionarán correctamente desde `https://`

---

## Dominio personalizado (opcional)

Si quieres una URL como `califit.es` o `tudominio.com/califit`:

1. Compra el dominio en [dondominio.com](https://dondominio.com) o similar (~10€/año)
2. En la configuración DNS del dominio, añade un registro CNAME:
   - **Nombre:** `www`
   - **Valor:** `TUUSUARIO.github.io`
3. En GitHub Pages (Settings → Pages), escribe tu dominio en el campo **"Custom domain"**
4. Marca **"Enforce HTTPS"**

---

## Actualizar la app

Cuando quieras modificar algo:

1. Edita el archivo `index.html` en tu repositorio (botón del lápiz ✏️ en GitHub)
2. O sube una nueva versión desde tu ordenador
3. Los cambios se despliegan automáticamente en 1–2 minutos

---

## Estructura del proyecto

```
califit/
├── index.html    ← La app completa (todo en un solo archivo)
└── README.md     ← Esta guía
```

No hay dependencias externas instalables. Las fuentes (Google Fonts) se cargan desde CDN automáticamente si hay conexión a internet.

---

## Tecnología

- HTML5 / CSS3 / JavaScript vanilla
- Google Fonts (Bebas Neue + DM Sans)
- localStorage para persistencia de datos
- YouTube embed para vídeos de demostración

---

## Licencia

Este proyecto es de uso personal. Los ejercicios de calistenia son conocimiento común en el dominio público. Los vídeos incrustados pertenecen a sus respectivos autores en YouTube.
