'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store } from 'lucide-react';
import { AuthForm } from './auth-form';
import { cn } from '@/lib/utils';

export function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div id="auth-wrapper" className="container relative h-[800px] flex items-center justify-center overflow-hidden">
      <div id="auth-container" className="relative w-full max-w-[800px] h-[600px] rounded-2xl shadow-2xl">
        <div id="forms-container" className="absolute inset-0 grid grid-cols-2 bg-background">
          <div id="left-panel" className="relative">
            <AnimatePresence mode="wait" initial={false}>
              {!isLogin && (
                <motion.div
                  key="register-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 h-full flex flex-col justify-center"
                >
                  <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                      Create Account
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      or continue with these social profiles
                    </p>
                  </div>
                  <AuthForm mode="register" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div id="right-panel" className="relative">
            <AnimatePresence mode="wait" initial={false}>
              {isLogin && (
                <motion.div
                  key="login-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 h-full flex flex-col justify-center"
                >
                  <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                      Sign in to Account
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      or continue with these social profiles
                    </p>
                  </div>
                  <AuthForm mode="login" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <motion.div
          id="sliding-panel"
          className="absolute inset-0 bg-primary rounded-2xl z-50"
          initial={false}
          animate={{
            x: isLogin ? '0%' : '100%',
            width: '50%',
            transformOrigin: isLogin ? 'left' : 'right'
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <div id="sliding-content" className="absolute inset-0 flex flex-col justify-between p-12 text-white">
            <div className="flex items-center gap-2 text-lg font-medium">
              <Store className="h-6 w-6" />
              <span>Sole Trader AI</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                {!isLogin ? 'Welcome Back!' : 'Hello, Friend!'}
              </h2>
              <p className="text-primary-foreground/80">
                {!isLogin 
                  ? 'To keep connected with us please login with your personal info'
                  : 'Enter your personal details and start your journey with us'}
              </p>
              <button
                onClick={toggleForm}
                className="rounded-full border-2 border-white px-8 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                {!isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
            <div className="relative" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}