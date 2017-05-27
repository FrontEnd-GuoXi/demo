<template>
   <div class="main">
	     <div class="movie-row" v-for="item in homeData" :key="item.title">
              <h1 class="movie-title">
              <span class="movie-text">{{ item.title}}</span>
              <a href="#" class="movie-more">更多</a>
              </h1>
          <section class="movie-all">
              <movieItems v-for="item in item.subjects.slice(0, 8)" :detail="item" :key="item.id">
              </movieItems>
          </section>     
     </div>
</div>
</template>

<script type="text/javascript">
import movieItems from './movieItems';
import {mapState} from 'vuex';
	export default{
         computed:mapState({
         	homeData(state){
                return state.home.homeData;
         	}
         }),
         components:{
         	movieItems,
         }
	}
</script>

<style type="text/css">
.main{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.movie-row{
  flex: 1;
  padding-bottom: 0.15rem;
}
.movie-title{
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 0.1rem;
    padding: 0.2rem 0.36rem
}
.movie-more{
     font-size: 15px;
     color: #42bd56;
}
.movie-all{
     flex: 1;
     display:flex;
     flex-direction: row;
     flex-wrap: nowrap;
     overflow-y: auto;
     -webkit-overflow-scrolling: touch;
}
.movie-all::-webkit-scrollbar{
  display: none;
}

</style>