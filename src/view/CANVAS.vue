<template>
        <div>
            <div v-html="cat"></div>
            <div>
                <canvas id='canvas' 
                :width="width" :height="height"
                @mousedown="canvasDown($event)"
                @mousemove="canvasMove($event)"
                @mouseup="canvasUp($event)"
                style="border:1px solid #ccc;margin:20px auto;display: block;"></canvas>  
            </div>       
        </div>
</template>
<script>
export default {
    name:"canvas",
    data(){
        return{
           cat: "<img src='https://thenewwork.oss-cn-shanghai.aliyuncs.com/vankely_admin_web/GdhJbRfTyRDZ/%E7%8C%AB1.jpeg'/>",
            arry:[],
            width: 400,
            height: 400,
            beginRec: {
                x: '',
                y: ''
            },
            endRec: {
                x: '',
                y: ''
            },
            img: new Image(),
            isMove: false,
            scale: ""
        }
    },
    methods:{
        creatImage(){
            const that = this;
            this.smImage = "https://thenewwork.oss-cn-shanghai.aliyuncs.com/vankely_admin_web/GdhJbRfTyRDZ/%E7%8C%AB1.jpeg"
            this.c = document.getElementById('canvas');
            this.img.src = this.smImage;
            console.log('width,height', this.img.width, this.img.height);
            this.scale = (this.img.width / this.width) // 原始图片的宽度与canvas画布的宽度比
            console.log("scale", this.scale);
            this.ctx = this.c.getContext('2d');
            that.ctx.drawImage(that.img, 0, 0, this.width, this.height);
            // that.ctx.drawImage(that.img, 0, 0, this.img.width, this.img.height, 0, 0, this.width, this.height);
        },
        getbeginRecLocation(e){
            const { ctx, beginRec, endRec } = this;
            const box=this.c.getBoundingClientRect();
            if(this.isMove){
                beginRec.x = (e.clientX-box.left*(canvas.width/box.width)).toFixed(0);
                beginRec.y = (e.clientY-box.top*(canvas.height/box.height)).toFixed(0);
            } else {
                endRec.x = (e.clientX-box.left*(canvas.width/box.width)).toFixed(0);
                endRec.y = (e.clientY-box.top*(canvas.height/box.height)).toFixed(0);
            }
        },
        clearImage(){
            const { ctx, beginRec, arry } = this;
            ctx.clearRect(0,0,this.width,this.height);
            this.ctx.drawImage(this.img, 0, 0, this.width, this.height)
        },
        canvasDown(e){
            this.isMove = true;
            const { ctx, beginRec } = this;
            this.getbeginRecLocation(e);
            //重置所有
            this.clearImage();
            this.arry = [];
            console.log("左上角", beginRec.x,beginRec.y);
        },
        canvasMove(e){
            if(!this.isMove){
                return
            }
            const { ctx, beginRec, arry, endRec } = this;
            const box=this.c.getBoundingClientRect();
            const canvasX = e.clientX-box.left*(canvas.width/box.width);
            const canvasY = e.clientY-box.top*(canvas.height/box.height);
            endRec.x = canvasX.toFixed(0.00);
            endRec.y = canvasY.toFixed(0.00);
            const width = endRec.x - beginRec.x;
            const height = endRec.y - beginRec.y;
            this.clearImage();
            ctx.strokeRect(beginRec.x, beginRec.y, width, height);
        },
        canvasUp(e){
            const { ctx, beginRec, arry,endRec } = this;
            const width = endRec.x - beginRec.x;
            const height = endRec.y - beginRec.y;
            this.clearImage();
            ctx.strokeRect(beginRec.x, beginRec.y, width, height);
            arry.push({
                x: (beginRec.x*this.scale).toFixed(0),
                y: (beginRec.y* this.scale).toFixed(0)
            },{
                x: (endRec.x*this.scale).toFixed(0),
                y: (endRec.y*this.scale).toFixed(0)
            })
            this.isMove = false;

            console.log("右上角", endRec.x,endRec.y);
            console.log('数组',arry);
        }
    },
    mounted(){
        this.creatImage();
    },
    watch:{
    }
}
</script>

