import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { WelcomeBanner } from './WelcomeBanner';

describe('WelcomeBanner', () => {
  it('renders welcome message with no name prop', () => {
    render(<WelcomeBanner />);

    screen.getByRole('heading', { name: 'Welcome Interviewer' });
  });

  it('renders welcome message with provided name prop', () => {
    render(<WelcomeBanner name="John Doe" />);

    screen.getByRole('heading', { name: 'Welcome John Doe' });
  });
});
