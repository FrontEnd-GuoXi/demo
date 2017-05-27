<template>
<div class="home">
  <pageHeader></pageHeader>
  <router-view></router-view>
  <pageFooter></pageFooter>
</div>
</template>

<script>
import pageHeader from './pageHeader';
import pageFooter from './pageFooter';

export default {
  name: 'Home',
  components:{
     pageHeader,
     pageFooter
  },
  data(){
    return {};
  }
};

</script>

<style>
#app{
  margin: 0 auto;
  width: 100%;
}
.home{
  font-size: 14px;
  padding-top: 1rem;
}

</style>
