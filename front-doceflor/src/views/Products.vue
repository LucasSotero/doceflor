<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
    >
      <template v-slot:item.name="props">
        <v-edit-dialog
          :return-value.sync="props.item.name"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        > {{ props.item.name }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.name"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.iron="props">
        <v-edit-dialog
          :return-value.sync="props.item.iron"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.iron }}</div>
          <template v-slot:input>
            <div class="mt-4 title">Update Iron</div>
          </template>
          <template v-slot:input>
            <v-text-field
              v-model="props.item.iron"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>

    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}
      <v-btn text @click="snack = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data () {
      return {
        snack: false,
        snackColor: '',
        snackText: '',
        max25chars: v => v.length <= 25 || 'Input too long!',
        pagination: {},
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
      }
    },
    mounted () {
        this.$store.dispatch('listProducts')
    },
    methods: {
      save () {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Data saved'
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Canceled'
      },
      open () {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialog opened'
      },
      close () {
        console.log('Dialog closed')
      },
    },
    computed: mapState(['products'])
  }
</script>