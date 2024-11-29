import { Icons } from '@/components/icons';

export default function AuthLoading() {
  return (
    <div className="flex h-[800px] w-full items-center justify-center">
      <Icons.spinner className="h-12 w-12 animate-spin" />
    </div>
  );
}