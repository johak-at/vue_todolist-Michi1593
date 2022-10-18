<script setup>

    import { ref, computed } from "vue";
    
const newLocal = 'v-model="filter"';
    const list = ref([]);
    const filter = ref("");
    
    const newItem = ref("");
    
    const filteredList = computed(() => {
      let result = [];
      for(let i = 0; i < list.value.length; i++) {
        if(list.value[i].toLowerCase().includes(filter.value.toLowerCase())) {
          result.push(list.value[i]);
        }
        return list.value.filter((item) => item.includes(filter.value));
    };

    function addIem() {
    
      list.value.push(newItem.value);
    
      newItem.value = "";
    
    }
    
    function Clear() {
    
      list.value = [];
    
    }
    
    </script>
    
    
    
    <template>
    
        <h1>TodoList</h1>
    
        <input type="text" v-model="newItem" />

    
        <button @click="addIem">Add</button>

        <input type="text" placeholder="filter list" />
        
        <button @click="list = []">Clear</button>
    
        <ul>
    
            <li v-for="item in list" :key="item">{{item}}</li>
    
        </ul>
    
    

    
    <input @keyup = "addIem" type="text" v-model="newItem" />
    <button @click="addIem">Add Item</button>
    <ul>
      <li v-for="(item,index) in list" :key="item"> {{index}} - {{item}}
      <button @click="deleteditem(index)">X</button>" </li>
    </ul>

  
  
  
  
  

    </template>
