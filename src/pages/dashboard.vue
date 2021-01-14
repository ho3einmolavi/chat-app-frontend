<template>
  <dashboard-form/>
</template>

<script>
import DashboardForm from "../components/dashboardForm";

export default {
  name: "dashboard",
  data(){
    return {
      fields: [
        {
          name: 'chatroom name',
          type: 'text'
        }
      ]
    }
  },
  components: {DashboardForm}
}
</script>

<style scoped>

</style>