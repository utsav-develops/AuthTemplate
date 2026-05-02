import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { LogInIcon } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="w-full bg-gradient-to-t from-background via-background to-blue-gr/70 rounded-2xl shadow-md dark:shadow-[0_0_24px_rgba(255,255,255,0.1)]">
        <div className="pt-0 xl:pt-8 pb-0 items-center justify-center flex ">
          <div className="hidden xl:flex bg-gradient-to-t w-15 h-15 items-center justify-center from-background/50 to-muted p-3 rounded-xl shadow-md dark:shadow-[0_0_24px_rgba(255,255,255,0.25)]">
            <LogInIcon size={30} />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center p-5 space-y-2 text-center">
          <span className="text-xl font-semibold text-foreground">Sign in</span>
          <span className="text-md text-muted-foreground">
            Get in to discover ....
          </span>
        </div>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-foreground hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </div>
    </AuthLayout>
  );
}
