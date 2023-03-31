import { createContext, ReactNode } from "react";
import { NextRouter } from "next/router";

export interface RouterContextProps {
  router: NextRouter;
  children: ReactNode;
}

export const RouterContext = createContext<RouterContextProps>(
  {} as RouterContextProps
);

export function RouterProvider({ router, children }: RouterContextProps) {
  return (
    <RouterContext.Provider value={{ router } as any}>
      {children}
    </RouterContext.Provider>
  );
}
