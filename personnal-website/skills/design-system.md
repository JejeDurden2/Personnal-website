# Design System — Jérôme Desmares

## Concept

**"Floating Energy"** — Un design moderne et énergique avec des orbes colorés flottants, du glassmorphism, et une palette vive qui inspire la créativité et l'expertise technique.

---

## Palette de couleurs

### Couleurs principales

| Nom | Variable CSS | Hex | Usage |
|-----|--------------|-----|-------|
| Electric Violet | `--violet` | `#7C3AED` | Couleur primaire, CTAs, accents forts |
| Hot Pink | `--pink` | `#EC4899` | Hover states, accents secondaires |
| Cyan | `--cyan` | `#06B6D4` | Highlights, liens, éléments interactifs |

### Couleurs neutres

| Nom | Variable CSS | Hex | Usage |
|-----|--------------|-----|-------|
| Slate 900 | `--slate-900` | `#0F172A` | Texte principal |
| Slate 600 | `--slate-600` | `#475569` | Texte secondaire |
| Slate 400 | `--slate-400` | `#94A3B8` | Texte tertiaire, placeholders |
| Off White | `--off-white` | `#FAFAFA` | Background principal |
| White | `--white` | `#FFFFFF` | Cartes, surfaces élevées |

### Gradients

```css
/* Gradient principal pour texte et accents */
.gradient-primary {
  background: linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #06B6D4 100%);
}

/* Gradient pour les orbes */
.orb-violet { background: radial-gradient(circle, #7C3AED 0%, transparent 70%); }
.orb-pink { background: radial-gradient(circle, #EC4899 0%, transparent 70%); }
.orb-cyan { background: radial-gradient(circle, #06B6D4 0%, transparent 70%); }
```

### Configuration Tailwind

```js
// tailwind.config.ts
colors: {
  violet: {
    DEFAULT: '#7C3AED',
    light: '#8B5CF6',
    dark: '#6D28D9',
  },
  pink: {
    DEFAULT: '#EC4899',
    light: '#F472B6',
    dark: '#DB2777',
  },
  cyan: {
    DEFAULT: '#06B6D4',
    light: '#22D3EE',
    dark: '#0891B2',
  },
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
}
```

---

## Typographie

### Font Stack

```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

Inter est utilisée pour tout le site — moderne, très lisible, avec du caractère.

### Échelle typographique

| Élément | Taille | Poids | Line Height | Usage |
|---------|--------|-------|-------------|-------|
| Display | `text-6xl` (60px) | 900 (Black) | 1.1 | Nom dans le Hero |
| H1 | `text-5xl` (48px) | 800 (ExtraBold) | 1.2 | Titres de section |
| H2 | `text-3xl` (30px) | 700 (Bold) | 1.3 | Sous-titres |
| H3 | `text-xl` (20px) | 600 (SemiBold) | 1.4 | Titres de cartes |
| Body | `text-base` (16px) | 400 (Regular) | 1.6 | Texte courant |
| Body Large | `text-lg` (18px) | 400 (Regular) | 1.6 | Paragraphes importants |
| Small | `text-sm` (14px) | 400 (Regular) | 1.5 | Labels, metadata |

### Classes Tailwind

```html
<!-- Display (Hero name) -->
<h1 class="text-6xl font-black tracking-tight">

<!-- Section titles -->
<h2 class="text-5xl font-extrabold tracking-tight">

<!-- Subtitles -->
<h3 class="text-3xl font-bold">

<!-- Card titles -->
<h4 class="text-xl font-semibold">

<!-- Body text -->
<p class="text-base text-slate-600 leading-relaxed">

<!-- Large body -->
<p class="text-lg text-slate-600 leading-relaxed">
```

---

## Composants

### Boutons

#### Primary Button (CTA)

```html
<button class="
  px-8 py-4
  bg-gradient-to-r from-violet to-pink
  text-white font-semibold
  rounded-2xl
  shadow-lg shadow-violet/25
  hover:shadow-xl hover:shadow-violet/30
  hover:scale-105
  transition-all duration-300 ease-out
">
  Discutons de votre projet →
</button>
```

#### Secondary Button

```html
<button class="
  px-8 py-4
  bg-white/80 backdrop-blur-sm
  border border-slate-200
  text-slate-900 font-semibold
  rounded-2xl
  hover:bg-white hover:border-violet/30
  hover:shadow-lg
  transition-all duration-300 ease-out
">
  En savoir plus
</button>
```

### Cartes

#### Glass Card (pour bento grid)

```html
<div class="
  p-8
  bg-white/70 backdrop-blur-xl
  border border-white/50
  rounded-3xl
  shadow-xl shadow-slate-900/5
  hover:bg-white/80
  hover:shadow-2xl hover:shadow-violet/10
  hover:scale-[1.02]
  transition-all duration-300 ease-out
">
  <!-- Content -->
</div>
```

#### Solid Card

```html
<div class="
  p-8
  bg-white
  border border-slate-100
  rounded-3xl
  shadow-lg shadow-slate-900/5
">
  <!-- Content -->
</div>
```

### Liens

```html
<!-- Lien standard -->
<a class="
  text-violet
  hover:text-pink
  underline underline-offset-4 decoration-violet/30
  hover:decoration-pink/50
  transition-colors duration-200
">
  Voir le projet
</a>

<!-- Lien navigation -->
<a class="
  text-slate-600
  hover:text-violet
  font-medium
  transition-colors duration-200
">
  À propos
</a>
```

### Inputs (si formulaire)

```html
<input class="
  w-full px-6 py-4
  bg-white/80 backdrop-blur-sm
  border border-slate-200
  rounded-2xl
  text-slate-900
  placeholder:text-slate-400
  focus:outline-none focus:ring-2 focus:ring-violet/50 focus:border-violet
  transition-all duration-200
" />
```

---

## Effets spéciaux

### Orbes flottants (Hero background)

```css
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #7C3AED 0%, transparent 70%);
  top: -200px;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #EC4899 0%, transparent 70%);
  top: 100px;
  right: -150px;
  animation-delay: -7s;
}

.orb-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #06B6D4 0%, transparent 70%);
  bottom: -100px;
  left: 30%;
  animation-delay: -14s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}
```

### Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
```

### Gradient Text

```html
<span class="
  bg-gradient-to-r from-violet via-pink to-cyan
  bg-clip-text text-transparent
">
  Tech Lead · Builder
</span>
```

---

## Spacing

### Sections

```html
<!-- Section standard -->
<section class="py-24 px-6">

<!-- Section avec plus d'espace (Hero) -->
<section class="py-32 px-6">

<!-- Container -->
<div class="max-w-6xl mx-auto">
```

### Espacement interne

| Usage | Classe Tailwind |
|-------|-----------------|
| Cartes | `p-8` ou `p-10` |
| Boutons | `px-8 py-4` |
| Gaps dans grids | `gap-6` ou `gap-8` |
| Entre sections | `space-y-24` |
| Entre éléments | `space-y-6` |

---

## Animations

### Transitions par défaut

```css
/* Tous les éléments interactifs */
transition-all duration-300 ease-out
```

### Fade in on scroll

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

### Hover states

| Élément | Effet |
|---------|-------|
| Boutons primaires | `hover:scale-105` + shadow increase |
| Cartes | `hover:scale-[1.02]` + shadow increase |
| Liens | Color transition |
| Images | `hover:scale-105` (si applicable) |

---

## Responsive

### Breakpoints

| Nom | Largeur | Usage |
|-----|---------|-------|
| `sm` | 640px | Mobile large |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop large |

### Patterns responsives

```html
<!-- Texte display -->
<h1 class="text-4xl md:text-5xl lg:text-6xl">

<!-- Grids -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Padding sections -->
<section class="py-16 md:py-24 px-4 md:px-6">

<!-- Bento grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="md:col-span-2"><!-- Large card --></div>
  <div><!-- Card --></div>
  <div><!-- Card --></div>
</div>
```

---

## Accessibilité

- Contraste minimum de 4.5:1 pour le texte
- Focus visible sur tous les éléments interactifs : `focus:ring-2 focus:ring-violet/50`
- Pas d'animation pour les utilisateurs avec `prefers-reduced-motion`
- Tailles de touch target minimum 44x44px pour mobile

```css
@media (prefers-reduced-motion: reduce) {
  .orb {
    animation: none;
  }
  * {
    transition-duration: 0.01ms !important;
  }
}
```

---

## Résumé des conventions

| Catégorie | Convention |
|-----------|------------|
| Border radius | `rounded-2xl` (boutons), `rounded-3xl` (cartes) |
| Shadows | `shadow-lg` + couleur (`shadow-violet/25`) |
| Transitions | `duration-300 ease-out` |
| Hover scale | `hover:scale-105` (boutons), `hover:scale-[1.02]` (cartes) |
| Backdrop blur | `backdrop-blur-xl` pour glassmorphism |
| Gradient direction | `from-violet via-pink to-cyan` (135deg) |
