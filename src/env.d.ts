/// <reference path="../.astro/types.d.ts" />
import type { SupabaseClient, User } from '@supabase/supabase-js';

declare namespace App {
  interface Locals {
    user: User | null;
    supabase: SupabaseClient;
  }
}