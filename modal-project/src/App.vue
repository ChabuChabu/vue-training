<template>
   <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal  theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja Giveaway</h1>
        <p>Grab your ninja swag for half the price!!</p>
    </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
        <h1>Sign up to the newsletter</h1>
        <p>For updates and promo codes!!</p>
    </Modal>
  </div>
  <p>Welcome ...</p>
  <button @click="toggleModal">open modal(shift)</button>
  <button @click="toggleModalTwo">open modal two</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return{
      title:'Frontend Engineering Architecture using Vue.js',
      showModal: false,
      showModalTwo: false
    }
  },
  methods:{
    toggleModal(){
      this.showModal = ! this.showModal 
    },
    toggleModalTwo(){
      this.showModalTwo = ! this.showModalTwo 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
   border-bottom: 1px solid #ddd;
   display: inline-block;
   padding-bottom: 10px;
}
</style>
