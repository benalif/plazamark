import { createContext, useContext } from "react";

export const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}
