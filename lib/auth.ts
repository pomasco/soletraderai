import { AuthError, AuthResponse } from '@supabase/supabase-js';
import { supabase } from './supabase/client';

export type AuthResult = {
  success: boolean;
  error?: string;
};

export const authService = {
  async signIn(email: string, password: string): Promise<AuthResult> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      return { success: true };
    } catch (error) {
      console.error('Sign in error:', error);
      return {
        success: false,
        error: error instanceof AuthError ? error.message : 'Failed to sign in'
      };
    }
  },

  async signUp(email: string, password: string, name?: string): Promise<AuthResult> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      return { success: true };
    } catch (error) {
      console.error('Sign up error:', error);
      return {
        success: false,
        error: error instanceof AuthError ? error.message : 'Failed to sign up'
      };
    }
  },

  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  }
};