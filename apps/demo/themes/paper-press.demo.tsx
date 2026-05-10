import type { Page } from '@open-slide/core';
import type { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => (
  <h1
    style={{
      fontFamily: "'Times New Roman', serif",
      fontSize: 152,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: '-0.015em',
      margin: 0,
      color: '#141210',
    }}
  >
    {children}
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
      left: 140,
      right: 140,
      bottom: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: 20,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#8a8276',
      borderTop: '1px dashed #1a1815',
      paddingTop: 20,
    }}
  >
    <span>Paper Press · {section ?? 'No. 01'}</span>
    <span>
      p. {pageNum} of {total}
    </span>
  </div>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: '#c43a1d',
    }}
  >
    {children}
  </div>
);

const pageBase: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: '#f6f1e7',
  color: '#141210',
  padding: '120px 140px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
};

const TOTAL = 3;

const Cover: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'center', gap: 56 }}>
    <Eyebrow>Field notes · 2026</Eyebrow>
    <Title>Notes from a slow studio.</Title>
    <div style={{ height: 1, background: '#1a1815', maxWidth: 720 }} />
    <p style={{ fontSize: 34, lineHeight: 1.55, color: '#141210', maxWidth: 1200, margin: 0 }}>
      Eight letters on craft, patience, and the small machines we keep building.
    </p>
    <Footer pageNum={1} total={TOTAL} section="No. 01" />
  </div>
);

const Content: Page = () => (
  <div style={{ ...pageBase, gap: 48 }}>
    <Eyebrow>Letter II · the workbench</Eyebrow>
    <h2
      style={{
        fontFamily: "'Times New Roman', serif",
        fontSize: 64,
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        margin: 0,
        color: '#141210',
      }}
    >
      A short list of things worth keeping.
    </h2>
    <div style={{ height: 1, background: '#1a1815', maxWidth: 1200 }} />
    <ol
      style={{
        margin: 0,
        paddingLeft: 56,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 34,
        lineHeight: 1.55,
        color: '#141210',
        maxWidth: 1200,
      }}
    >
      <li>
        <span style={{ color: '#c43a1d', fontWeight: 500 }}>One</span> good tool, repaired twice.
      </li>
      <li>A cabinet of half-finished drawings, kept dry.</li>
      <li>The habit of writing down what you almost shipped.</li>
    </ol>
    <Footer pageNum={2} total={TOTAL} section="Letter II" />
  </div>
);

const Closer: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'center', gap: 48 }}>
    <Eyebrow>Colophon</Eyebrow>
    <Title>End of pamphlet.</Title>
    <div style={{ height: 1, background: '#1a1815', maxWidth: 720 }} />
    <p style={{ fontSize: 28, lineHeight: 1.55, color: '#8a8276', maxWidth: 1100, margin: 0 }}>
      Set in Times New Roman and Inter. Printed on cream stock at the studio, in a run of one.
    </p>
    <Footer pageNum={TOTAL} total={TOTAL} section="End" />
  </div>
);

export default [Cover, Content, Closer];
