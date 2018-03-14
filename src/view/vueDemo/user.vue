<template>
    <div id="user">
        <p>id:{{id}}</p>
        <p>123</p>
        <div>
                人员管理
                <ul>
                    <li><router-link to="/manage/list">人员列表</router-link></li>
                    <li><router-link to="/manage/edit">编辑</router-link></li>
                </ul>
                <ul>
                    <li>
                        <a v-link-active href="/src/view/manage.vue"></a>
                    </li>
                    <li>

                    </li>
                </ul>
                <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id:''
            }
        },
        mounted:function(){
            this.id = this.$route.params.id
        },
        created(){
            console.log(this.$router);
            console.log(this.$route);
        }
    }
</script>



<style scoped>

</style>
