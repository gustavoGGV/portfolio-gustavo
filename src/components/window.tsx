import * as React from 'react';
import "./window.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class Window extends React.Component<{ title?: string, content?: React.ReactNode }> {
  render() {
    const { title, content } = this.props;

    return (
      <div className="window bg-white rounded-2 text-black position-relative h-25">
        <div className="window-header">
          <div className="window-title position-absolute top-0 start-0">
            <h6 className="text-white">{title}</h6>
          </div>
          <div className="window-buttons d-flex position-absolute top-0 end-0">
            <div className="window-button border border-white d-flex">
              <a className="minimize text-decoration-none text-white position-absolute fw-bold">-</a>
            </div>
            <div className="window-button border border-white d-flex justify-content-center align-items-center">
              <a className="fullscreen text-decoration-none text-white text-center fw-bold"><i className="bi bi-window-fullscreen"></i></a>
            </div>
            <div className="window-button border border-white d-flex justify-content-center align-items-center bg-danger">
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