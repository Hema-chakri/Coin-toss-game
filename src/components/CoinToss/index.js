// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headsImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState({
        headsImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevCount => ({
        total: prevCount.total + 1,
      }))
      this.setState(prevCount => ({
        heads: prevCount.heads + 1,
      }))
    } else if (tossResult === 1) {
      this.setState({
        headsImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevCount => ({total: prevCount.total + 1}))
      this.setState(prevCount => ({tails: prevCount.tails + 1}))
    }
  }

  render() {
    const {headsImage, total, heads, tails} = this.state
    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="coin-heading">Coin Toss Game</h1>
          <p className="coin-hort">Heads (or) Tails</p>
          <img className="coin-image" src={headsImage} alt="toss result" />
          <button
            type="button"
            className="coin-button"
            onClick={this.onClickButton}
          >
            Toss coin
          </button>
          <div className="count-display">
            <p className="count-des">Total: {total}</p>
            <p className="count-des">Heads: {heads}</p>
            <p className="count-des">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
