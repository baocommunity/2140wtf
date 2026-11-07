// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { act } from 'react';
import { JurorOnboardingCard } from '../JurorOnboardingCard';

let container: HTMLDivElement;
let root: Root | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (root) {
    act(() => root!.unmount());
    root = null;
  }
  container.remove();
});

describe('JurorOnboardingCard', () => {
  it('renders plain-language copy and a join button that calls onJoin', () => {
    let joined = 0;
    const r = createRoot(container);
    const handleJoin = () => { joined++; };
    act(() => {
      r.render(<JurorOnboardingCard onJoin={handleJoin} />);
    });
    root = r;
    expect(container.textContent).toContain('Become a juror');
    expect(container.textContent).toContain('Vote on outcomes with one tap');
    expect(container.textContent).not.toContain('FROST');
    const btn = container.querySelector('[data-testid="juror-join-button"]') as HTMLButtonElement;
    act(() => { btn.click(); });
    expect(joined).toBe(1);
  });
});
