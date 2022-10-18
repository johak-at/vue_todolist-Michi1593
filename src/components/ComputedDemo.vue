<script setup>
import { ref, computed } from "vue";

let number = ref(5);
let number_quadrat= cumputed(function(){
    return number.value * number.value;
})

</script>



<template>
    <h3> ComputedDemo</h3>
    <p> Zahl: {{number}} </p>
    <p> Quadriert: {{number_quadrat}}</p>
</template>

