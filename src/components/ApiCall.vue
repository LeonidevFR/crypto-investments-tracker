<template>
  <div class="greetings">
    <h1 class="flex justify-center bg-emerald-200 text-emerald-700">TEST</h1>
    <div class="text-teal-950 cursor-pointer" @click="getPgData()">Get Postgres Data</div>
    <div class="text-teal-950 cursor-pointer" @click="setPgData()">Set Postgres Data</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      apiData: null
    }
  },
  methods: {
    getPgData() {
      axios
        .get(`http://localhost:3000/api/data`)
        .then((res) => {
          console.log('la data', res.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
    setPgData() {
      axios
        .post(`http://localhost:3000/api/data`, { name: 'le petit chaton mignon' })
        .then((res) => {
          console.log('done', res.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
    saveDataToFile(data) {
      // Convert the data to JSON string
      const jsonData = JSON.stringify(data, null, 2)
      localStorage.setItem('apiData', jsonData)
    }
  }
}
</script>
