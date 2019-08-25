<template>
    <td @click.prevent="toggleSeat(i, j)" :class="{selectedSeat: selected}">
        {{ grid[i][j].data.code }}
    </td>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    import { ADD_SELECTED_SEAT, REMOVE_SELECTED_SEAT} from "@/store/module/seats/mutation-types.js";
    const { mapMutations } = createNamespacedHelpers('seats');
    export default {
        name: "seat",
        props: {
            grid: Array,
            i: Number,
            j: Number
        },
        data: () => ({
           selected: false
        }),
        methods: {
            toggleSeat() {
                const [i, j] = [this.i, this.j];
                const seat = this.grid[i][j];
                console.log(`[toggleSeat] (${i}, ${j})`, seat);
                const selected = seat.selected;
                const toSelect = !selected;
                this.selected = toSelect;
                this.$set(seat, "selected", toSelect);
                if (toSelect) {
                    this[ADD_SELECTED_SEAT](seat.data);
                } else {
                    this[REMOVE_SELECTED_SEAT](seat.data);
                }
            },
            ...mapMutations([ADD_SELECTED_SEAT, REMOVE_SELECTED_SEAT])
        }
    }
</script>

<style scoped>
    .selectedSeat {
        background-color: #42b983;
    }
</style>
