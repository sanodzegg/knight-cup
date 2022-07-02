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
    mutations: {

    },
    actions: {
        getData(context, object) {
            console.log(object);
        }
    },
    getters: {

    },
});