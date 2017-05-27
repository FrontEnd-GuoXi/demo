<template>
  <div id="app">
    <loading v-if="loadingFlag"></loading>
    <router-view></router-view>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Loading from './components/Common/Loading';
export default {
  name: 'app',
  components:{
    Loading
  },
  computed:mapState({
  	 loadingFlag(state){
  	 	return state.loadingFlag;
  	 }
  }),
}
</script>

<style>
@import './style/cssReset.css'
</style>
