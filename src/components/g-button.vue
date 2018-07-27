<template>
        <button v-on:click="say" class="gButton"  :class="{[`icon-${iconPosition}`]: true}"
            @click='x'>
            <gIcon class="icon"  v-if="icon && !loading" icon="awesome" name="icon"></gIcon>
            <gIcon class="loading icon"  v-if="loading " icon="loading" name="loading" ></gIcon>
            <div class="content">
                <slot></slot>
            </div>
        </button> 
</template>


<script>
import  gIcon from '../components/g-icon'


export default {
    name:'',
    // props:["icon", "icon-position"],
    props:{
        "icon":{

        },
        "icon-position":{
            type:String,
            default:'left',
            validator(value){
                console.log(value);
                return  value == 'up' ? false  : true
            }
        },
        "loading":{
            type:Boolean,
            default:false,
        }
        
    },
    data(){
        return{

        }
    },
    methods:{
        say(){
            console.log('hi')
        },
        x(){
            this.$emit('click')
        }

    },
    components:{
        gIcon
    },
    mounted(){
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = '//at.alicdn.com/t/font_765622_5hcdozw03pf.js';
        document.body.appendChild(s);
    }
}
</script>


<style lang="less">
    :root{
        --button-height:32px;
        --font-size:14px;
        --border-radius:4px;
        --color:#333;
        --border-color:#999;
        --border-color-hover:#666;
        --button-active-bg:#eee;
        --button-bg:white;
    }
    .gButton{
        font-size:var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        display: inline-flex;justify-content: center;align-items:center;
        > .icon{
            order: 1;
            margin-right: .3rem;
        }

        > .content{
            order: 2;
        }

        &.icon-right{
            > .icon{
                order: 2;
                margin-left: .3rem
            }
            > .content{
                order: 1;
            }
        }
    }
    .gButton:hover{
        border-color:var(--border-color-hover);

    }
    .gButton:active{
        background-color:var(--button-active-bg)
    }

</style>
