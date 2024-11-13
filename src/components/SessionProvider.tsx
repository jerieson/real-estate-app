// src/components/SessionProvider.tsx
"use client";

import { Session } from "inspector/promises";
import { SessionProvider as Provider } from "next-auth/react";
import { ReactNode } from "react";

export interface SessionProviderProps {
  children: ReactNode;
  session: Session | null | undefined;
}

export default function SessionProvider({
  children,
  session,
}: SessionProviderProps) {
  return <Provider session={session}>{children}</Provider>;
}
