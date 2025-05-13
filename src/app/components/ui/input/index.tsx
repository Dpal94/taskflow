import {BaseInputType} from '@/app/types/components/ui/input';
import EmailInput from './email';
import PasswordInput from './password';

export default function Input({type, ...restProps}: BaseInputType) {
  const renderInputByType = () => {
    switch (type) {
      case 'email':
        return <EmailInput {...restProps} />;
      case 'password':
        return <PasswordInput {...restProps} />;
      default:
        return (
          <input
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            {...restProps}
          />
        );
    }
  };

  return renderInputByType();
}
