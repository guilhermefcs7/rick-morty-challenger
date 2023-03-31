import { CharacterDetail } from "./characterDetail";

export interface FavoriteContextProps {
  favorites: CharacterDetail[];
  setFavorites: React.Dispatch<React.SetStateAction<CharacterDetail[]>>;
}
