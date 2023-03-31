import React from "react";
import { CharacterDetail } from "../../../../types/characterDetail";
import { FavoriteContextProps } from "../../../../types/favoriteContext";

export const FavoriteContext = React.createContext<FavoriteContextProps>({
  favorites: [],
  setFavorites: () => console.warn("setFavorites is not ready"),
});

type FavoriteProviderProps = {
  children: React.ReactNode;
};

function FavoriteProvider({ children }: FavoriteProviderProps) {
  const [favorites, setFavorites] = React.useState<CharacterDetail[]>([]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;
