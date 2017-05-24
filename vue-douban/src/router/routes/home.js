import store from '../../store/index';
import home from '../../components/home';
import * as types from '../../store/mutation_types';
import movieDetail from './movieDetail';
import main from '../../components/main';
import {
  hotMovie,
  commingSoon,
  top250,
  usBox,
} from '../server'; 

export default {
	path:'/',
  redirect:'/main',
	name:'Home',
	component:home,
  children:[
       movieDetail,
  {
     path:'main',
     component:main
  } 
  ],
	beforeEnter:(to , before , next) => {
         if(Object.keys(store.state.home.homeData).length !==0){
         	store.commit(types.LOADING_FLAG, false);
         	next();
         	return;
         }
         store.commit(types.LOADING_FLAG,true);
         Promise.all([
               hotMovie(8,0),
               commingSoon(8,0),
               top250(8,0),
               usBox(8,0)
         	]).then((homeData) => {
         		store.commit(types.HOME_DATA,homeData);
         		store.commit(types.LOADING_FLAG,false);

         	})
         	next();
	}
}