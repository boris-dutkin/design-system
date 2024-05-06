import type { Meta } from '@storybook/react';
import { FaCircleUser } from 'react-icons/fa6';

import { Button, ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  args: {
    label: 'Button',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['plain', 'bordered', 'outline', 'default'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Primary = (args: ButtonProps) => <Button {...args} />;

export const Secondary = (args: ButtonProps) => (
  <Button {...args} color="secondary" />
);

export const Outline = (args: ButtonProps) => (
  <Button {...args} color="secondary" variant="outline" />
);

export const Plain = (args: ButtonProps) => (
  <Button {...args} variant="plain" />
);

export const IconButton = (args: ButtonProps) => (
  <Button {...args} icon={<FaCircleUser />} />
);

export const RTLButton = () => (
  <div dir="rtl">
    <Button label="כפתור" icon={<FaCircleUser />} />
  </div>
);

export const Disabled = (args: ButtonProps) => <Button {...args} disabled />;

export const LoadingButton = (args: ButtonProps) => (
  <Button {...args} isLoading disabled />
);
