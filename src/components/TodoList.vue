<script setup>

    import { ref, computed } from "vue";
    import ToDo from './ToDo.vue'; // ToDo.vue
    
const newLocal = 'v-model="filter"';
    const list = ref([]);
    const filter = ref("");

    
    const newItem = ref("");
    
    const filteredList = computed(() => {
      let result = [];
      for(let i = 0; i < list.value.length; i++) {
        if(list.value[i].name.toLowerCase().includes(filter.value.toLowerCase())) {
          result.push(list.value[i]);
        }
        return list.value.filter((item) => item.includes(filter.value));
    };

    function add() {
    
      list.value.push({
        id: Date.now().toString(16),
        name: newItem.value,
        
      }); 
    
      newItem.value = "";
    
    }
    
    function remove(id) {
      list.value = list.value.filter((item) => item.id !== id);
    }; {
    for(let i = 0; list.value.length; i++){
      if(list.value[i].id === id) {
        list.value.splice(i, 1);
       
      }
    }
  
    
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
      <li v-for="(item) in list" :key="item"> {{item}}
      <button @click="deleteditem(index)">X</button>" </li>
   

  <ToDo> v-for="item in filteredList :name="item.name" :id="item.it" :key="item.id">
        @remove="remove(id)" 
    </ToDo>



</ul>
  
  
  

    </template>
