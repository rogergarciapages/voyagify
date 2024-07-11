// src/components/ConnectButton.tsx
"use client";

import { signIn } from "next-auth/react";

const ConnectButton = () => {
  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-lg"
      onClick={() => signIn("spotify")}
    >
      Connect to Spotify
    </button>
  );
};

export default ConnectButton;
