import { createStore, Store } from "vuex";
import {Product} from './common/types'
interface State {
  count: number;
  isDark: boolean;
  allProducts: Product[]; // or define a specific type for 'allProducts'
}

const store: Store<State> = createStore({
  state(): State {
    return {
      count: 0,
      isDark: true,
      allProducts: [],
    };
  },
  mutations: {
    increment(state: State, payload: number = 1): void {
      state.count += payload;
    },
    decrement(state: State): void {
      state.count--;
    },
    setCartEmpty(state: State): void {
      state.count = 0;
    },
    setProducts(state: State, payload: any[]): void {
      state.allProducts = payload;
    },
    setIsDark(state: State, payload: boolean): void {
      state.isDark = payload;
    },
  },
});

export default store;
