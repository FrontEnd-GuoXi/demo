<template>
		<header class="home-head">
				<h1 class="home-title"><a href="javascript:void(0);">豆瓣</a></h1>
				<nav class="home-list">
					<router-link to="/" class="home-movie"> 电影</router-link>
					<router-link to="/" class="home-books">图书</router-link>
					<a class="home-broadcast" href="javascript:void(0);">广播</a>
					<a class="home-group" href="javascript:void(0);">小组</a>
					<a class="home-img" href="javascript:void(0);"><img src="../assets/search.png" class="home-search"></a>
				</nav>
			</header>
</template>

<script type="text/javascript">
	export default{

	}
</script>

<style scoped>
.home-head{
   position: fixed;
   top: 0;
   width: 100%;
   display: flex;
   border-bottom: 1px solid #f3f3f3;
   background: white;
   padding: 0.2rem 0.36rem;
}

.home-title{
	font-size: 0.5rem;
	color: #00b600;
	flex: 1;
	vertical-align: bottom;
	line-height: 100%;
}
a{
	color: inherit;
}
.home-list{
	 list-style: none;
	 flex: 2;
	 display: flex;
	 align-items: flex-end;
	 justify-content: center;
}
.home-list > a{
	flex: 1;
	font-weight: 600;
	text-align: right;
	cursor: pointer;
	text-decoration: none;
}
.home-movie{
	color: #39f;
}
.home-books{
	color:rgb(159, 120, 96);
}
.home-broadcast{
	color: rgb(228, 168, 19);
}
.home-group{
     color: rgb(42, 184, 204);
}
.home-search{
	height: 15px;
	width:  22px;
	vertical-align: bottom;
}	
</style>