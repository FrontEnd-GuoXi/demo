import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import {mutations} from './mutations';
import actions from './actions';
import movieDetail from './modules/movieDetail';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		netStatus:'',
		loadingFlag:true,
	},
	mutations,
	actions,
	modules:{
		home,
		movieDetail,
	}
});