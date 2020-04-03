import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }

Vue.component('child', {
  props: ['message'],
  template: '<h1>{{ message }}</h1>',
  
});
var app = new Vue({
  el: '#app',
});

Vue.component('child', {
  props: ['mySay'],
  template: '<h1>{{ mySay }}</h1>',

});
var app = new Vue({
  el: '#app',
})

Vue.component('child', {
  props: ['mySay'],
  template: '<h1>{{ mySay }}</h1>',

});
var app = new Vue({
  el: '#app',
  data: {
      message : null
  }
});

Vue.component('child', {
  props: ['mySay'],
  template: '<h1>{{ typeof(mySay) }}</h1>',

});
var app = new Vue({
  el: '#app',
});

Vue.component('child', {
  props: ['mySay'],
  data : function () {
      return { dataSay : this.mySay + " This is dataSay!"};
  },
  template: '<h1>{{ dataSay }}</h1>',

});
var app = new Vue({
  el: '#app',
});

Vue.component('child', {
  props: ['mySay'],
  computed : {
      convertSay: function () {
          return this.mySay.trim().toUpperCase();
      }
  },
  template: '<h1>{{ convertSay }}</h1>',
});
var app = new Vue({
  el: '#app'
});

Vue.component('ex',{
  props: {
      name: 'test',

      class: [1, 'test'],
      
      point: {
          type: 1
      }
  }
});

Vue.component('ex',{
  props: {
      point: {
          validator: function (value) {
              return value > 10;
          }
      }
  }
});