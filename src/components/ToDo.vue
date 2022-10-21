<script setup>
const props = defineprops() ({
name: string,
id: String,
});
const emit = defineEmits(['delete']);
</script>



<template>
<li>
    {{item.name}}
    <button @click="context.emit("delete", "id")">X</button>
    </li> 
</template>

