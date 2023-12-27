type InputTextProps = {
  type: 'text' | 'email' | 'number' | 'radio';
  name?: string;
  value?: string | number | boolean;
  defaultValue?: string | number;
  defaultChecked?: boolean;
  checked?: boolean;
  placeholder?: string;
  styleClass?: string;
  variant?: 'primary' | 'danger' | 'success' | 'dark';
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const QInput = ({
  type = 'text',
  name = '',
  value,
  defaultValue = '',
  defaultChecked = false,
  checked = false,
  placeholder = '',
  styleClass = '',
  variant = 'primary',
  onChange,
  onClick,
}: InputTextProps) => {
  return type === 'radio' ? (
    <input
      name={name}
      type='radio'
      {...(checked ? { checked } : { defaultChecked: defaultChecked })}
      className={classNames(
        variant === 'primary'
          ? 'focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 focus:shadow-[0_0_0_0.3rem_#ede9fe]'
          : variant === 'danger'
          ? 'focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 focus:shadow-[0_0_0_0.3rem_#fee2e2]'
          : variant === 'success'
          ? 'focus:ring-success-500 h-4 w-4 text-success-600 border-gray-300 focus:shadow-[0_0_0_0.3rem_#dcfce7]'
          : 'focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300 focus:shadow-[0_0_0_0.3rem_#f3f4f6]',
        `shadow-sm block w-full sm:text-sm border-gray-300 rounded-md ${styleClass}`
      )}
      onClick={onClick}
    />
  ) : (
    <input
      name={name}
      {...(value && (typeof value === 'string' || typeof value === 'number')
        ? { value }
        : { defaultValue: defaultValue })}
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
      onChange={onChange}
    />
  );
};

export default QInput;
