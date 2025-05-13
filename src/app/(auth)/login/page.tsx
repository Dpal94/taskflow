import Button from '@/app/components/ui/button';
import Input from '@/app/components/ui/input';
import LabelWrapper from '@/app/components/ui/label-wrapper';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="Company logo" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <LabelWrapper text="Email address" htmlFor="email">
            <Input type="email" />
          </LabelWrapper>

          <LabelWrapper text="Password" htmlFor="password">
            <Input type="password" />
          </LabelWrapper>

          <div>
            <Button label="Login" type="submit" />
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?
          <Link
            href="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sing up
          </Link>
        </p>
      </div>
    </div>
  );
}
