<script setup>
import { ref, computed } from "vue";

const name = ref("John");

const nameLength = computed(() => {
  return name.value.length;
});
function unicorn()
{
    name= name.value+"unicorn";
}

</script>

<template>
<h1>{{name}}</h1>
<p>{{nameLength}}</p>
<input v-model="name" />
<button @click="unicorn">Add Unicorn</button>
<button @click="makeRed">Make Red</button>


</template>

<style>
    .Portei{
        color: purple;
    }

    .Daniel{
        color: blue;
    }