<template>
   <v-content>
      <v-overlay :value="loading">
         <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <v-container fluid fill-height>
         <v-layout align-center justify-center>
            <v-flex xs12 sm8 md8>
               <template>
                  <v-card>
                     <v-card-title>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                           hide-details></v-text-field>
                     </v-card-title>
                     <v-data-table :headers="headers" :items="items" :search="search"></v-data-table>
                  </v-card>
               </template>
            </v-flex>
         </v-layout>
      </v-container>
   </v-content>
</template>

<script>
   module.exports = {

      data() {
         return {
            loading: false,
            search:'',
            headers: [
            { text: 'Nama Product', value: 'name' },
            { text: 'Stok', value: 'init_quantity' },
            { text: 'Harga Jual', value: 'sell_price_per_unit' },
            ],
            items:[]


         }
      },

      methods: {
        
        showAll() {
        var start_index = this.indexAwal
        var data_kirim = {
        }
        var config = {
          //params:data_kirim,
          headers: {
            'Authorization': 'Bearer 853eabf1da904c7f991c01c2287659d3'
          }
        }
        
        this.loading = true
        var _this=this

         axios.get(base_url + "products",config).then(function (response) {

              _this.items = response.data.products
              console.log(response.data.data) 
          })

        }  
      },
      mounted() {
         var _this=this
         _this.showAll()
      },
      beforeDestroy() {}

   }
</script>