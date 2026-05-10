import type { Page } from '@open-slide/core';
import type { ReactNode } from 'react';

const styles = `
@keyframes en-fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

const Title = ({ children }: { children: ReactNode }) => (
  <h1
    style={{
      fontFamily: "'Georgia', 'Source Serif Pro', serif",
      fontSize: 168,
      fontWeight: 800,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      margin: 0,
      color: '#f4ecdc',
    }}
  >
    {children}
  </h1>
);

const Footer = ({ pageNum, total }: { pageNum: number; total: number }) => (
  <div
    style={{
      position: 'absolute',
      left: 120,
      right: 120,
      bottom: 60,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'system-ui, sans-serif',
      fontSize: 22,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#7a7468',
      borderTop: '1px solid #2a2620',
      paddingTop: 24,
    }}
  >
    <span>Editorial Noir</span>
    <span>
      {String(pageNum).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </span>
  </div>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontFamily: 'system-ui, sans-serif',
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: '#d6a64b',
    }}
  >
    {children}
  </div>
);

const pageBase: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: '#0b0d10',
  color: '#f4ecdc',
  padding: '100px 120px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
};

const TOTAL = 3;

const Cover: Page = () => (
  <div
    style={{
      ...pageBase,
      justifyContent: 'center',
      gap: 48,
      animation: 'en-fadeUp 600ms ease-out both',
    }}
  >
    <style>{styles}</style>
    <Eyebrow>Volume 04 · Spring 2026</Eyebrow>
    <Title>The shape of a quiet year.</Title>
    <p style={{ fontSize: 36, lineHeight: 1.5, color: '#7a7468', maxWidth: 1200, margin: 0 }}>
      A retrospective on the work we shipped in silence.
    </p>
    <Footer pageNum={1} total={TOTAL} />
  </div>
);

const Content: Page = () => (
  <div style={{ ...pageBase, gap: 56 }}>
    <style>{styles}</style>
    <Eyebrow>Section I · the editor's note</Eyebrow>
    <div style={{ height: 2, background: '#d6a64b', maxWidth: 220, marginTop: -32 }} />
    <h2
      style={{
        fontFamily: "'Georgia', 'Source Serif Pro', serif",
        fontSize: 72,
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: '-0.015em',
        margin: 0,
        color: '#f4ecdc',
        maxWidth: 1500,
      }}
    >
      We made fewer things this year, and meant more of them.
    </h2>
    <p
      style={{
        fontFamily: 'system-ui, sans-serif',
        fontSize: 36,
        lineHeight: 1.5,
        color: '#f4ecdc',
        maxWidth: 1200,
        margin: 0,
      }}
    >
      A short essay on restraint, the editing that happens before publication, and the long list of
      features we deliberately did <span style={{ color: '#d6a64b' }}>not</span> ship.
    </p>
    <Footer pageNum={2} total={TOTAL} />
  </div>
);

const Closer: Page = () => (
  <div
    style={{
      ...pageBase,
      justifyContent: 'center',
      gap: 40,
      animation: 'en-fadeUp 600ms ease-out both',
    }}
  >
    <style>{styles}</style>
    <Eyebrow>End of issue</Eyebrow>
    <Title>Until volume five.</Title>
    <p style={{ fontSize: 28, lineHeight: 1.5, color: '#7a7468', maxWidth: 1100, margin: 0 }}>
      Set in Georgia. Printed in dark mode, by candlelight, twice a year.
    </p>
    <Footer pageNum={TOTAL} total={TOTAL} />
  </div>
);

export default [Cover, Content, Closer];
