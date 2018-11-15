<template id="manage">
    <div>
        <p>news</p>
        <p id="app-extend"></p>
            <form
            id="app"
            @submit="checkForm"
            action="https://vuejs.org/"
            method="post"
            novalidate="true"
            >

            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="name">Name</label>
                <input
                id="name"
                v-model="name"
                type="text"
                name="name"
                >
            </p>

            <p>
                <label for="email">Email</label>
                <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                >
            </p>

            <p>
                <label for="movie">Favorite Movie</label>
                <select
                id="movie"
                v-model="movie"
                name="movie"
                >
                <option>Star Wars</option>
                <option>Vanilla Sky</option>
                <option>Atomic Blonde</option>
                </select>
            </p>

            <p>
                <input
                type="submit"
                value="Submit"
                >
            </p>
            </form>   
    </div>

</template>



<script>
export default {
    data: function () {
        return {
            extendData: '这是extend扩展的数据',
            errors: [],
            name: null,
            email: null,
            movie: null
        }
    },
    // mounted(){
    // // 创建构造器
    // var Profile = Vue.extend({
    // template: '<p>{{extendData}}</br>实例传入的数据为:{{propsExtend}}</p>',//template对应的标签最外层必须只有一个标签

    // props:['propsExtend']
    // })
    // // 创建 Profile 实例，并挂载到一个元素上。可以通过propsData传参.
    // new Profile({
    //     propsData:{propsExtend:'我是实例传入的数据'}
    //     }).$mount('#app-extend')

    // }
    methods:{
        checkForm: function (e) {
        this.errors = [];

        if (!this.name) {
            this.errors.push("Name required.");
        }
        if (!this.email) {
            this.errors.push('Email required.');
        } else if (!this.validEmail(this.email)) {
            this.errors.push('Valid email required.');
        }

        if (!this.errors.length) {
            return true;
        }

        e.preventDefault();
        },
        validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        }
    }
}
</script>






