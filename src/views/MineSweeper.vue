<template>
  <div>
    <mine-form />
    <div>{{ timer }}</div>
    <table-component />
    <div>{{ result }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TableComponent from '../components/mineSweeper/TableComponent.vue';
import MineForm from '../components/MindForm.vue';
import { INCREMENT_TIMER } from '../store/mindSweeper';

let interval;

  export default {
    components : {
      TableComponent,
      MineForm,
    },
    data() {
      return {
      };
    },
    computed: {
      ...mapState('mindSweeper', ['timer', 'result', 'halted'])
    },
    methods: {
    },
    watch : {
      halted(value, oldValue) {
        if( value === false) {
          interval = setInterval(()=> {
            this.$store.commit(`mindSweeper/${INCREMENT_TIMER}`);
          }, 1000)
        } else {
          clearInterval(interval);
        }
      }
    } // 남용하면 안 좋은데 setInterval 같은거 할 때 쓰면 유용함. 통제가 가능한 상황에서
  };
</script>

<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>