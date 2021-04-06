<template>
    <div>
        <h2>Data Buku</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Judul</th>
                    <th>Penulis</th>
                    <th>Penerbit</th>
                    <th>Tahun Terbit</th>
                    <th>Aksi</th>
                </tr>
                <tr v-for="(b, index) in buku" :key="b.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ b.judul }}</td>
                    <td>{{ b.penulis }}</td>
                    <td>{{ b.penerbit }}</td>
                    <td>{{ b.tahun }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{ name : 'edit', params : { id : b.id } }" class="btn btn-warning">Edit</router-link>
                            <button class="btn btn-danger" @click="hapus(b.id)">Hapus</button>
                        </div>
                    </td>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
export default {
    data : function() {
        return {
            buku : []
        }
    },
    created : function() {
        this.axios
            .get('http://localhost:8000/api/buku/')
            .then(response => {
                this.buku = response.data;
            });
    },
    methods : {
        hapus : function(id) {
            this.axios  
                .delete(`http://localhost:8000/api/buku/${id}`)
                .then(response => {
                    let i = this.buku.map(data => data.id).indexOf(id);
                    this.buku.splice(i, 1)
                });
        }
    }
}
</script>
