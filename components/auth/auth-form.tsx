'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Facebook, Loader2, Eye, EyeOff } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { authService } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const Icons = {
  spinner: Loader2,
  facebook: Facebook,
  eye: Eye,
  eyeOff: EyeOff,
  google: (props: React.ComponentProps<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  ),
};

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50).optional().or(z.literal('')),
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  mode: 'login' | 'register';
}

export function AuthForm({ mode, className, ...props }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

async function onSubmit(values: FormData) {
  setIsLoading(true);
    
  try {
    const result = mode === 'register'
      ? await authService.signUp(values.email, values.password, values.name)
      : await authService.signIn(values.email, values.password);

    if (mode === 'register') {
      if (result.success) {
        toast.success('Registration successful! Please check your email to verify your account.');
      } else {
        throw new Error(result.error);
      }
    } else {
      if (result.success) {
        toast.success('Successfully signed in!');
        router.push('/profile');
        router.refresh();
      } else {
        throw new Error(result.error);
      }
    }
  } catch (error: unknown) {
    console.error('Auth error:', error); // New log
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    toast.error(message);
    form.setError('root', { message });
  } finally {
    setIsLoading(false);
  }
}

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
          <Icons.google className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
          <Icons.facebook className="h-5 w-5" />
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>
      <Form {...form}>
        <form 
  onSubmit={form.handleSubmit(onSubmit)}
  className="space-y-4"
>
        <div className="grid gap-4">
          {mode === 'register' && (
            <FormField
              control={form.control}
              name="name"
              shouldUnregister={true}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      type="text"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            shouldUnregister={true}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="password"
            shouldUnregister={true}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                      disabled={isLoading}
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <Icons.eyeOff className="h-4 w-4" />
                      ) : (
                        <Icons.eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {mode === 'login' && (
            <div className="text-sm text-right">
              <Button variant="link" className="p-0 h-auto font-normal">
                Forgot your password?
              </Button>
            </div>
          )}
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>
        </form>
      </Form>
    </div>
  );
}