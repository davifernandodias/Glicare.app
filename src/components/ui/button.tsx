import { ReactNode } from "react";

interface IButtonProps {
  icon?: ReactNode;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disable?: boolean;
  width?: number;
  attr?: string;
  children?: ReactNode;
}

export const Button = ({ icon, label, onClick, disable, width, attr, children }: IButtonProps) => {
  const defaultClasses = "w-full max-w-2xs h-10 flex justify-center rounded-4xl";
  const stateClasses = !disable
    ? "bg-blue-ga-800 hover:cursor-pointer hover:bg-blue-ga-900"
    : "hover:cursor-not-allowed bg-blue-ga-100";

  const className = attr ? `${attr} ` : `${defaultClasses} ${stateClasses}`;

  return (
    <button
      onClick={onClick}
      type="button"
      className={className}
    >
      {children ? (
        children
      ) : (
        <span className="flex items-center gap-2">
          {icon && (
            <span style={{ width: width ? `${width}px` : undefined, display: "inline-flex" }}>
              {icon}
            </span>
          )}
          {label && <span className="label-large-ga text-white mt-0.5">{label}</span>}
        </span>
      )}
    </button>
  );
};

export default Button;