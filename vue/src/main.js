import Vue from "vue";
import App from "./App.vue";
import router from "@/router/route.js";
import store from "@/store/store.js";
//import axios from 'axios';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created () {

    const userString = localStorage.getItem('user'); 
    //ugh, empty user gets actually gets saved in local storage as a string "undefined"
    if (userString && userString !=="undefined") {
      
      //console.log(typeof userString);
      console.log('Userstring is: ' + userString);
      const userData = JSON.parse(userString)
      //const userData = data.success;  
      this.$store.commit('SET_USER_DATA', userData)
    }
    /*
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    ) */
  },
  render: h => h(App)
}).$mount('#app')
