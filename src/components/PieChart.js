import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PieChart extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.measure !== this.props.measure) {
      this.animateGraph(newProps)
    }
  }
  animateGraph = props => {
    var graph = document.querySelector(`.${props.cn}`),
      text = document.querySelector(`.${props.cnt}`),
      graphRadius = graph.r.baseVal.value,
      strokeLength = 2 * Math.PI * graphRadius,
      offset = strokeLength,
      stopLength = Math.ceil(strokeLength - strokeLength * props.measure),
      textValue = (1 - offset / strokeLength) * -1

    function animate() {
      if (offset > stopLength) {
        offset -= 10
        textValue = Math.floor((1 - offset / strokeLength) * 400)

        graph.style.strokeDashoffset = offset
        text.textContent = Math.floor(textValue / 4)

        requestAnimationFrame(animate)
      }
    }

    function clear() {
      offset = strokeLength
      animate()
    }
    setTimeout(animate, 1000)
  }
  render() {
    return (
      <svg
        className="pieChart"
        width="70"
        height="70"
        viewBox="-10 -10 225 225"
      >
        <filter className="dropShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="1" dy="2" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <g className="pie">
          <circle
            className="inside"
            r="100"
            cy="100"
            cx="100"
            fill="none"
            stroke="#444444"
            strokeWidth="20"
          />
          <circle
            id="graph"
            className={this.props.cn}
            r="100"
            cy="100"
            cx="100"
            fill="none"
            stroke="#ff6b42"
            strokeWidth="20"
          />

          <circle
            className="inside"
            r="90"
            cy="100"
            cx="100"
            fill="none"
            stroke="none"
          />
        </g>
        <g className="innerText" transform="translate(0 13)">
          <text fill="white" className={this.props.cnt} x="50" y="95">
            0
          </text>
          <text fill="white" x="110" y="95">
            %
          </text>
        </g>
      </svg>
    )
  }
}

PieChart.propTypes = {
  cnt: PropTypes.string.isRequired,
  cn: PropTypes.string.isRequired,
  measure: PropTypes.number
}

export default PieChart
