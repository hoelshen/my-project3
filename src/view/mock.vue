<template>
  
</template>
<script>
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
    }



</script>