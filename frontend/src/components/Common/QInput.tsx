type InputTextProps = {
  type: 'text' | 'email' | 'number';
  defaultValue?: string | number;
  placeholder?: string;
  styleClass?: string;
  variant?: 'primary' | 'danger' | 'success' | 'dark';
  onChange?: (e: any) => void;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const QInput = ({
  type = 'text',
  defaultValue = '',
  placeholder = '',
  styleClass = '',
  variant = 'primary',
  onChange,
}: InputTextProps) => {
  return (
    <input
      type={type}
      className={classNames(
        variant === 'primary'
          ? 'focus:ring-indigo-500 focus:border-indigo-500 focus:shadow-[0_0_0_0.3rem_#ede9fe]'
          : variant === 'danger'
          ? 'focus:ring-red-500 focus:border-red-500 focus:shadow-[0_0_0_0.3rem_#fee2e2]'
          : variant === 'success'
          ? 'focus:ring-green-500 focus:border-green-500 focus:shadow-[0_0_0_0.3rem_#dcfce7]'
          : 'focus:ring-gray-500 focus:border-gray-500 focus:shadow-[0_0_0_0.3rem_#f3f4f6]',
        `shadow-sm block w-full sm:text-sm border-gray-300 rounded-md ${styleClass}`
      )}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default QInput;
