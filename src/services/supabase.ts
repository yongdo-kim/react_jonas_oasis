import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";
export const supabaseUrl = "https://kthrxiddowxyvuvzrprv.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY ?? "";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0aHJ4aWRkb3d4eXZ1dnpycHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NTE3MDcsImV4cCI6MjAyNDUyNzcwN30.wwWDXhWxN9ncR_54bN0BRf6vEpirJ3bIgY8JgzM0o4c";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export default supabase;
