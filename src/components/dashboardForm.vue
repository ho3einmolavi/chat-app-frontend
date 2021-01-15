<template>
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="form-block">
                <div class="mb-4">
                  <h3>Chat rooms</h3>
                  <p class="mb-4">Join or create a chat room</p>
                </div>
                <form action="#" method="post">
                  <div class="form-group first">
                    <input type="text" class="form-control" id="name" placeholder="chat room name">
                  </div>
                  <input type="submit" value="create a chatroom" class="btn btn-pill text-white btn-block btn-primary">
                </form>
                <hr>
                <div class="mt-2">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(item,index) in chatrooms" :key="index">
                      <div class="list-group-item list-group-item-action">
                        {{ item.name }}
                        <router-link :to="/chatroom/ + item._id">
                          <button type="button" value="Join" class="mt-2 btn btn-pill btn-block btn-outline-danger">
                            join
                          </button>
                        </router-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboardForm",
  props: ['chatrooms']
}
</script>

<style scoped>

</style>