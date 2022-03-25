const app = Vue.createApp({
    data() {
        return {
            nombre: 'Jhon',
            apellido: 'martinez',
            email: 'matrinze@innovaccion.mx',
            genero: 'male',
            picture: 'https://randomuser.me/api/portraits/men/87.jpg',
        }
    },
    methods:{
        async newUser(){
            const url = 'https://randomuser.me/api/';
            const res = await fetch(url);
            const { results } = await res.json();
 
            this.nombre = results[0].name.first;
            this.apellido = results[0].name.last;
            this.email = results[0].email;
            this.genero = results[0].gender;
            this.picture = results[0].picture.large;
        
            console.log(this.nombre);
        }
    }
});



app.mount('#app');