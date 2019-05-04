<template>
    <div>
        
        <!-- <goods></goods> -->
    </div>
</template>

<script>
 
export default {
    name:'Home',
    data() {
        return {
            
        }
    },
    components:{
        Goods:()=> import('@/components/home/goods'),
    }
}
</script>
<style lang="less" scoped>

</style>
