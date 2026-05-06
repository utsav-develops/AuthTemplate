# react-auth-boilerplate



https://github.com/user-attachments/assets/8af63aaa-ed19-43f3-a2eb-bbfdf5d66118



A minimal, backend-agnostic authentication boilerplate for React. No auth provider is baked in — wire it up to whatever backend you use.

## Features

- Auth state management out of the box
- `useAuth` hook for consuming auth anywhere in your app
- Protected route ready
- Fully typed with TypeScript

## Getting started

Clone the repo and install dependencies:

    git clone git@github.com:utsav-develops/AuthTemplate.git
    cd AuthTemplate
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

## License

MIT
