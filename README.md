# react-auth-boilerplate

A minimal, backend-agnostic authentication boilerplate for React. No auth provider is baked in — wire it up to whatever backend you use.

## Features

- Auth state management out of the box
- `useAuth` hook for consuming auth anywhere in your app
- Protected route ready
- Fully typed with TypeScript

## Getting started

Clone the repo and install dependencies:

    git clone https://github.com/your-username/react-auth-boilerplate.git
    cd react-auth-boilerplate
    npm install

Then open `src/apis/authApis.ts` and implement the five functions for your backend. That's the only file you need to touch.

## Supported backends

Anything. Supabase, Firebase, Auth0, a custom REST API — as long as you implement the functions in `authApis.ts`, it'll work.

## Usage

```tsx
import { useAuth } from "@/context/AuthProvider";

function Dashboard() {
  const { user, signOut, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Not logged in</p>;

  return <button onClick={signOut}>Sign out, {user.fullName}</button>;
}
```

````

## License

MIT

```

```
````
