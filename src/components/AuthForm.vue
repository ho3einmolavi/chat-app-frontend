<template>
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="form-block">
                <div class="mb-4">
                  <h3>{{ title }}</h3>
                  <p class="mb-4">{{ text }}</p>
                </div>
                <form action="#" method="post">

                  <div class="form-group first" v-if="type === 'register'">
                    <input type="text" class="form-control" @keyup.enter="register" v-model="name" id="name" placeholder="name">
                  </div>
                  <div class="form-group first">
                    <input type="email" class="form-control" @keyup.enter="isLoginPage ? login() : register()" v-model="email" id="email" placeholder="email">
                  </div>
                  <div class="form-group first">
                    <input type="password" class="form-control" @keyup.enter="isLoginPage ? login() : register()" v-model="password" id="password" placeholder="password">
                  </div>


                  <div class="d-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                      <input type="checkbox" checked="checked"/>
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>
                  </div>

                  <input v-if="type === 'login'" type="button" value="Log In" @click="login"
                         class="btn btn-pill text-white btn-block btn-primary">

                  <input v-if="type === 'register'" type="button" value="Register" @click="register"
                         class="btn btn-pill text-white btn-block btn-primary">

                  <span v-if="type === 'login'" class="d-block text-center my-4 text-muted">
                    <router-link to="/register">I don't have an account</router-link>
                  </span>
                  <span v-if="type === 'register'" class="d-block text-center my-4 text-muted">
                    <router-link to="/login">I already have an account</router-link>
                  </span>

                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "AuthForm",
  props: ['title', 'text', 'type'],
  data() {
    return {
      name: '',
      email: '',
      password: '',
      isLoginPage: this.type === 'login'
    }
  },

  methods: {
    login() {
      axios({
        method: 'post',
        url: `${process.env.VUE_APP_ROOT_API}/user/login`,
        data: {
          email: this.email,
          password: this.password
        }
      }).then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        this.$toast.success("you logged in", {
          position: 'top-right'
        })
        this.$router.push('/dashboard')
      }).catch(err => {
        if (err.response.status === 400) {
          this.$toast.error(err.response.data.message, {
            position: 'top-right'
          })
        }
        if (err.response.status === 422) {
          err.response.data.forEach(error => {
            this.$toast.error(error.message, {
              position: 'top-right'
            })
          })
        }
      })
    },

    register() {
      axios({
        method: 'post',
        url: `${process.env.VUE_APP_ROOT_API}/user/register`,
        data: {
          name: this.name,
          email: this.email,
          password: this.password,
        }
      }).then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        this.$toast.success("you are registered", {
          position: 'top-right',
          duration: 3500
        })
      }).catch(err => {
        if (err.response.status === 400) {
          this.$toast.error(err.response.data.message, {
            position: 'top-right'
          })
        }
        if (err.response.status === 422) {
          err.response.data.forEach(error => {
            this.$toast.error(error.message, {
              position: 'top-right'
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>