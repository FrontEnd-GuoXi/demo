import * as types from '../mutation_types';

const state = {
	homeData:{},
};

const getters = {};

const actions = {};

const mutations = {
	[types.HOME_DATA](state,homeData){
		state.homeData = homeData
	}
};

export default {state, getters, actions, mutations};