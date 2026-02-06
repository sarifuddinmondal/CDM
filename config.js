// Supabase SDK ইম্পোর্ট
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://jtfjcflwokyqgvcwsdry.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZmpjZmx3b2t5cWd2Y3dzZHJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNTk1MzUsImV4cCI6MjA4NTkzNTUzNX0.hzFo5hM2yLw6QC9dv7AoA_JONJGl7M1ejrmWpNy3kHk';

// Supabase ক্লায়েন্ট তৈরি
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };