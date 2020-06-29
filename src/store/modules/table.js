import * as request from '@/api/request';
import Vue from 'vue';

export default {
  namespaced: true,
  actions: {
    async fetchAstronaunts(ctx) {
      const astronauts = await request.getElement()
        .catch((error) => {
          Vue.notify({
            group: 'notification',
            type: 'error',
            title: error.error,
            text: 'An error occurred when loading elements into the table! Try refreshing the page.',
            duration: 10000,
          });
          ctx.commit('UPDATE_SERVER_ERROR', true);
          return [];
        });

      ctx.commit('UPDATE_ASTRONAUTS', astronauts);
    },
  },
  state: {
    serverError: false,
    astronauts: [],
  },
  mutations: {
    UPDATE_SERVER_ERROR(state, isError) {
      state.serverError = isError;
    },

    CREATE_ASTRONAUT(state, astronaut) {
      state.astronauts = [...state.astronauts, astronaut];
    },
    UPDATE_ASTRONAUTS(state, astronauts) {
      state.astronauts = astronauts;
    },
    UPDATE_ASTRONAUT(state, { id, astronaut }) {
      state.astronauts[id] = astronaut;
    },
    DELETE_ASTRONAUT(state, astronautId) {
      state.astronauts.splice(astronautId, 1);
    },
    DELETE_ASTRONAUTS(state, astronautsIds) {
      state.astronauts.filter((_, id) => astronautsIds.indexOf(id) < 0);
    },
  },
  getters: {
  },
};
