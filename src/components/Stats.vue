<template>
  <div class="stats">
    <h1>Question 1</h1>
    <h2>{{this.data_api}}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      data_api: {}
    }
  },
  mounted(){
    this.loadGame();
  },
  methods:{
    loadGame: async function(){
      axios.get("http://localhost:8000/quiz/getNewGameAnimalEasy")    
      .then((res) => { 
        this.data_api = res.data;   
        console.log("Vote !"+ res)    
      })    
      .catch((errors) => {    
          console.log(errors)    
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>