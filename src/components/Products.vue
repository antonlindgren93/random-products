<template>
    <div class="container">
        <carousel wrapAround="true" autoplay="5000" class="carousel">
        <slide v-for="(item, index) in productList" :key="index" >
            <div class="items">
                <img class="image" :src="item.images[0]" />
                <p>{{item.id}}. {{ item.title }} ({{ item.category }})</p>
                <table class="table">
                    <tr>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                    <tr>
                        <td>{{item.brand}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.rating}}</td>
                    </tr>
  
                </table>
            </div>
        </slide>

        <template>
        <navigation />
        <pagination />
        </template>
        
        </carousel>

            <ol class="list">
                <li v-for="obj in productList" :key="obj.id">
                    {{ obj.description }}
                </li>
            </ol>
    </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    },
    data(){
        return{
            productList: [],
        }
    },
    async mounted() {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data.products);
        this.productList = data.products;
    }
}
</script>

<style scoped>
.container {
    padding-top: 30px;
}
.items {
    display: flex;
    flex-direction: column;
}
.image {
    width: 340px;
    height: 340px;
}
.table {
    display: grid;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    padding-top: 30px;
}


.table td, .table th {
  padding-top: 15px;
  width: 30px;
}

.table tr:nth-child(even){
    background-color: #fff;
    display: flex;
  justify-content: space-around;
}

.table th {
  padding-top: 20px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f2f2f2;
  padding: 20px;
}

.list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
</style>