<template>
  <div>
    <AuthForm
        title="sign in into chat app"
        text="hope you enjoy"
        type="login"
    />
  </div>
</template>

<script>
import AuthForm from "../components/AuthForm";

export default {
  name: "login",

  data() {
    return {

    }
  },

  methods: {

  },
  components: {AuthForm}
}
</script>