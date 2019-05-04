<template>
  <div id="app">
     <v-header :seller='seller'></v-header>
    <div class="tab">
        <div class="tab-item">
            <router-link :to='{path:"/goods"}'>商品</router-link>
        </div>
        <div class="tab-item">
             <router-link :to='{path:"/ratings"}'>评价</router-link>
        </div>
        <div class="tab-item">
            <router-link :to='{path:"/seller"}'>商家</router-link>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      seller:{},


    }
  },
  created() {
    this.axios.get('../../static/data.json').then((result)=>{
        console.log(result.data);
        this.seller = result.data.seller;
      })
     
  },
   mounted() {
     
   },
  components:{
    VHeader:()=>import('@/components/home/Header')
  },
  methods: {
  
  },  
}
</script>

<style lang='less' scoped>
@import '~styles/app';
#app {
    
  a{
    text-decoration: none;
  }
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  .tab{
         display: flex; 
         width: 100%;
          height: 2.5rem /* 40/16 */;
          line-height: 2.5rem /* 40/16 */;
          .border-1px(7, 17, 27);
       .tab-item{
          flex: 1;
          text-align: center;
         a{
           display: block;
           font-size: .875rem /* 14/16 */;
           color: rgb(77, 85, 93);
            &.active{
             color: rgb(240, 20, 20); 
           }
         } 
       }
    }
}


</style>
