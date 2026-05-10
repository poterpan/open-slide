import type { Page } from '@open-slide/core';
import type { ReactNode } from 'react';

const styles = `
@keyframes nt-cursorBlink { to { visibility: hidden; } }
@keyframes nt-typeIn { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
@keyframes nt-glowPulse {
  0%, 100% { text-shadow: 0 0 12px rgba(57, 255, 136, 0.45); }
  50%      { text-shadow: 0 0 22px rgba(57, 255, 136, 0.85); }
}
`;

const Title = ({ children }: { children: ReactNode }) => (
  <h1
    style={{
      fontFamily: "'JetBrains Mono', Menlo, monospace",
      fontSize: 144,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      margin: 0,
      color: '#e6edf3',
      display: 'flex',
      alignItems: 'baseline',
      gap: 32,
    }}
  >
    <span style={{ color: '#39ff88', textShadow: '0 0 16px rgba(57, 255, 136, 0.6)' }}>$</span>
    <span>{children}</span>
    <span
      aria-hidden
      style={{
        display: 'inline-block',
        width: '0.55em',
        height: '0.92em',
        background: '#39ff88',
        boxShadow: '0 0 16px rgba(57, 255, 136, 0.6)',
        animation: 'nt-cursorBlink 1s steps(2, start) infinite',
        marginLeft: 8,
      }}
    />
  </h1>
);

const Footer = ({
  pageNum,
  total,
  section,
}: {
  pageNum: number;
  total: number;
  section?: string;
}) => (
  <div
    style={{
      position: 'absolute',
      left: 100,
      right: 100,
      bottom: 40,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: "'JetBrains Mono', Menlo, monospace",
      fontSize: 22,
      color: '#4a5560',
      borderTop: '1px solid #1a2230',
      paddingTop: 16,
    }}
  >
    <span>
      <span style={{ color: '#39ff88' }}>●</span> {section ?? 'main'} ·{' '}
      <span style={{ color: '#5cd0ff' }}>~/deck</span>
    </span>
    <span>
      {String(pageNum).padStart(2, '0')}/{String(total).padStart(2, '0')}
    </span>
  </div>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontFamily: "'JetBrains Mono', Menlo, monospace",
      fontSize: 24,
      fontWeight: 500,
      color: '#39ff88',
      textShadow: '0 0 12px rgba(57, 255, 136, 0.5)',
    }}
  >
    [{children}]
  </div>
);

const pageBase: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: '#05070a',
  color: '#e6edf3',
  padding: '80px 100px',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #1a2230',
  boxSizing: 'border-box',
  fontFamily: "'JetBrains Mono', Menlo, monospace",
};

const TOTAL = 3;

const Cover: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'center', gap: 40 }}>
    <style>{styles}</style>
    <Eyebrow>chapter 01</Eyebrow>
    <div style={{ animation: 'nt-typeIn 800ms steps(40, end) both' }}>
      <Title>boot sequence initiated</Title>
    </div>
    <p style={{ fontSize: 32, lineHeight: 1.6, color: '#4a5560', maxWidth: 1400, margin: 0 }}>
      {"// a fifteen-minute tour of the runtime, the protocol, and the parts we still don't trust."}
    </p>
    <Footer pageNum={1} total={TOTAL} section="intro" />
  </div>
);

const Content: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'flex-start', gap: 32 }}>
    <style>{styles}</style>
    <Eyebrow>02 · runtime</Eyebrow>
    <h2
      style={{
        fontSize: 64,
        fontWeight: 500,
        margin: 0,
        color: '#e6edf3',
        letterSpacing: '-0.005em',
      }}
    >
      three things the dev server watches
    </h2>
    <ul
      style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        fontSize: 32,
        lineHeight: 1.6,
        color: '#e6edf3',
      }}
    >
      <li>
        <span style={{ color: '#39ff88' }}>$</span>{' '}
        <span style={{ color: '#5cd0ff' }}>slides/</span>
        <span style={{ color: '#4a5560' }}> — your decks</span>
      </li>
      <li>
        <span style={{ color: '#39ff88' }}>$</span>{' '}
        <span style={{ color: '#5cd0ff' }}>themes/</span>
        <span style={{ color: '#4a5560' }}> — visual identities</span>
      </li>
      <li>
        <span style={{ color: '#39ff88' }}>$</span>{' '}
        <span style={{ color: '#5cd0ff' }}>open-slide.config.ts</span>
        <span style={{ color: '#4a5560' }}> — the knobs</span>
      </li>
    </ul>
    <p
      style={{
        marginTop: 'auto',
        marginBottom: 0,
        fontSize: 24,
        color: '#4a5560',
        animation: 'nt-glowPulse 2.4s ease-in-out infinite',
      }}
    >
      <span style={{ color: '#39ff88' }}>{'>'}</span> hot-reload on every save.
    </p>
    <Footer pageNum={2} total={TOTAL} section="runtime" />
  </div>
);

const Closer: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'center', gap: 40 }}>
    <style>{styles}</style>
    <Eyebrow>EOF</Eyebrow>
    <div style={{ animation: 'nt-typeIn 700ms steps(30, end) both' }}>
      <Title>logout</Title>
    </div>
    <p style={{ fontSize: 32, lineHeight: 1.6, color: '#4a5560', maxWidth: 1400, margin: 0 }}>
      {'// questions? '}
      <span style={{ color: '#5cd0ff' }}>man open-slide</span>
    </p>
    <Footer pageNum={TOTAL} total={TOTAL} section="end" />
  </div>
);

export default [Cover, Content, Closer];
