import store from 'store'

const modal = {
	state: {
		visible: false,
		success: null
	},
	mutations: {
		SUCCESS(state, type) {
			let obj = {
				cancel: false,
				confirm: false
			}
			type == "confirm" ? obj.confirm = true : obj.cancel = true
			state.success(obj)
		},
		SHOW_MODAL(state, options) {
			state = Object.assign(state, options)
			state.visible = true
		},
		HIDE_MODAL(state) {
			state.visible = false
		}
	},
	actions: {
		Success({
			commit
		}, type) {
			commit('SUCCESS', type)
		},
		ShowMoadl({
			commit
		}, options) {
			commit('SHOW_MODAL', options)
		},
		HideModal({
			commit
		}, payload) {
			commit('HIDE_MODAL')
		}
	},
}

const showModal = options => {
	if (typeof options === 'object') {
		store.dispatch('ShowMoadl', options)
	} else {
		throw new Error(`配置项必须为对象,传入为:${typeof options}`)
	}
}

export {
	modal,
	showModal
};