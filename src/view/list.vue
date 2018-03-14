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
  
}
</script>
