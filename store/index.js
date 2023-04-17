import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import {
	modal
} from './modules/modal.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		modal
	},
	getters
})

export default store;