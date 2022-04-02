<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"> 

    <Contador/>
    

    <div class="cuadrado" > 
    	{{ $store.state.contador }} <sup>2</sup> = {{ $store.getters.cuadrado }}
    </div>  


    <div class="botones">
    	<button @click="$store.dispatch('bajarContador')">
    		-
    	</button>
    	<button  @click="$store.dispatch('sumarContador')">
    		+
    	</button>
    </div>   


  </div>
</template>

<script> 

	import Contador from "../components/Contador.vue";
 
  export default {
    name: 'HomeView',
    components:{
    	Contador,
    },
    /*
    data(){
    	return { contador : 0 } 
    },
    methods:{
    	sum(){
    		$store.state.contador++;
    	},
    	res(){
    		this.contador--;
    	}
    }*/
  }
</script>

<style>
	div{
		margin: 10px;
	}
	.counter{
		font-size:80px;


	}
	.botones button{
		font-size: 40px;
		color: red;
		width: 100px;
		margin: 0 10px;
	}
	.cuadrado{
		font-size: 25px;
	}
</style> 
