
<template>
    <div>
        <!-- If you need to manually control the data synchronization, you can monitor the code change event like this（如果你需要手动控制数据流，就需要像这样手动监听changed事件） -->
            <quill-editor :options="editorOption"       
                          ref="QuillEditor"
                          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                          @change="onEditorChange($event)"
                          @ready="onEditorReady($event)">
            </quill-editor>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'


export default {
    components:{
        quillEditor
    },
    data(){
       return {
            content: '<h2>I am Example</h2>',
            editorOption: {
            // something config
            }
        }
    },
    computed: {
        editor() {
            return this.$refs.QuillEditor.quill
        }
    },
    methods:{
        onEditorBlur(editor) {
        console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
        console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
        console.log('editor ready!', editor)
        },
        onEditorChange({ editor, html, text }) {
        // console.log('editor change!', editor, html, text)
        // this.content = html
        }
    }  
}
</script>

<style>
    /* .quill-editor {
        height: 350px;
    } */
</style>
