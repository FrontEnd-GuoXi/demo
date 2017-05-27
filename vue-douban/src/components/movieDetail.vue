<template>
    <div>
    	<main class="movie_detail">
        <div class="detail_mixture">
            <h1 class="detail_title">{{ current_movie.title }}</h1>
        	<div class="detail_grade">
                 <div class="detail_star">
                 	<img v-for="n in 5" :src="star(n)">
                 </div>
                    <span class="detail_num">{{ current_movie.rating.average }}</span>
        	        <span class="detail_evaluate_num">{{ current_movie.ratings_count }}人评价</span>
        	     <div class="detail_type">{{ info }}</div>
        	</div>
        	<div class="detail_img"><img v-bind:src="current_movie.images.small" alt="未显示"></div>
        </div>
         <section class="story_introduce">
         	<h2 class="story_title">《{{ current_movie.title }}》的剧情简介</h2>
         	<p class="story_detail">
         	{{ current_movie.summary }}
            </p>
         </section> 
         <section class="more_movie">
         	 <h2 class="moreM_title">查看更多豆瓣高分电影电视剧</h2>
         	 <div class="movie_tag_wrap">
	           <a href="#" class="movie_tag" v-for="item in current_movie.genres">{{ item }}</a>
         	 </div>
         </section>
         <section class="figure_introduce">
         	<h2 class="movie_star">影人</h2>
         	<div class="star_wrap_all">
	               <div class="star_wrap_single" v-for="item in person_info"> 
	                  <img :src="item.avatars.small" alt="none" class="star_pic">
	                  <div class="star_name">{{ item.name }}</div>
	                  <div class="job_title" v-if="item.isDirectors">导演</div>
	               </div>
		    </div>
         </section>
   </main>
         <article class="discuss_all">
         	<h2 class="discuss_title">
         	   {{ current_movie.title }}的短评（{{ current_movie.comments_count}}）
         	</h2>
         	<section class="discuss_person">
         		<div class="user_img_wrap">
         		<img src="../assets/doubanIcon.png" class="headPortrait">
         		</div> 
         		<div class="discuss_detail">
         			<div class="user_grade">
         				<span>小明</span>
         				<div class="user_star_wrap">
         					<img src="../assets/starActive.png" class="user_star">
         					<img src="../assets/starActive.png" class="user_star">
         					<img src="../assets/starActive.png" class="user_star">
         					<img src="../assets/starActive.png" class="user_star">
         					<img src="../assets/starActive.png" class="user_star">
         				</div>
         			</div>
         			<div class="discuss_time">2017-5-21</div>
         			<p class="discuss_content">好看生生世世水水是是是撒泼都是啊为了看网上</p>
         			<div class="like_num_wrap">
         				<img src="../assets/starActive.png" class="like_img">
         				<span class="like_num">1111</span>
         			</div>
         		</div>
         	</section>
         </article>
    </div>
</template>

<script>
import starActive from '../assets/starActive.png';
import starGrey from '../assets/starGrey.png';
import {mapState} from 'vuex';

export default{
	  name:'detail',
      data() {
          return {}
        },
     computed:{
         info(){
             const { directors, countries, year, genres, casts } = this.current_movie;
             const arr = [];
             Array.prototype.push.call(
             	arr,
             	genres.reduce( (pre,cur) => pre/cur ),
             	directors.map( (val) => `${val.name}(导演)` ).join('/'),
             	casts.map( (val) => val.name ).join('/'),
             	`${year}年( ${countries.reduce( (pre,cur) => pre/cur)} )上映`
             	);
             return arr.join('/');
        },
         person_info(){
              const { directors, casts} = this.current_movie;
              directors.forEach( (val) => {
              	   val.isDirectors = true;
              });
              casts.forEach( (val) => {
              	   val.isDirectors = false;
              });
              return Array.prototype.concat(directors,casts);

        },
     	...mapState({
     		current_movie(state){
     			return state.movieDetail.currentMovie[this.$route.params.pageId]
     		}, 

     	}),    	
     },
     methods:{
                star(n){
                    return (2*n-1 > this.current_movie.rating.average) 
                    ? starGrey
                    : starActive;
                },

          },     

	}
</script>

<style scoped>
.movie_detail{
	font-size: 13px;
	padding: 0 0.36rem;
	color: rgba(16, 16, 16, 0.88);
}
.detail_mixture{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
}
.detail_title{
	 font-size: 22px;
	 width: 100%;
	 margin:0.3rem 0 0.1rem 0; 
}
.detail_grade{
	flex: 2;
}
.detail_star{
	 display: inline-block;
}
.detail_star > img{
	 width: 0.26rem;
	 height: 0.26rem;
}
.detail_num{
	 font-weight: 600;
	 padding-right: 0.05rem;
}
.detail_evaluate_num{
	 color: #a09797;
	 font-weight: 600;
}
.detail_type{
	padding-top:0.1rem;
}
.detail_img{
	 flex: 1;
     text-align: right;
}
.detail_img > img{
	width: 2rem;
}

.story_introduce, more_movie{
	padding: 0.2rem 0;
}
.story_title, .moreM_title, .movie_star, .figure_introduce{
	color: #a09797;
	font-weight: 600;
	font-size: 14px;
}
.story_detail{
	 word-break: break-all;
	 line-height: 22px;
}
.movie_tag_wrap{
    padding: 0.1rem 0;
}
.movie_tag{
	color: black;
	text-decoration: none;
	display: inline-block;
	background-color: rgba(197, 197, 197, 0.79);
	border-radius: 0.28rem;
	padding: 0 0.24rem;
	margin-bottom: 0.24rem;
	margin-right: 0.24rem;
	font-weight: 700;
}
.star_wrap_all{
	display: flex;
	overflow-y: scroll;
}
.star_wrap_all::-webkit-scrollbar{
	display: none;
}
.star_wrap_single{
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 0.39rem;
}
.star_pic{
    width: 2rem;
    height: 2.8568rem;
}
.star_name{
	text-align: center;
	color: black;
	padding-bottom: 0.1rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.job_title{
	text-align: center;
	color: gray;
	font-size: 12px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.discuss_all{
	font-size: 14px;
	padding:0.4rem 0.36rem 0.2rem 0.36rem; 
}
.discuss_title{
	color: #a09797;
	font-weight: 600;
	font-size: 14px;
	margin: 0.4rem 0;	
}
.discuss_person{
	display: flex;
    padding-bottom: 0.4rem;
}
.user_img_wrap{
 margin-right: .2rem;
}
.headPortrait{
    width: .72rem;
    height: .72rem;
    border-radius: 50%;
}

.user_grade{
	padding-bottom: 0.2rem;
}
.user_star_wrap{
	display: inline-block;
	padding-left: 0.2rem;
}
.user_star{
    width:0.26rem;
    height: 0.26rem;
}
.discuss_time{
	color: gray;
	font-size: 12px;
}
.discuss_content{
	word-break: break-all;
	margin: 0;
	padding: 0.2rem 0 0.2rem 0;
}
.like_num_wrap{
	padding-bottom: 0.2rem;
}
.like_img{
	width: 0.4rem;
	height:0.4rem; 
	vertical-align: middle;
}
.like_num{
    padding-left: 0.2rem;
    vertical-align: middle;
    font-size: 13px;	
}
</style>