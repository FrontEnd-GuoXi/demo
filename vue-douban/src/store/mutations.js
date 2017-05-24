import *  as types from './mutation_types';

export  const mutations = {
     [types.LOADING_FLAG](state,loadingFlag){
     	   state.loadingFlag = loadingFlag;
     }
};