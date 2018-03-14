<template>
    <!-- 您可能喜欢 -->
    <div class="may_like" v-if="mayProducts.length > 0">
        <h4 class="tit_like"><span>您可能喜欢</span></h4>
        <div class="search_pros">
            <ul class="may_pros_list clearfix">
                <li class="may_pro_item" v-for="mayItem in mayProducts" :key="mayItem.proSku">
                    <router-link :to="'/detail?proSku=' + mayItem.proSku">
                        <goods-img imgWidth="2.6rem" :imgUrl="mayItem.proImg" :tagUrl="mayItem.tagImage"></goods-img>
                        <div class="pro_txt">
                            <h4>{{mayItem.proTitle}}</h4>
                            <p>{{mayItem.subTitle}}</p>
                            <p class="pro_price">￥{{   mayItem.activityPrice || mayItem.proPrice | toFix2}}</p> 
                        </div>
                    </router-link>
                    <span class="cart_cir" @click.self="addCart(mayItem)"></span>
                </li>
            </ul>
            <div class="no-more">没有更多了哟~</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mayLike',
        data:() => ({
            mayProducts:[]
        }),
        methods:{
            // 获取数据
            getData() {
                this.$api.post('/oteao/productInterestingRecord/query',{
                    'productInterestingRecord.sysId': 1,
                    'productInterestingRecord.device': 'WAP',
                    'pageSize': 10
                },res => {
                    this.mayProducts = res.data || []
                },res => {
                    this.mayProducts = []
                })
            },
           
        },
        created(){
            this.getData();
        }
    }
</script>
<style >
  
</style>

























