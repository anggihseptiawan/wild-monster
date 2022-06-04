import React from "react";
import { UserData } from "../@types/UserData";

interface CardProps {
  monster: UserData;
}

export const Card = (props: CardProps) => (
  <div className="flex justify-center items-center flex-col bg-teal-400 py-6 rounded-sm">
    <img
      src={`https://robohash.org/${
        props.monster.id + 15
      }?set=set2&size=180x180`}
      alt="monster"
    />
    <h2 className="mt-2 font-bold text-xl">{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
