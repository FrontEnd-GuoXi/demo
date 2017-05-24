<template>
	<article class="movie-be-on">
<router-link :to="`movieDetail/${(detail.subject ? detail.subject : detail).id}`">
            			<img v-lazy="(detail.subject?detail.subject:detail).images.large" alt="电影图片" class="movie-img">
            			<h2 class="movie-name">{{ (detail.subject ? detail.subject : detail).title }}</h2>
                       <Star :grade="average"></Star>
            		</router-link>
	</article>
</template>

<script type="text/javascript">
import Star from './common/star';

	export default{
             props:['detail'],
             components:{
             	Star
             },
             computed:{
             	average:function(){
             		return (this.detail.subject
             			?this.detail.subject
             			:this.detail).rating.average;
             	}
             },
	}
</script>

<style type="text/css" scoped>
.movie-be-on{
      flex: 1;
      margin-left: 0.375rem
}

.movie-img{
    width: 2rem;
    height: 2.8568rem;
 }

a{
	color: black;
}

.movie-name{
	font-size: 15px;
	font-weight: 600;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 2rem;
}
.movie-star{
	width: 0.096rem;
	height: 0.096rem;
}
.movie-grade-wrap{
	text-align: center;
}
.movie-grade{
	display: inline-block;
}
.movie-num{
	display: inline-block;
	font-size: 13px;
	color: #aaa;
}
</style>