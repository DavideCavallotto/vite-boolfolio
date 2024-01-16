<script>
    export default {
        
    }
</script>

<template>
    <header>
        <div class="container">
            <nav>
                <ul class="d-flex gap-2 list-unstyled">

                    <li><router-link class="text-decoration-none text-light" :to="{ name: 'home' }">Home</router-link></li>
                    <li><router-link class="text-decoration-none text-light" :to="{ name: 'projects.index' }">Portfolio</router-link></li>   
                    <li><router-link class="text-decoration-none text-light" :to="{ name: 'contacts' }">Contatti</router-link></li>   

                </ul>
            </nav>
        </div>
    </header>
</template>


<style lang="scss" scoped>

header {
    background-color: rgb(38, 36, 36);
}

</style>