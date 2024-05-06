import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Button, ButtonProps } from './Button';

describe('Button', () => {
  const spyOnClick = vi.fn();

  beforeEach(() => {
    spyOnClick.mockReset();
  });

  const props: ButtonProps = {
    label: 'Button',
    onClick: spyOnClick,
    'test-id': 'button',
  };

  it('should render a button', () => {
    render(<Button {...props} />);
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should have the correct text', () => {
    render(<Button {...props} />);
    expect(screen.getByRole('button').textContent).toBe(props.label);
  });

  it('should have the correct test id', () => {
    render(<Button {...props} />);
    expect(screen.getByTestId(`${props['test-id']}`)).toBeDefined();
  });

  it('should call the onClick callback function', async () => {
    render(<Button {...props} />);
    await userEvent.click(screen.getByRole('button'));
    expect(props.onClick).toHaveBeenCalledOnce();
  });

  it('should not call the onClick callback function when the button is disabled', async () => {
    render(<Button {...props} disabled />);
    await userEvent.click(screen.getByRole('button'));
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
