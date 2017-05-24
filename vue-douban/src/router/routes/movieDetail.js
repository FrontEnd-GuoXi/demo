import movieDetail from '../../components/movieDetail';
import {currentMovie} from '../server';
import store from '../../store';
import * as types from '../../store/mutation_types';


export default{
	path:'movieDetail/:pageId',
	component:movieDetail,
	beforeEnter:(to ,before ,next) => {
          const pageId = to.params.pageId;
          if(store.state.movieDetail.currentMovie[`$(id)`]){
          	 store.commit(types.LOADING_FLAG,false);
          	 next();
          	 return;
          }
          store.commit(types.LOADING_FLAG , true);
          currentMovie(pageId).then((currentMovieDetail) =>{
                 const id = pageId;
                 store.commit(types.CURRENT_MOVIE,{
                 	  [`${id}`]: currentMovieDetail,
                 	  ...store.state.movieDetail.currentMovie,
                 });
                 store.commit(types.LOADING_FLAG,false);                 
          });
      next();
	},
}