<template>
    <remote src="https://g.alicdn.com/dingding/dinglogin/0.0.2/ddLogin.js">
</template>
<script>
    import remote from '../components/script.vue'
    let baseUrl = 'http://localhost:9092'; 

    import axios from 'axios'
    export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
        type = type.toUpperCase();
        url = baseUrl + url;

        if (type == 'GET') { // search
            try {
                var res = await axios.get(url)
                return res
            } catch (error) {
                console.error(error)
            }
        } else if(type == 'PUT') { // edit
            try {
                await axios.put(url,data.data)
            } catch (error) {
                console.error(error)
            }
        } else if(type == 'POST') { // add
            try {
                await axios.post(url,data.data)
            } catch (error) {
                console.error(error)
            }
        } else if(type == 'DELETE') { // delete
            try {
                await axios.delete(url,data.data)
            } catch (error) {
                console.error(error)
            }
        }
    },
    component:{
        remote
    }



</script>