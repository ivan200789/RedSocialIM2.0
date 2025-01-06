import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dhaqqjoxrnfsvfgkgicz.supabase.co"
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoYXFxam94cm5mc3ZmZ2tnaWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0ODYxOTMsImV4cCI6MjA1MTA2MjE5M30.or4AFiCSvEs8zEnYSFORTWfQuBLx0jU0lIOunyAOraI"

export const supabase = createClient(supabaseUrl, apiKey)
