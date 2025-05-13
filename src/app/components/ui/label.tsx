import {BaseLabelType} from '@/app/types/components/ui/label';

export default function Label({text, htmlFor}: BaseLabelType) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm/6 font-medium text-gray-900"
    >
      {text}
    </label>
  );
}
