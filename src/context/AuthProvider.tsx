// AuthProvider.tsx
import { useContext, useEffect, useState } from "react";
import { User } from "@/types/auth";
import { AuthContext } from "./AuthContext";
import {
  getSession,
  onAuthStateChange,
  signUp,
  signIn,
  signOut,
} from "@/apis/authApi";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((user) => {
      setUser(user);
      setLoading(false);
    });

    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = async (
    email: string,
    password: string,
    fullName: string,
  ) => {
    const user = await signUp(email, password, fullName); // throws on error
    setUser(user);
  };

  const handleSignIn = async (email: string, password: string) => {
    const user = await signIn(email, password); // throws on error
    setUser(user);
  };

  const handleSignOut = async () => {
    await signOut(); // throws on error
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn: handleSignIn,
        signUp: handleSignUp,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
