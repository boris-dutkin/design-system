import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click me',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = (args: ButtonProps) => <Button {...args} />;
