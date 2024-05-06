export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...props }: ButtonProps) => {
  return <button className="text-blue-500" {...props} />;
};
