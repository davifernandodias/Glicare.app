interface IButtonProps {
  icon?: string;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disable?: boolean;
}

const Button = ({ icon, label, onClick, disable }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={` w-full max-w-2xs h-10 flex justify-center rounded-4xl ${
        !disable
          ? "bg-blue-ga-800 hover:cursor-pointer hover:bg-blue-ga-900"
          : "hover:cursor-not-allowed bg-blue-ga-100"
      }
         `}
    >
      <span className="flex items-center gap-2">
        {icon && <img width={18} src={icon} alt="Logo do Google" />}
        <span className="label-large-ga text-white mt-0.5">{label}</span>
      </span>
    </button>
  );
};

export default Button;
