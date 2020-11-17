import filter from 'lodash/filter'
import indexOf from 'lodash/indexOf'

export function squaresInitialState() {
  return {
    colors: new Array(10).fill('')
  }
}

export default (state = squaresInitialState(), action) => {
  switch (action.type) {
    case 'UPDATE_SQUARES_COLOR':
      let newColors = [...state.colors]
      const isListFull = filter(newColors, color => color !== '').length === 10;
      if (isListFull) {
        newColors.push(action.color)
        newColors.shift()
      } else {
        newColors[indexOf(newColors, '')] = action.color
      }
      return {
        ...state,
        colors: newColors,
      }
    default:
      return state
  }
}