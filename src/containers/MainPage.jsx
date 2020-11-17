/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import Button from '@material-ui/core/Button'
import {useDispatch, useSelector} from 'react-redux'
import {updateSquaresColor} from '../actions/squares'

import map from 'lodash/map'

const styles = css`
  display: flex;
  flex-direction: column;
  height: ${window.innerHeight}px;
  justify-content: space-between;
  .direction-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .squares {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .square {
    height: 50px;
    width: 50px;
    margin: 10px;
  }
  .button-margin {
    margin: 15px;
  }
`

const buttons = {
  purple: {
    name: 'Purple',
    color: '#a54fff',
  },
  orange: {
    name: 'Orange',
    color: '#ee7f0e',
  },
  yellow: {
    name: 'Yellow',
    color: '#f9ee00',
  },
  green: {
    name: 'Green',
    color: '#789704',
  }
}

export default function MainPage() {
  const dispatch = useDispatch()
  const colors = useSelector(state => state.squares.colors)

  const displaySquares = (colors) => {
    console.log(colors)
    return map(colors, (color, id) => {
      return <div className="square" key={`square-${id}`} css={css`background-color: ${color !== '' ? color : '#ffffff'}`}/>
    })
  }

  return (
    <div css={styles}>
      <div className="direction-row">
        <Button variant="contained" size="large" className="button-margin" css={css`
          background: ${buttons.purple.color};
          color: #000000;
        `} onClick={() => dispatch(updateSquaresColor(buttons.purple.color))}>
          {buttons.purple.name}
        </Button>
        <Button variant="contained" size="large" className="button-margin" css={css`
          background: ${buttons.orange.color};
          color: #000000;
        `} onClick={() => dispatch(updateSquaresColor(buttons.orange.color))}>
          {buttons.orange.name}
        </Button>
      </div>
      <div className="squares">{displaySquares(colors)}</div>
      <div className="direction-row">
        <Button variant="contained" size="large" className="button-margin" css={css`
          background: ${buttons.yellow.color};
          color: #000000;
        `} onClick={() => dispatch(updateSquaresColor(buttons.yellow.color))}>
          {buttons.yellow.name}
        </Button>
        <Button variant="contained" size="large" className="button-margin"css={css`
          background: ${buttons.green.color};
          color: #000000;
        `} onClick={() => dispatch(updateSquaresColor(buttons.green.color))}>
          {buttons.green.name}
        </Button>
      </div>
    </div>
  )
}