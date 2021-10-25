import { createContext, useState } from "react";
import { MeetupType } from "../models/MeetupType";

const FavoritesContext = createContext<{
  favorites: MeetupType[];
  totalFavorites: number;
  addFavorite: (favoriteMeetup: MeetupType) => void;
  removeFavorite: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => boolean;
}>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  itemIsFavorite: () => false,
});

export function FavoritesContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [userFavorites, setUserFavorites] = useState<MeetupType[]>([]);

  function addFavoriteHandler(favoriteMeetup: MeetupType) {
    setUserFavorites((previousUserFavorites) => [
      ...previousUserFavorites,
      favoriteMeetup,
    ]);
  }

  function removeFavoriteHandler(meetupId: string) {
    setUserFavorites((previousUserFavorites) =>
      previousUserFavorites.filter(({ id }) => id !== meetupId)
    );
  }

  function itemIsFavoriteHandler(meetupId: string): boolean {
    return userFavorites.some(({ id }) => id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
