import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        city:'北京'
    },
    //通过调用this.$store.dispatch('change',city)更改数据信息
    // 第一个参数是上下文，第二个参数是传入的值
    actions:{
        change(ctx,city){
            ctx.commit('changCity',city)
        }
    },
    //通过这个方法改变数据(通过 ctx.commit('changCity',city))调用
    mutations:{
    changCity(state,city){
        state.city = city
    }
    }
})