import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';

export const design: DesignSystem = {
  palette: { bg: '#fff2e8', text: '#2d1b4e', accent: '#ff4d8d' },
  fonts: {
    display: "'Outfit', 'Inter', -apple-system, system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
  typeScale: { hero: 152, body: 34 },
  radius: 24,
};

const ink = '#2d1b4e';
const surface = '#ffe6d3';
const accent2 = '#6d4cff';
const accent3 = '#ffd24c';
const muted = '#9a8aa8';

const TOTAL = 4;

const styles = `
@keyframes sp-pop {
  0%   { transform: scale(0.92) rotate(var(--sp-tilt, 0deg)); opacity: 0; }
  60%  { transform: scale(1.04) rotate(var(--sp-tilt, 0deg)); opacity: 1; }
  100% { transform: scale(1) rotate(var(--sp-tilt, 0deg)); }
}
@keyframes sp-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}
@keyframes sp-wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50%      { transform: rotate(3deg); }
}
@keyframes sp-rise {
  0%   { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;

const pageBase: CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  padding: '90px 110px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative',
  overflow: 'hidden',
};

const Title = ({ children }: { children: ReactNode }) => (
  <h1
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 'var(--osd-size-hero)',
      fontWeight: 800,
      lineHeight: 0.98,
      letterSpacing: '-0.025em',
      margin: 0,
      color: 'var(--osd-text)',
    }}
  >
    {children}
  </h1>
);

const Heading = ({ children }: { children: ReactNode }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 64,
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--osd-text)',
      maxWidth: 1400,
    }}
  >
    {children}
  </h2>
);

const Footer = ({ pageNum, total }: { pageNum: number; total: number }) => (
  <div
    style={{
      position: 'absolute',
      left: 110,
      right: 110,
      bottom: 60,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--osd-font-body)',
      fontSize: 18,
      fontWeight: 600,
      color: muted,
    }}
  >
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <span
        aria-hidden
        style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--osd-accent)' }}
      />
      <span
        aria-hidden
        style={{ width: 12, height: 12, borderRadius: '50%', background: accent2 }}
      />
      <span
        aria-hidden
        style={{ width: 12, height: 12, borderRadius: '50%', background: accent3 }}
      />
      <span style={{ marginLeft: 8 }}>Picnic Guide</span>
    </span>
    <span
      style={{
        background: ink,
        color: 'var(--osd-bg)',
        padding: '6px 14px',
        borderRadius: 999,
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {pageNum} / {total}
    </span>
  </div>
);

const Sticker = ({
  children,
  tone = 'pink',
  tilt = -3,
}: {
  children: ReactNode;
  tone?: 'pink' | 'purple' | 'yellow';
  tilt?: number;
}) => {
  const fill = tone === 'purple' ? accent2 : tone === 'yellow' ? accent3 : 'var(--osd-accent)';
  const label = tone === 'yellow' ? ink : '#fff2e8';
  return (
    <span
      style={
        {
          alignSelf: 'flex-start',
          display: 'inline-block',
          background: fill,
          color: label,
          padding: '10px 20px',
          borderRadius: 999,
          border: `2px solid ${ink}`,
          boxShadow: `4px 4px 0 0 ${ink}`,
          fontFamily: 'var(--osd-font-body)',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '0.06em',
          transform: `rotate(${tilt}deg)`,
          ['--sp-tilt' as string]: `${tilt}deg`,
          animation: 'sp-pop 500ms cubic-bezier(0.34, 1.56, 0.64, 1) both',
        } as CSSProperties
      }
    >
      {children}
    </span>
  );
};

const Dot = ({
  size,
  color,
  top,
  left,
  right,
  bottom,
  delay = 0,
}: {
  size: number;
  color: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  delay?: number;
}) => (
  <span
    aria-hidden
    style={{
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      animation: `sp-bob 3.4s ease-in-out ${delay}ms infinite`,
    }}
  />
);

const Tip = ({
  index,
  label,
  body,
  tone,
  tilt,
}: {
  index: number;
  label: string;
  body: string;
  tone: 'pink' | 'purple' | 'yellow';
  tilt: number;
}) => (
  <li
    style={{
      background: surface,
      border: `2px solid ${ink}`,
      borderRadius: 24,
      padding: '24px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      boxShadow: `6px 6px 0 0 ${ink}`,
      transform: `rotate(${index % 2 === 0 ? -0.6 : 0.6}deg)`,
      animation: `sp-rise 500ms ${index * 90}ms ease-out both`,
    }}
  >
    <Sticker tone={tone} tilt={tilt}>
      {label}
    </Sticker>
    <p style={{ fontSize: 28, lineHeight: 1.4, color: ink, margin: 0 }}>{body}</p>
  </li>
);

const Basket = ({
  tone,
  tilt,
  emoji,
  label,
  hint,
}: {
  tone: 'pink' | 'purple' | 'yellow';
  tilt: number;
  emoji: string;
  label: string;
  hint: string;
}) => {
  const fill = tone === 'purple' ? accent2 : tone === 'yellow' ? accent3 : 'var(--osd-accent)';
  return (
    <div
      style={{
        background: surface,
        border: `2px solid ${ink}`,
        borderRadius: 28,
        padding: '32px 28px 28px',
        boxShadow: `8px 8px 0 0 ${ink}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        transform: `rotate(${tilt}deg)`,
        position: 'relative',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -22,
          left: -18,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: fill,
          border: `2px solid ${ink}`,
          boxShadow: `3px 3px 0 0 ${ink}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          transform: 'rotate(-8deg)',
          animation: 'sp-wiggle 4s ease-in-out infinite',
        }}
      >
        {emoji}
      </div>
      <p
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 44,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          margin: 0,
          color: ink,
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: 24, lineHeight: 1.4, color: ink, margin: 0, opacity: 0.85 }}>{hint}</p>
    </div>
  );
};

const Cover: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'center', gap: 40 }}>
    <style>{styles}</style>
    <Dot size={64} color={accent3} top={120} right={180} delay={0} />
    <Dot size={28} color={accent2} top={220} right={120} delay={300} />
    <Dot size={42} color="#ff4d8d" bottom={260} left={120} delay={600} />
    <Dot size={20} color={accent3} bottom={340} left={220} delay={900} />
    <Sticker tone="pink" tilt={-4}>
      a small field guide
    </Sticker>
    <Title>
      How to throw
      <br />a great picnic.
    </Title>
    <p style={{ fontSize: 34, lineHeight: 1.45, color: ink, maxWidth: 1200, margin: 0 }}>
      Three little decisions that turn a blanket in the park into the best part of your week.
    </p>
    <Footer pageNum={1} total={TOTAL} />
  </div>
);

const Spot: Page = () => (
  <div style={{ ...pageBase, gap: 36 }}>
    <style>{styles}</style>
    <Dot size={36} color={accent3} top={80} right={140} delay={200} />
    <Dot size={20} color={accent2} top={160} right={220} delay={500} />
    <Sticker tone="purple" tilt={-2}>
      step one — the spot
    </Sticker>
    <Heading>Find a patch worth lying down on.</Heading>
    <ul
      style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
      }}
    >
      <Tip
        index={0}
        tone="pink"
        tilt={-2}
        label="soft grass"
        body="Skip the manicured field. Look for the patch behind the trees."
      />
      <Tip
        index={1}
        tone="yellow"
        tilt={2}
        label="half shade"
        body="Sun on your toes, leaves over your head. You'll stay an extra hour."
      />
      <Tip
        index={2}
        tone="purple"
        tilt={-1}
        label="a tiny view"
        body="A pond, a hill, a slice of sky. Anything to look up at and feel small."
      />
    </ul>
    <Footer pageNum={2} total={TOTAL} />
  </div>
);

const Basket3: Page = () => (
  <div style={{ ...pageBase, gap: 40 }}>
    <style>{styles}</style>
    <Dot size={30} color="#ff4d8d" top={90} right={160} delay={0} />
    <Dot size={18} color={accent2} top={170} right={240} delay={350} />
    <Sticker tone="yellow" tilt={-3}>
      step two — the basket
    </Sticker>
    <Heading>Pack one sweet, one salty, one cold.</Heading>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 40,
        marginTop: 24,
      }}
    >
      <Basket
        tone="pink"
        tilt={-1.5}
        emoji="🍓"
        label="something sweet"
        hint="Strawberries you can eat with sticky fingers. Cookies in wax paper."
      />
      <Basket
        tone="yellow"
        tilt={1}
        emoji="🥖"
        label="something savoury"
        hint="A loaf, a hunk of cheese, a jar of olives. Cut nothing in advance."
      />
      <Basket
        tone="purple"
        tilt={-0.5}
        emoji="🧊"
        label="something cold"
        hint="Iced tea in a thermos, or one ridiculous bottle for the table."
      />
    </div>
    <Footer pageNum={3} total={TOTAL} />
  </div>
);

const Closer: Page = () => (
  <div style={{ ...pageBase, justifyContent: 'center', gap: 32 }}>
    <style>{styles}</style>
    <Dot size={48} color="#ff4d8d" top={140} right={220} delay={0} />
    <Dot size={24} color={accent2} top={240} right={150} delay={400} />
    <Dot size={36} color={accent3} bottom={240} left={160} delay={800} />
    <Dot size={20} color="#ff4d8d" bottom={320} left={260} delay={1200} />
    <Dot size={28} color={accent2} top={400} left={140} delay={1600} />
    <Sticker tone="yellow" tilt={3}>
      step three — the people
    </Sticker>
    <Title>Bring a friend.</Title>
    <p style={{ fontSize: 30, lineHeight: 1.45, color: ink, maxWidth: 1100, margin: 0 }}>
      The basket can be small. The blanket can be borrowed. The afternoon, with the right person on
      it, will be long.
    </p>
    <Footer pageNum={TOTAL} total={TOTAL} />
  </div>
);

export const meta: SlideMeta = {
  title: 'How to throw a great picnic',
  theme: 'sticker-pop',
};

export default [Cover, Spot, Basket3, Closer] satisfies Page[];
