import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Iron Man" },
      { id: 12, name: "Spider Man" },
      { id: 13, name: "ant Man" },
      { id: 14, name: "he Man" },
      { id: 15, name: "hulk" },
      { id: 16, name: "captain america" },
      { id: 17, name: "dr strange" },
      { id: 18, name: "thor" },
      { id: 19, name: "clenbt" },
      { id: 20, name: "natasha" }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
