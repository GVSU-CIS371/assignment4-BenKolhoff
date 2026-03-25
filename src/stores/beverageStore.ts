import { defineStore } from "pinia";
import { BeverageType } from "../types/beverage";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";


export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    currentStoredBeverage: {},
    storedBeverages: [] as BeverageType[]
  }),
  actions: {
    makeBeverage(beverageName: string) {
      let newBeverage: BeverageType = {
        id: this.storedBeverages.length == 0 ? "0" : (Number(this.storedBeverages[this.storedBeverages.length - 1].id) + 1).toString(),
        name: beverageName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup
      };
      
      this.storedBeverages.push(newBeverage);
    },
    showBeverage(newBeverage: BeverageType) {
      this.currentBase = newBeverage.base;
      this.currentTemp = newBeverage.temp;
      this.currentCreamer = newBeverage.creamer;
      this.currentSyrup = newBeverage.syrup;
    },
  },
  persist: true,
});
