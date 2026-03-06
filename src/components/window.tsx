import * as React from 'react';
import "./window.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class Window extends React.Component<{ title?: string, content?: React.ReactNode }> {
  state = {
    windowDisplay: ""
  }

  closeWindow = () => {
    this.setState({ windowDisplay: "d-none" })
  }

  render() {
    const { title, content } = this.props;
    const { windowDisplay } = this.state

    return (
      <div className={`window bg-white rounded-2 text-black position-relative h-25 ${windowDisplay}`}>
        <div className="window-header">
          <div className="window-title position-absolute top-0 start-0">
            <h6 className="text-white">{title}</h6>
          </div>
          <div className="window-buttons d-flex position-absolute top-0 end-0 gap-1">
            <div className="window-button border border-white d-flex rounded-1 bg-primary" onClick={this.closeWindow}>
              <a className="minimize text-decoration-none text-white position-absolute fw-bold">-</a>
            </div>
            <div className="window-button border border-white d-flex rounded-1 bg-primary justify-content-center align-items-center">
              <a className="fullscreen text-decoration-none text-white text-center fw-bold"><i className="bi bi-window-fullscreen"></i></a>
            </div>
            <div className="window-button exit-button border border-white d-flex rounded-1 justify-content-center align-items-center bg-danger" onClick={this.closeWindow}>
              <a className="exit text-decoration-none text-white text-center fw-bold"><i className="bi bi-x"></i></a>
            </div>
          </div>
        </div>

        {content}
      </div>
    );
  }
}

export default Window;