import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CounterState = {
  counter: number;
  increment: () => void;
  decrement: () => void;
  pokemon: any;
  getPokemon: () => void;
};

export const useCounterStore = create<CounterState>()(
  devtools((set, get) => ({
    counter: 0,
    pokemon: [],
    increment: () => {
      const { counter } = get();
      set({ counter: counter + 1 });
    },
    decrement: () => {
      const { counter } = get();
      set({ counter: counter - 1 });
    },
    getPokemon: async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await resp.json();
      set({ pokemon: data });
    },
  }))
);
