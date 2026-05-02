import { User } from "@/types/auth";

/*
 * Replace each function body with your backend integration.
 * Example with Supabase:
 *
 * export async function getSession() {
 *   const { data: { session } } = await supabase.auth.getSession();
 *   return session?.user ?? null;
 * }
 *
 * export function onAuthStateChange(callback) {
 *   const { data: { subscription } } = supabase.auth.onAuthStateChange(
 *     (_event, session) => callback(session?.user ?? null)
 *   );
 *   return () => subscription.unsubscribe();
 * }
 */

// Return the current user, or null if no active session
export async function getSession(): Promise<User | null> {
  return null;
}

// Call callback whenever auth state changes; return an unsubscribe function
export function onAuthStateChange(
  callback: (user: User | null) => void,
): () => void {
  return () => {};
}

// Return the created user on success, throw on failure
export async function signUp(
  email: string,
  password: string,
  fullName: string,
): Promise<User> {
  throw new Error("signUp() not implemented");
}

// Return the signed-in user on success, throw on failure
export async function signIn(email: string, password: string): Promise<User> {
  throw new Error("signIn() not implemented");
}

// Throw on failure
export async function signOut(): Promise<void> {
  //
}
