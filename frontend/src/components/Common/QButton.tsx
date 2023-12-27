type ButtonProps = {
  text: string;
  styleClass?: string;
  disabled?: boolean;
  variant?: 'primary' | 'danger' | 'success' | 'dark';
  onClick?: (e: any) => void;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const QButton = ({
  text = '',
  styleClass = '',
  variant = 'primary',
  disabled=false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type='button'
      className={classNames(
        variant === 'primary'
          ? 'hover:bg-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 focus:shadow-[0_0_0_0.3rem_#ede9fe] bg-indigo-600'
          : variant === 'danger'
          ? 'hover:bg-red-500 focus:ring-red-500 focus:border-red-500 focus:shadow-[0_0_0_0.3rem_#fee2e2] bg-red-600'
          : variant === 'success'
          ? 'hover:bg-green-500 focus:ring-green-500 focus:border-green-500 focus:shadow-[0_0_0_0.3rem_#dcfce7] bg-green-600'
          : 'hover:bg-gray-600 focus:ring-gray-600 focus:border-gray-600 focus:shadow-[0_0_0_0.3rem_#f3f4f6] bg-gray-700',
        `inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white ${styleClass}`
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default QButton;
