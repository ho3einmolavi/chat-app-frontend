<template>
  <dashboard-form :chatrooms="chatrooms"></dashboard-form>
</template>

<script>
import DashboardForm from "../components/dashboardForm";
import axios from 'axios'
export default {
  name: "dashboard",
  data(){
    return {
      chatrooms: []
    }
  },

  mounted() {
    this.getChatrooms()
  },

  methods:{
    getChatrooms() {
        axios({
          method: 'get',
          url: `${process.env.VUE_APP_ROOT_API}/chatroom`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }).then(res => {
          this.chatrooms = res.data
        }).catch(err => {
          console.log(err.response)
          this.chatrooms = []
        })
    }
  },
  components: {DashboardForm}
}
</script>

<style scoped>

</style>