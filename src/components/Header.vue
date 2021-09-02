<template>
    <header class="section-header">
        <section class="header-main border-bottom">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-3 col-7">
                        <router-link :to="{name: 'home'}" class="text-decoration-none" data-abc="true">
                            <span class="logo"><i class="fa fa-leaf"></i> RB FARM </span>
                        </router-link>
                    </div>
                    <div class="cart-header">
                                <router-link :to="{name: 'cart'}" class="btn search-button btn-md" style="color: #ffffff;background-color: #6e4c11;border-color: #ffffff;"><i class="fa fa-shopping-cart"></i> {{ cartCount }} | Rp. {{ moneyFormat(cartTotal) }} </router-link>
                            </div>
                    <div class="col-md-5 d-none d-md-block">
                        <form class="search-wrap">
                            <div class="input-group w-100"><input type="text" class="form-control search-form"
                                    style="width:55%;border: 1px solid #ffffff" name="q"
                                    placeholder="cari ?">
                                <div class="input-group-append">
                                    <button class="btn search-button" type="submit"><i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-3 col-4">
                        <div class="d-flex justify-content-end">

                            
                            
                            <!-- <div class="dropdown">
                            <a class="dropdown-toggle" style="text-decoration:none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-basket" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {{ cartCount }} | Rp. {{ moneyFormat(cartTotal) }}
                                </div>
                            </div> -->

                            <div class="account">
                                <router-link :to="{name: 'login'}" v-if="!isLoggedIn" class="btn search-button btn-md d-none d-md-block ml-4"><i class="fa fa-user-circle"></i> ACCOUNT</router-link>
                                <router-link :to="{name: 'dashboard'}" v-else class="btn search-button btn-md d-none d-md-block ml-4"><i class="fa fa-tachometer-alt"></i> DASHBOARD </router-link>      
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="col-md-12 mb-2">
                <Slider /> <!-- component Slider -->
            </div>
    </header><div class="container-fluid mt-3">
        
        
    </div>
</template>

<script>
import Slider from '@/components/Slider' // <-- component Slider
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'


    export default {

        
    components: {
        Slider          // <-- register component slider
        
    },
        setup() {
            

            //store vuex
            const store = useStore()

            //computed
            const isLoggedIn = computed(() => {

                //get getter "isLoggedIn" dari module "auth"
                return store.getters['auth/isLoggedIn']

            })

            //cart count
            const cartCount = computed(() => {

                //get getter "cartCount" dari module "auth"
                return store.getters['cart/cartCount']
            })

            //cart total
            const cartTotal = computed(() => {

                //get getter "cartTotal" dari module "auth"
                return store.getters['cart/cartTotal']
            })

            //mounted
            onMounted(() => {

                //check state token
                const token = store.state.auth.token

                if(!token) {
                    return
                }

                //saat mounted, akan memanggil action "cartCount" di module "cart"
                store.dispatch('cart/cartCount')

                //saat mounted, akan memanggil action "cartTotal" di module "cart"
                store.dispatch('cart/cartTotal')
            })


            return {
                store,
                isLoggedIn,
                cartTotal,
                cartCount
            }

        }

    }
</script>