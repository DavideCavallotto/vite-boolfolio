<script>
export default {
    props: {
        myProject: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card-project">
        <div>
            <h1> {{ myProject.title }}</h1>
            <p>{{ myProject.description }}</p>
            <img :src="myProject.image" alt="">
            <p><span class="type-title">Tipo:</span> {{ myProject.type.name }}</p>
            <p><span class="technologies-title">Tecnologie:</span> <span class="technologies" v-for="technology in myProject.technologies">{{ technology.name }}</span></p>
        </div>
    </div>
   
</template>
  
  
<style lang="scss" scoped>
.card-project {
    padding: 20px;
    margin: 20px;
    border-radius: 8px;
    background: #dedede;

    img {
        width: 300px;
    }

    .technologies {
        display: flex;
    }

    .type-title,
    .technologies-title {
        font-size: 18px;
        font-weight: 800;
    }
}
</style>