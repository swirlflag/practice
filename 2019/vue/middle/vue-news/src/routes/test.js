import bus from '../utils/bus.js';
import { store } from '../store/index.js';

export const fn = function(to, from, next){
  bus.$emit('start:spinner');
  store.dispatch('FETCH_LIST', to.name)
    .then(() => {
      console.log('h1');
      next();
      bus.$emit('end:spinner');
    })
    .catch((error) => {
      console.log(error);
    });

};

