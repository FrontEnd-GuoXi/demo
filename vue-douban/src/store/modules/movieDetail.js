import * as types from '../mutation_types';

const state = {
  currentMovie:{},
};
const getters = {};
const actions = {};
const mutations = {
	[types.CURRENT_MOVIE](state,current_movie){

             state.currentMovie = current_movie;
	}
};

export default{state ,getters ,actions ,mutations};