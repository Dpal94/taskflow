import {LabelWrapperType} from '@/app/types/components/ui/label-wrapper';
import Label from './label';

export default function LabelWrapper({
  children,
  text,
  htmlFor,
}: LabelWrapperType) {
  return (
    <div>
      <Label text={text} htmlFor={htmlFor} />
      <div className="mt-2">{children}</div>
    </div>
  );
}
