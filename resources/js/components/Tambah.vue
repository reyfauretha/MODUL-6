<template>
    <div>
        <h3>Tambah Data</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="tambah">
                    <div class="form-group">
                        <label>Judul</label>
                        <input type="text" class="form-control" v-model="buku.judul">
                    </div>
                    <div class="form-group">
                        <label>Penulis</label>
                        <input type="text" class="form-control" v-model="buku.penulis">
                    </div>
                    <div class="form-group">
                        <label>Penerbit</label>
                        <input type="text" class="form-control" v-model="buku.penerbit">
                    </div>
                    <div class="form-group">
                        <label>Tahun Terbit</label>
                        <input type="text" class="form-control" v-model="buku.tahun">
                    </div>

                    <button type="submit" class="btn btn-primary">Simpan</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data : function() {
        return {
            buku : {}
        }
    },
    methods : {
        tambah : function() {
            this.axios
                .post('http://localhost:8000/api/buku', this.buku)
                .then(response => (
                    this.$router.push({ name : 'index' })
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
    }
}
</script>

