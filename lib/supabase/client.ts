import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = 'https://otiyphcnmmjcmjuunbcu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aXlwaGNubW1qY21qdXVuYmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MDg5MzcsImV4cCI6MjA0ODA4NDkzN30.MlEqUlwgnhZmpqx1tBxPQVQMUSaOfrX9GLazNw2vWuQ';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
});