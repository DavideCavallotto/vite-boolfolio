<script>
import axios from 'axios';


export default {
    components: {
        
    },
    data() {
        return {
            projects: [],
            BASE_URL: 'http://127.0.0.1:8000/api'
            
        }
    },
    methods: {
        fetchProjects() {
            axios.get(`${this.BASE_URL}/projects`)
            .then((res) => {
                console.log(res)
                this.projects = res.data.results
            })
        }
    },
    created() {
        this.fetchProjects()
    }
}
</script>


<template>
    <div>
        <div class="container">
            <h1>
                I Miei Progetti
            </h1>
        </div>

        <div class="container">
            <div>                
                <h1 v-for="project in projects" :key="project.id"> {{ project.title }}</h1>
            </div>
        </div>
    </div>
</template>
  
  
<style lang="scss" scoped>

</style>