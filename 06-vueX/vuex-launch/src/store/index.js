import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  getters: {
    cuadrado(state ){
      return state.contador * state.contador
    }
  },
  mutations: {
    sumar(state, random){
      state.contador += random;
    },
    restar(state, random){
      state.contador -= random;
       
    }
  },
  actions: {
    async sumarContador( { commit } ){
      let url = "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new";
      
      const res = await fetch(url);
      const result = await res.json(); 
      commit('sumar',result);
    },
    async bajarContador( { commit } ){
      let url = "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new";
      
      const res = await fetch(url);
      const result = await res.json(); 
      commit('restar',result);
    }
  },
  modules: {
  }
})
