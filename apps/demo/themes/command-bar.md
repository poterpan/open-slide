---
name: Command Bar
description: Dark developer-doc deck — black canvas, coral glow, command-palette card shells, monospace metadata and kbd shortcuts.
---

# Command Bar

## Palette

| Role        | Value                          | Notes                                           |
| ----------- | ------------------------------ | ----------------------------------------------- |
| bg          | `#0E0E0E`                      | near-black canvas                               |
| surface     | `#1A1A1A`                      | command-bar shell, eyebrow pill, kbd            |
| surfaceHi   | `#222222`                      | hover / selected row inside a shell             |
| border      | `#2A2A2A`                      | hairline edges around every surface             |
| text        | `#F5F5F5`                      | primary copy                                    |
| muted       | `#8B8B8B`                      | secondary copy, paths, page numbers             |
| accent      | `#FF6363`                      | coral — glows, dots, carets                     |
| accentSoft  | `rgba(255, 99, 99, 0.12)`      | accent fill at low opacity (focus rings, tags)  |

## Typography

- Display font: `-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', system-ui, sans-serif` — weight 600.
- Body font: same — weight 400, weight 500 for emphasis.
- Mono font: `'SF Mono', 'JetBrains Mono', 'Menlo', monospace` — for paths, kbd, file names, page numbers.
- Type scale:
  - Hero title: 112 px, line-height 1.05, letter-spacing -0.02em.
  - Page heading: 56 px, weight 600.
  - Body text: 26 px, line-height 1.5.
  - Eyebrow / tag: 18 px, mono, uppercase, letter-spacing 0.18em.
  - Footer / counter: 22 px, mono.

## Layout

- Content padding: 120 px horizontal, 100 px vertical.
- Alignment: a vertically centred hero column on the cover; left-aligned content elsewhere.
- Surfaces: card shells use 14–16 px radius, a 1 px `border` outline, and an inset highlight `box-shadow: 0 0 0 1px rgba(255,255,255,0.03) inset`. No solid drop shadows beyond a faint `0 30px 80px rgba(0,0,0,0.6)` lift on the central command-bar.
- Glow: every page may carry one large radial-gradient glow in `accent`, blurred 40 px, opacity ≤ 0.2 — placed off-centre so it never sits behind type.

## Fixed components

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', system-ui, sans-serif",
      fontSize: 112,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: 0,
      color: '#F5F5F5',
    }}
  >
    {children}
  </h1>
);
```

### Footer

```tsx
const Footer = ({ pageNum, total, path = '/developers' }: { pageNum: number; total: number; path?: string }) => (
  <div
    style={{
      position: 'absolute',
      left: 120,
      right: 120,
      bottom: 56,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: "'SF Mono', 'JetBrains Mono', 'Menlo', monospace",
      fontSize: 22,
      letterSpacing: '0.04em',
      color: '#8B8B8B',
    }}
  >
    <span>{path}</span>
    <span>
      {String(pageNum).padStart(2, '0')}{' '}
      <span style={{ opacity: 0.4 }}>/ {String(total).padStart(2, '0')}</span>
    </span>
  </div>
);
```

### Eyebrow (pill with glowing dot)

```tsx
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 18px',
      borderRadius: 999,
      border: '1px solid #2A2A2A',
      background: '#1A1A1A',
      fontFamily: "'SF Mono', 'JetBrains Mono', 'Menlo', monospace",
      fontSize: 18,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#8B8B8B',
    }}
  >
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: '#FF6363',
        boxShadow: '0 0 12px #FF6363',
      }}
    />
    {children}
  </div>
);
```

### Kbd

```tsx
const Kbd = ({ children }: { children: React.ReactNode }) => (
  <kbd
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 32,
      height: 32,
      padding: '0 8px',
      fontFamily: "'SF Mono', 'JetBrains Mono', 'Menlo', monospace",
      fontSize: 16,
      color: '#F5F5F5',
      background: '#222222',
      border: '1px solid #2A2A2A',
      borderRadius: 6,
    }}
  >
    {children}
  </kbd>
);
```

## Motion

- Philosophy: rich.
- Reusable keyframes:

```css
@keyframes cb-fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes cb-caret {
  0%, 60% { opacity: 1; }
  61%, 100% { opacity: 0; }
}
@keyframes cb-glow {
  0%, 100% { opacity: 0.55; }
  50%      { opacity: 0.9; }
}
```

Use `cb-fadeUp` on the hero block and the command-bar shell. `cb-caret` is wired into any input cursor. `cb-glow` runs on the radial accent halo behind the page.

## Aesthetic

A developer-tool launch page rendered in dark mode — generous bezels, rounded shells that look like floating macOS app dialogs, one coral light source warming the canvas. Sans for prose, monospace for everything that names a file, a path, or a key. No gradients beyond the single radial glow; no shadows that aren't either the lift under the central card or the subtle inset highlight on a surface. Avoid: light backgrounds, multi-colour palettes, photography, decorative emoji, sharp 90° corners on cards. If a page could be a screenshot from a polished macOS productivity app, it is on theme.

## Example usage

```tsx
const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#0E0E0E',
      color: '#F5F5F5',
      padding: '100px 120px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 32,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Glow x="78%" y="36%" />
    <Eyebrow>developer api · v1</Eyebrow>
    <Title>Built for keyboard-first.</Title>
    <p style={{ fontSize: 26, lineHeight: 1.5, color: '#8B8B8B', maxWidth: 1180, margin: 0 }}>
      One palette, infinite extensions. Author commands, ship them in minutes, and let users invoke them with{' '}
      <Kbd>⌘</Kbd> <Kbd>K</Kbd>.
    </p>
    <Footer pageNum={1} total={6} />
  </div>
);
```
