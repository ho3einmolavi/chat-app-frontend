<template>
  <div>
    <h1>chatroom id</h1>
    <h1>{{chatroom_id}}</h1>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: "chatroom",

  mounted() {
    this.startConnection();
  },

  data(){
    return {
        chatroom_id: this.$route.params.id,
    }
  },

  methods: {
    startConnection() {
      const socket = io("http://localhost:3000" , {
        query: {
          token: localStorage.getItem("token")
        }
      })
      console.log(socket)
    }
  }
}
</script>

<style scoped>

</style>