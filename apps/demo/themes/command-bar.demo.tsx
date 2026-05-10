import type { Page } from '@open-slide/core';
import type { ReactNode } from 'react';

const styles = `
@keyframes cb-fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes cb-caret { 0%, 60% { opacity: 1; } 61%, 100% { opacity: 0; } }
@keyframes cb-glow { 0%, 100% { opacity: 0.55; } 50% { opacity: 0.9; } }
`;

const SANS = "-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', system-ui, sans-serif";
const MONO = "'SF Mono', 'JetBrains Mono', 'Menlo', monospace";

const Title = ({ children }: { children: ReactNode }) => (
  <h1
    style={{
      fontFamily: SANS,
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

const Footer = ({
  pageNum,
  total,
  path = '/developers',
}: {
  pageNum: number;
  total: number;
  path?: string;
}) => (
  <div
    style={{
      position: 'absolute',
      left: 120,
      right: 120,
      bottom: 56,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: MONO,
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

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 18px',
      borderRadius: 999,
      border: '1px solid #2A2A2A',
      background: '#1A1A1A',
      fontFamily: MONO,
      fontSize: 18,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#8B8B8B',
    }}
  >
    <span
      aria-hidden
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

const Kbd = ({ children }: { children: ReactNode }) => (
  <kbd
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 32,
      height: 32,
      padding: '0 8px',
      fontFamily: MONO,
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

const Glow = ({ x = '50%', y = '50%', size = 1200 }: { x?: string; y?: string; size?: number }) => (
  <div
    aria-hidden
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: size,
      height: size,
      transform: 'translate(-50%, -50%)',
      background: 'radial-gradient(circle, #FF6363 0%, transparent 60%)',
      opacity: 0.18,
      filter: 'blur(40px)',
      pointerEvents: 'none',
      animation: 'cb-glow 4s ease-in-out infinite',
    }}
  />
);

const pageBase: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: '#0E0E0E',
  color: '#F5F5F5',
  padding: '100px 120px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  fontFamily: SANS,
  position: 'relative',
  overflow: 'hidden',
};

const TOTAL = 3;

const Cover: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'center', gap: 32 }}>
    <style>{styles}</style>
    <Glow x="78%" y="36%" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        animation: 'cb-fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
      }}
    >
      <Eyebrow>developer api · v1</Eyebrow>
      <Title>Built for keyboard-first.</Title>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: '#8B8B8B',
          maxWidth: 1180,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span>One palette, infinite extensions. Ship a command in minutes — invoke it with</span>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
        <span>.</span>
      </p>
    </div>
    <Footer pageNum={1} total={TOTAL} />
  </div>
);

const results = [
  { title: 'Create new command', sub: 'extension · scaffolder', kbd: '↵' },
  { title: 'Open documentation', sub: 'extension · helper', kbd: '⌘ D' },
  { title: 'Publish to store', sub: 'workflow · release', kbd: '⌘ P' },
];

const Content: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'center', gap: 56, alignItems: 'center' }}>
    <style>{styles}</style>
    <Glow x="50%" y="60%" size={1400} />
    <div
      style={{
        alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        animation: 'cb-fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
      }}
    >
      <Eyebrow>command palette</Eyebrow>
      <h2
        style={{
          fontFamily: SANS,
          fontSize: 56,
          fontWeight: 600,
          letterSpacing: '-0.015em',
          lineHeight: 1.1,
          margin: 0,
          color: '#F5F5F5',
          maxWidth: 1280,
        }}
      >
        Three keys away from anything.
      </h2>
    </div>
    <div
      style={{
        width: 1280,
        borderRadius: 16,
        background: '#1A1A1A',
        border: '1px solid #2A2A2A',
        boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03) inset',
        overflow: 'hidden',
        animation: 'cb-fadeUp 800ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '22px 26px',
          borderBottom: '1px solid #2A2A2A',
        }}
      >
        <span
          aria-hidden
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #FF6363, #ff9b8b)',
            flex: '0 0 auto',
          }}
        />
        <div
          style={{
            flex: 1,
            fontFamily: SANS,
            fontSize: 26,
            fontWeight: 500,
            color: '#F5F5F5',
          }}
        >
          publish
          <span
            style={{
              display: 'inline-block',
              width: 2,
              height: 26,
              background: '#FF6363',
              marginLeft: 6,
              verticalAlign: 'middle',
              animation: 'cb-caret 1.1s steps(1) infinite',
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </div>
      </div>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {results.map((r, i) => (
          <li
            key={r.title}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '18px 26px',
              background: i === 0 ? '#222222' : 'transparent',
              borderBottom: i < results.length - 1 ? '1px solid #222222' : 'none',
            }}
          >
            <span
              aria-hidden
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: '#2A2A2A',
                border: '1px solid #2A2A2A',
                flex: '0 0 auto',
              }}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 22, fontWeight: 500, color: '#F5F5F5' }}>{r.title}</span>
              <span style={{ fontFamily: MONO, fontSize: 16, color: '#8B8B8B' }}>{r.sub}</span>
            </div>
            <Kbd>{r.kbd}</Kbd>
          </li>
        ))}
      </ul>
    </div>
    <Footer pageNum={2} total={TOTAL} path="/developers/commands" />
  </div>
);

const Closer: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'center', gap: 32 }}>
    <style>{styles}</style>
    <Glow x="22%" y="68%" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        animation: 'cb-fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
      }}
    >
      <Eyebrow>get started</Eyebrow>
      <Title>Open the command bar.</Title>
      <p
        style={{
          fontSize: 26,
          lineHeight: 1.5,
          color: '#8B8B8B',
          maxWidth: 1180,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span>Three minutes to your first extension. Press</span>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
        <span>and start typing.</span>
      </p>
    </div>
    <Footer pageNum={TOTAL} total={TOTAL} path="/developers/quickstart" />
  </div>
);

export default [Cover, Content, Closer];
