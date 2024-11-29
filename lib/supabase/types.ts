export type Profile = {
  id: string;
  created_at: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  bio?: string;
};

export type Scenario = {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  price: number;
  author_id: string;
  category: string;
  tags: string[];
  preview_url?: string;
  documentation_url?: string;
  version: string;
  status: 'draft' | 'published' | 'archived';
};

export type Purchase = {
  id: string;
  created_at: string;
  scenario_id: string;
  buyer_id: string;
  transaction_status: 'pending' | 'completed' | 'failed';
  amount: number;
};