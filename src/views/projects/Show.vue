<script>
import axios from 'axios'

export default {

    data() {
        return {
            project: null,
            BASE_URL: 'http://127.0.0.1:8000/api'
        }
    },
    methods: {
        fetchProject() {
            axios.get(`${this.BASE_URL}/projects/${this.$route.params.slug}`)
                .then(res => {
                    this.project = res.data.project;
                    console.log(this.project)
                }).catch((error) => {
                    console.log('project not found', error.response)

                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' })
                    }
                })
        }
    },

    created() {
        this.fetchProject()
    }

}
</script>

<template>
    <div v-if="project">
        <div class="container">
            <div class="card" style="width: 18rem;">
                <img :src="project.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <p class="card-text" v-for="technology in project.technologies">{{ technology.name }}</p>
                    
                </div>
            </div>          

        </div>

    </div>
</template>


<style lang="scss" scoped>
.technologies {
    display: flex;
}
</style>