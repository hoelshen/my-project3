<template id="manage">
    <div>
        人员列表
        <ul class="nav nav-tabs">
            <li :class="currentPath == '/home/news' ? 'active': ''">
                <a v-link="{ path: '/home/news'}">News</a>
            </li>
            <li :class="currentPath == '/home/message' ? 'active': ''">
                <a v-link="{ path: '/home/message'}">Messages</a>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
        beforeRouteLeave (to, from, next) {
            if(用户已经输入信息){
                //出现弹窗提醒保存草稿，或者自动后台为其保存
                
            }else{
                next(true);//用户离开
            }

        }

}


</script>
