<template>
    <div class="v-header">
         <div class="left-Img"> 
          <img :src="seller.avatar" alt="">
        </div>
        <div class="center-contents">
          <div class="top-title">
            <span class="title-P ">品牌</span>
            <span class="title-name">{{seller.name}}</span>
          </div>
           <div class="center-title">{{seller.description+' / '+ seller.deliveryTime+'分钟送达'}}</div>
           <div class="bottom-title" >
             <div class="bottom-title-N" v-if="Object.prototype.toString.call(seller.supports[0].description) !=='[object Undefined]'">{{seller.supports[0].description }}</div>
              <div class="right-Btn"><button class="btn">{{seller['supports'].length +'个>'}}</button></div>
        </div>
      </div>
      
    </div>
</template>

<script>
import { Panel,XButton } from 'vux';
import { type } from 'os';
export default {
    name:'VHeader',
    number:[],
    data() {
        return {
           number:this.seller.support,
            
        }
    },
     props:{
        seller:{
            type:Object
        }
    },
    components:{
       Panel,
       XButton
       
    }
}
</script>
<style lang="less" scoped>

 @import '~styles/app';
  .v-header{
    display: flex;
    flex-direction: row;
    height: 12.5rem /* 200/16 */;
    line-height:  12.5rem  /* 64/16 */;
    background-color: @headerBgColor;
   
    align-content:flex-start;
  
   
     .left-Img{
       flex: 1;
         padding-left: .9375rem /* 15/16 */; 
         padding-top: 1.25rem /* 20/16 */;
       &>img{
       width:6.25rem /* 100/16 */ ;
       height: 6.25rem /* 100/16 */;
       border-radius: .3125rem /* 5/16 */;
       }
    }
    .center-contents{   
      
      display: flex;
      flex: 5;
      height: 5rem /* 80/16 */;
       margin-left: .625rem /* 10/16 */;
       padding-top: 1.5625rem /* 25/16 */;
        // display: flex;
       flex-direction: column;
       & .top-title{
         
         display: flex;
          height: 2.1875rem /* 35/16 */ ;
          line-height:  2.1875rem /* 35/16 */ ;
          width: 80%;
         & .title-P{
            box-sizing:border-box;
           border-radius: .25rem /* 4/16 */;
           background-color: red;
           font-size: .5rem /* 8/16 */;
           color:white;
           height: 1.5625rem /* 25/16 */;
          line-height: 1.5625rem /* 25/16 */;
          width: 20%;
            word-break:keep-all;             /* 不换行 */
            white-space:nowrap;            /* 不换行 */
             overflow: hidden;
           text-overflow: ellipsis;
         }
         & .title-name{
            display:inline-flex ;
            display:block; 
            height: 1.5625rem;
            line-height: 1.5625rem;
  
            font-size: 1.375rem /* 22/16 */;
           margin-left: .3125rem /* 5/16 */ ;
           color: white;
           width: 80%;
            word-break:keep-all;             /* 不换行 */
            white-space:nowrap;            /* 不换行 */
             overflow: hidden;
           text-overflow: ellipsis;
          
          
           
         
         }
       } 
        & .center-title{
           display: flex;
          
           margin: 8px .3125rem /* 5/16 */;
           height: 20px;
           line-height: 20px;
          color: white;
           width: 80%;
         } 
        
         & .bottom-title{
            display: flex;
             width: 80%;
            margin: .3125rem /* 5/16 */ .3125rem /* 5/16 */;
             justify-content:space-between;
            color: white;
             & .bottom-title-N{
                height: 20px;
               line-height: 20px;
              
              }
            & .right-Btn{
             background-color: rgba(0, 0, 0, 0.2);
             border-radius: 5px;
               height: 20px;
               line-height: 20px;
               text-align: center;
               color: white;
           }   
         } 
    }
   
  }

  
</style>
