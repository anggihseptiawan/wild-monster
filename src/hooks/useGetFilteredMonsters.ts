import { UserData } from "../@types/UserData";

export const useGetFilteredMonsters = (
  monsters: UserData[],
  searchField: string
) => {
  if (Array.isArray(monsters)) {
    return monsters?.filter((monster) =>
      monster.name.toLowerCase().match(searchField.toLocaleLowerCase())
    );
  }

  return [];
};
