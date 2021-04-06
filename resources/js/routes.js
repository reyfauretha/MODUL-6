import Index from './components/Index.vue'
import Tambah from './components/Tambah.vue'
import Edit from './components/Edit.vue'

export const routes = [
    {
        name : 'index',
        path : '/',
        component : Index
    },
    {
        name : 'tambah',
        path : '/tambah',
        component : Tambah
    },
    {
        name : 'edit',
        path : '/edit/:id',
        component : Edit
    }
]
