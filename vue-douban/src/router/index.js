import Vue from 'vue';
import Router from 'vue-router';
import home from './routes/home';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
        home,
  ]
})
