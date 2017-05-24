<template>
<div class="movie-grade-wrap">
                 <div v-if="!grade" class="none-grade">暂无评分</div>
         <div v-else>   
               <div class="movie-grade">
    			   <img  class="movie-star" v-for="n in 5" :src="star(n)" >
			   </div>
      <div class="movie-num"> {{ grade.toFixed(1) }} </div>
         </div> 
</div>	
</template>

<script type="text/javascript">
import starActive from '../../assets/starActive.png';
import starGrey from '../../assets/starGrey.png';
 
	export default {
		  data() {
		  	return {
                starActive,
		  	}
		  },
          props:['grade'],
          methods:{
                star(n){
                    return (2*n-1 > this.grade) 
                    ? starGrey
                    : starActive;
                },
          }
	}
</script>

<style scoped>
.movie-grade-wrap{
	text-align: center;
}
.movie-grade{
	display: inline-block;
}
.movie-num{
	display: inline-block;
	font-size: 12px;
	color: #aaa;
}
.movie-star{
	width: 0.15rem;
	height: 0.15rem;
}
.none-grade{
	font-size: 12px;
	color: rgb(155,155,155);
}
</style>