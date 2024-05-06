import { forwardRef } from 'react';
import { TbLoaderQuarter } from 'react-icons/tb';
import { tv } from 'tailwind-variants';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  ['test-id']?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  variant?: 'outline' | 'bordered' | 'plain';
  icon?: React.ReactNode;
  isLoading?: boolean;
};

const button = tv({
  base: 'text-white rounded self-start justify-center	flex items-center transition ease-in-out duration-300 min-w-20',
  variants: {
    color: {
      primary: 'bg-orange-500 hover:bg-orange-600',
      secondary: 'bg-cyan-500 hover:bg-cyan-600',
    },
    size: {
      sm: 'px-2 py-1',
      md: 'px-4 py-2',
      lg: 'px-5 py-2.5 text-lg',
    },
    variant: {
      plain: 'border-none bg-transparent',
      bordered: 'border',
      outline: 'border bg-transparent',
    },
    disabled: {
      true: 'opacity-50 !cursor-not-allowed',
    },
    icon: {
      true: 'px-3',
    },
    isLoading: {
      true: 'justify-center transition-all',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'bordered',
      class: 'border-orange-600',
    },
    {
      color: 'primary',
      variant: 'outline',
      class:
        'border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500',
    },
    {
      color: 'secondary',
      variant: 'bordered',
      class: 'border-cyan-600',
    },
    {
      color: 'secondary',
      variant: 'outline',
      class: 'border-cyan-500 text-cyan-500 hover:text-white hover:bg-cyan-500',
    },
    {
      color: 'primary',
      variant: 'plain',
      class:
        'text-orange-500 hover:bg-transparent font-semibold hover:text-orange-600',
    },
    {
      color: 'secondary',
      variant: 'plain',
      class:
        'text-cyan-500 hover:bg-transparent font-semibold hover:text-cyan-600',
    },
    {
      color: 'primary',
      disabled: true,
      class: 'hover:bg-orange-500',
    },
    {
      color: 'secondary',
      disabled: true,
      class: 'hover:bg-cyan-500',
    },
    {
      icon: true,
      size: 'lg',
      class: 'px-4',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { label, variant, color, size, icon, disabled, isLoading } = props;

    return (
      <button
        className={button({
          size,
          color,
          variant,
          icon: !!icon,
          disabled,
          isLoading,
        })}
        data-testid={props['test-id']}
        {...props}
        ref={ref}
      >
        {!isLoading && icon && (
          <span className="pr-2 rtl:pl-2 rtl:pr-0">{icon}</span>
        )}

        {!isLoading ? (
          label
        ) : (
          <>
            <TbLoaderQuarter size="25" className="animate-spin mr-2" />
            Loading...
          </>
        )}
      </button>
    );
  },
);
