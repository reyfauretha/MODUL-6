<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <router-link class="nav-item nav-link" to="/">Buku</router-link>
                <router-link class="nav-item nav-link" to="/tambah">Tambah Data</router-link>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>
