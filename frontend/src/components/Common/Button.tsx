type ButtonProps = {
  text: string;
  variant?: 'primary' | 'danger' | 'success';
  onClick?: () => void;
};

const Button = ({ text = '', variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-${
        variant === 'primary'
          ? 'indigo'
          : variant === 'danger'
          ? 'red'
          : 'green'
      }-600 hover:bg-${
        variant === 'primary'
          ? 'indigo'
          : variant === 'danger'
          ? 'red'
          : 'green'
      }-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
        variant === 'primary'
          ? 'indigo'
          : variant === 'danger'
          ? 'red'
          : 'green'
      }-500`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
