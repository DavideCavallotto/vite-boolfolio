<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue'


export default {
    components: {
        ProjectCard
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
            <div class="row">
                <ProjectCard v-for="project in projects" :myProject="project" :key="project.id" />

            </div>
        </div>
    </div>
</template>
  
  
<style lang="scss" scoped>

</style>