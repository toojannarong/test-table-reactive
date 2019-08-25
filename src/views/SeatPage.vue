<template>
  <div>
    <span>Selected: {{ selectedSeats() }}</span>
    <table style="width:100%">
      <tr v-for="(row, i) in grid" :key="i">
        <Seat  v-for="(seat, j) in row" :key="j" :grid="grid" :i="i" :j="j"/>
      </tr>
    </table>
  </div>

</template>
<script>
import SeatService from "@/service/Seat.service.js";
import LoadingService from "@/service/Loading.service.js";
import Seat from "@/components/Seat.vue";
import {createNamespacedHelpers} from "vuex";
const { mapGetters } = createNamespacedHelpers('seats');
  export default {
    name: 'SeatPage',
    components: {
      Seat
    },
    data: () => ({
      grid: [[]]
    }),
    async beforeRouteEnter(to, from, next) {
      LoadingService.show();
      const result = await SeatService.getSeatGrid();
      console.log(`[beforeRouteEnter]`);
      next(vm => {
        // // // Empty Grid
        // for (let i = 0; i < result.length; i++) {
        //   vm.$set(vm.grid, i, []);
        // }
        //
        // for (let i = 0; i < result.length; i++) {
        //   for (let j = 0; j < result[i].length; j++) {
        //     vm.$set(vm.grid[i], j, result[i][j]);
        //   }
        // }

        // Object.seal() so that  VueJS cannot add reactivity.
        vm.grid = Object.seal(result);
        console.log(`[beforeRouteEnter] grid`, vm.grid);
        LoadingService.hide();
      });
    },
    computed: {

    },
    methods: {
      toggleSeat(i, j) {
        const seat = this.grid[i][j];
        console.log(`[toggleSeat] (${i}, ${j})`, seat);
        const selected = seat.selected;
        this.$set(seat, "selected", !selected);
      },
      ...mapGetters(['selectedSeats'])
    }
  }

</script>
<style scoped>
  table, th, td {
    border: 1px solid black;
  }

</style>
