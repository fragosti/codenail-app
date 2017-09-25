import React from 'react';
import ReactCursorPosition from 'react-cursor-position';

/**
  {
    detectedEnvironment: {
        isMouseDetected: false,
        isTouchDetected: false,
    },
    elementDimensions: {
        width: Number,
        height: Number
    },
    isActive: Boolean,
    isPositionOutside: Boolean,
    position: {
        x: Number,
        y: Number
    }
  }
*/
export default (Component) => (
  class extends React.Component {
    render() {
      return (
        <ReactCursorPosition>
          <Component 
            {...this.props}
          />
        </ReactCursorPosition>
      )
    }
  }
)
