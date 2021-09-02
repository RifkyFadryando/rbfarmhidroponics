<template>

    <div class="card border-0 shadow rounded">
        <div class="container-fluid mb-4 mt-4" align="center">
             <h5 class="font-weight-bold"><i class="fa fa-shopping-bag"></i> KATEGORI</h5>
            <div class="row">
            <div v-for="category in categories" :key="category.id" class="col-md-4 col-4 mb-3">
                <router-link :to="{name: 'detail_category', params:{slug: category.slug}}">
                    <div class="card h-100 border-0 rounded shadow">
                        <div class="card-body text-center">
                            <img :src="category.image" style="width: 100px;">
                            <hr>
                            <label class="font-weight-bold">{{ category.name }}</label>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <router-link :to="{name: 'categories'}" class="list-group-item text-center active shadow-sm font-weight-bold text-decoration-none">SEMUA KATEGORI</router-link>
        </div>
    </div>
</template>

    

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { axios } from 'axios';

    export default {

        setup() {
            
            //store vuex
            const store = useStore()

            //onMounted akan menjalankan action getCategories di module category, sebelum computed di atas dijalankan
            onMounted(() => {
                axios
                store.dispatch('category/getCategories')
            })

            //computed properti digunakan untuk get data categories dari state di module category 
            const categories = computed(() => {
                return store.state.category.categories
            })

            return {
                categories
            }

        }

    }
</script>