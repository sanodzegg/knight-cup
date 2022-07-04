import { createStore } from "vuex";

export default createStore({
    state: {
      count: 0,
      userData: {
        name: String,
        email: String,
        phone: String,
        date_of_birth: String,
        experience_level: String,
        already_participated: Boolean,
        character_id: Number
    },
    },
    actions: {
        getData(context, object) {
            Object.keys(object).forEach(e => {
                this.state.userData[e] = object[e];
            });
        },
        sendData(context, object) {
            console.log(object);
        }
    },
    getters: {
        displayData(state) {
            return state.userData;
        }
    }
});