export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string
          avatar_url?: string
          bio?: string
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          full_name: string
          avatar_url?: string
          bio?: string
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          avatar_url?: string
          bio?: string
        }
      }
      scenarios: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          description: string
          price: number
          author_id: string
          category: string
          tags: string[]
          preview_url?: string
          documentation_url?: string
          version: string
          status: 'draft' | 'published' | 'archived'
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          description: string
          price: number
          author_id: string
          category: string
          tags: string[]
          preview_url?: string
          documentation_url?: string
          version: string
          status: 'draft' | 'published' | 'archived'
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          description?: string
          price?: number
          author_id?: string
          category?: string
          tags?: string[]
          preview_url?: string
          documentation_url?: string
          version?: string
          status?: 'draft' | 'published' | 'archived'
        }
      }
      purchases: {
        Row: {
          id: string
          created_at: string
          scenario_id: string
          buyer_id: string
          transaction_status: 'pending' | 'completed' | 'failed'
          amount: number
        }
        Insert: {
          id?: string
          created_at?: string
          scenario_id: string
          buyer_id: string
          transaction_status: 'pending' | 'completed' | 'failed'
          amount: number
        }
        Update: {
          id?: string
          created_at?: string
          scenario_id?: string
          buyer_id?: string
          transaction_status?: 'pending' | 'completed' | 'failed'
          amount?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}