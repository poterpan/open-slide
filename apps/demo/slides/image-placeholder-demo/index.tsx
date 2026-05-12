import { type DesignSystem, ImagePlaceholder, type Page, type SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#FAFAF7', text: '#1A1A1A', accent: '#1E40AF' },
  fonts: {
    display:
      "'Inter Tight', 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  },
  typeScale: { hero: 132, body: 24 },
  radius: 12,
};

const palette = {
  bg: '#FAFAF7',
  text: '#1A1A1A',
  muted: '#666666',
  faint: '#A0A0A0',
  line: 'rgba(26,26,26,0.08)',
  accent: '#1E40AF',
};

const MONO = "'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace";

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative' as const,
  overflow: 'hidden' as const,
};

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const keyframes = `
@keyframes ipd-rise { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
@keyframes ipd-reveal { 0% { opacity: 0; transform: translateY(28px); filter: blur(6px); } 100% { opacity: 1; transform: translateY(0); filter: blur(0); } }
@keyframes ipd-line { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
@keyframes ipd-fade { 0% { opacity: 0; } 100% { opacity: 1; } }
`;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <>
    <style>{keyframes}</style>
    <div
      style={{
        fontSize: 14,
        fontFamily: MONO,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: palette.muted,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14,
        animation: `ipd-rise 900ms ${EASE} both`,
      }}
    >
      <span aria-hidden style={{ width: 28, height: 1, background: palette.accent }} />
      {children}
    </div>
  </>
);

const Footer = ({ n, total = 3 }: { n: number; total?: number }) => (
  <div
    style={{
      position: 'absolute',
      bottom: 56,
      left: 140,
      right: 140,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: MONO,
      fontSize: 13,
      color: palette.muted,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      borderTop: `1px solid ${palette.line}`,
      paddingTop: 18,
      animation: `ipd-fade 1000ms ease 800ms both`,
    }}
  >
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <span
        aria-hidden
        style={{ width: 6, height: 6, borderRadius: '50%', background: palette.accent }}
      />
      Image Placeholder
      <span style={{ color: palette.faint }}>/</span>
      <span style={{ color: palette.faint }}>demo</span>
    </span>
    <span
      style={{
        fontVariantNumeric: 'tabular-nums',
        display: 'inline-flex',
        gap: 6,
        letterSpacing: '0.18em',
      }}
    >
      <span style={{ color: palette.text }}>{String(n).padStart(2, '0')}</span>
      <span style={{ opacity: 0.4 }}>/</span>
      <span>{String(total).padStart(2, '0')}</span>
    </span>
  </div>
);

const Serif = ({ children }: { children: React.ReactNode }) => (
  <em
    style={{
      fontFamily: "'Iowan Old Style', 'New York', 'Times New Roman', Georgia, serif",
      fontStyle: 'italic',
      fontWeight: 400,
      letterSpacing: '-0.02em',
      color: palette.accent,
    }}
  >
    {children}
  </em>
);

const Hero: Page = () => (
  <div style={fill}>
    <div
      style={{
        padding: '120px 140px',
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Eyebrow>Image placeholder · demo</Eyebrow>
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 700,
          letterSpacing: '-0.035em',
          lineHeight: 0.96,
          margin: 0,
          maxWidth: 1500,
          animation: `ipd-reveal 1100ms ${EASE} 180ms both`,
        }}
      >
        Drop an image <Serif>to try it.</Serif>
      </h1>
      <span
        aria-hidden
        style={{
          display: 'block',
          height: 1,
          width: 96,
          background: palette.text,
          transformOrigin: 'left',
          animation: `ipd-line 900ms ${EASE} 560ms both`,
        }}
      />
      <p
        style={{
          fontSize: 24,
          color: palette.muted,
          lineHeight: 1.55,
          maxWidth: 1100,
          margin: 0,
          letterSpacing: '-0.005em',
          animation: `ipd-rise 1000ms ${EASE} 680ms both`,
        }}
      >
        Drag any image from your file manager onto the placeholder below — it uploads to{' '}
        <code
          style={{
            fontFamily: MONO,
            fontSize: 22,
            background: '#EFEEEA',
            padding: '2px 8px',
            borderRadius: 6,
          }}
        >
          slides/image-placeholder-demo/assets/
        </code>{' '}
        and slots in automatically.
      </p>
      <div
        style={{
          marginTop: 16,
          animation: `ipd-rise 1000ms ${EASE} 820ms both`,
        }}
      >
        <ImagePlaceholder hint="Hero image — drop a JPG or PNG here" width={1640} height={420} />
      </div>
    </div>
    <Footer n={1} />
  </div>
);

const Grid: Page = () => (
  <div style={fill}>
    <div
      style={{
        padding: '120px 140px',
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Eyebrow>Multiple placeholders</Eyebrow>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.02,
          margin: 0,
          animation: `ipd-reveal 1100ms ${EASE} 180ms both`,
        }}
      >
        Three slots, <Serif>three drops.</Serif>
      </h2>
      <p
        style={{
          fontSize: 22,
          color: palette.muted,
          lineHeight: 1.55,
          margin: 0,
          maxWidth: 1100,
          letterSpacing: '-0.005em',
          animation: `ipd-rise 1000ms ${EASE} 560ms both`,
        }}
      >
        Each placeholder is independent — drop a different image on each, or use the inspector's{' '}
        <strong style={{ color: palette.text }}>Replace</strong> button to pick from your assets
        folder.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginTop: 16,
          animation: `ipd-rise 1000ms ${EASE} 720ms both`,
        }}
      >
        <ImagePlaceholder hint="Portrait" width={520} height={580} />
        <ImagePlaceholder hint="Square" width={520} height={580} />
        <ImagePlaceholder hint="Landscape" width={520} height={580} />
      </div>
    </div>
    <Footer n={2} />
  </div>
);

const InspectorTest: Page = () => (
  <div style={fill}>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '120px 140px',
        gap: 80,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'center' }}>
        <Eyebrow>Inspector flow</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.02,
            margin: 0,
            animation: `ipd-reveal 1100ms ${EASE} 180ms both`,
          }}
        >
          Or upload <Serif>from</Serif>
          <br />
          the inspector.
        </h2>
        <ol
          style={{
            fontSize: 22,
            color: palette.muted,
            lineHeight: 1.7,
            margin: 0,
            paddingLeft: 28,
            animation: `ipd-rise 1000ms ${EASE} 560ms both`,
          }}
        >
          <li>Toggle Inspect, click the placeholder.</li>
          <li>
            Hit <strong style={{ color: palette.text }}>Replace</strong> in the inspector panel.
          </li>
          <li>
            In the dialog, click <strong style={{ color: palette.text }}>Upload</strong> or drop a
            file directly into the grid.
          </li>
        </ol>
      </div>
      <div style={{ animation: `ipd-rise 1000ms ${EASE} 720ms both` }}>
        <ImagePlaceholder hint="Click me, then Replace" width={680} height={680} />
      </div>
    </div>
    <Footer n={3} />
  </div>
);

export const meta: SlideMeta = { title: 'Image Placeholder Demo' };

export default [Hero, Grid, InspectorTest] satisfies Page[];
