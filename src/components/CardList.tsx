import React from "react";
import { Card } from "./Card";
import { UserData } from "../@types/UserData";

interface CardListProps {
  monsters: UserData[];
}

export const Cardlist = (props: CardListProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {props.monsters.map((monster: any) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
