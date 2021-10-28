import { AuthProvider } from "./Auth";
import { ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

export const Providers = ({ children }: AuthProps) => (
  <AuthProvider>{children}</AuthProvider>
);
