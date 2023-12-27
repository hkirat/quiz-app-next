type InputTextProps = {
  type: 'text' | 'email' | 'number';
  defaultValue?: string | number;
  placeholder?: string;
  variant?: 'primary' | 'danger' | 'success';
  onChange?: () => void;
};

const InputText = ({
  type = 'text',
  defaultValue = '',
  placeholder = '',
  variant = 'primary',
  onChange,
}: InputTextProps) => {
  return (
    <input
      type={type}
      className={`shadow-sm focus:ring-${
        variant === 'primary'
          ? 'indigo'
          : variant === 'danger'
          ? 'red'
          : 'green'
      }-500 focus:border-${
        variant === 'primary'
          ? 'indigo'
          : variant === 'danger'
          ? 'red'
          : 'green'
      }-500 block w-full sm:text-sm border-gray-300 rounded-md`}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default InputText;
