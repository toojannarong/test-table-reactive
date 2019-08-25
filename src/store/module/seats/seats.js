import { ADD_SELECTED_SEAT, REMOVE_SELECTED_SEAT} from "@/store/module/seats/mutation-types.js";

const state = {
    seats: []
};
const mutations = {
    [ADD_SELECTED_SEAT](state, seat = {code:""}) {
        console.log('[Store][Seats][ADD_SELECTED_SEAT]');
        const findIndex = state.seats.indexOf(seat);
        if (findIndex === -1) {
            state.seats.push(seat);
        }

    },
    [REMOVE_SELECTED_SEAT](state, seat = {code:""}) {
        console.log('[Store][Seats][REMOVE_SELECTED_SEAT]');
        const findIndex = state.seats.indexOf(seat);
        if (findIndex !== -1) {
            state.seats.splice(findIndex, 1);
        }

    }
};
const getters = {
    selectedSeats(state) {
        if (state.seats.length >0 && state.seats[0].code) {
            return state.seats.map(s => s.code).join();
        }
        return "[]";

    }
};
const actions = {

};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
