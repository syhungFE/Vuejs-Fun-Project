import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import HomePage from '../home/HomePage.vue';
import RobotsBuilder from '../build/RobotsBuilder.vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        cart:[],
        parts:null
    },
    mutations:{
        addRobotToCart(robot){
            return this.cart.push(robot)
        },
        updateParts(state,parts){
            return state.parts = parts;
        }
    },
    actions:{
        getPart({commit}){
            axios.get('/api/parts')
            .then(result => commit('updateParts',result.data))
            .catch(console.error);
        }
    }
});


