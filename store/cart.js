export const strict = false
export const state = (test) => ({
  quantity: 0,
})

export const mutations = {
  add(state, value) {
    state.quantity = value
  },
  remove(state) {
    state.categoryRadio = null
  },
  clearCheck(state) {
    state.categories = []
  },
  clearCheckId(state, id) {
    let indexProduct = state.categories.indexOf(id)
    state.categories.splice(indexProduct, 1)
  },
}
