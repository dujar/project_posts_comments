import React from 'react';

import styled from 'styled-components';

const Backdrop = styled.div`
  position: absolute;
  background-color: red;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const Modal = styled.div`
  position: absolute;
  left: calc(50% - 100px);
  top: calc(50% - 100px);
  max-height: 300px;
  max-width: 300px;
  background: whitesmoke;
  text-align: center;
  z-index: 11;
  border-radius: 25px;
`;

const withModal = (props) => Component => {
  class EnhancedComponent extends React.Component {
    state = {
      drop: false
    };
    render() {
      return (
        <div>
          <Backdrop
            onClick={this.props.handleBackDropClick}
          />
          <Modal>
            <Component drop={this.state.drop} {...props} />
          </Modal>
        </div>
      );
    }
  }
  return EnhancedComponent;
};
export default withModal;
