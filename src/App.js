import React, { Component } from 'react';
import Scrollbars from 'react-custom-scrollbars';

import 'bootstrap/less/bootstrap.less';
import './App.less';

class App extends Component {

  render() {
    return (
      <div className="container qwerty">
        <div className="row">
          <div className="col-xs-3">1</div>
          <div className="col-xs-9">
            <div className="row">
              <div className="col-xs-5">2</div>
              <div className="col-xs-7">
                <Scrollbars ref="messagesScrollbar" style={{ height: 425 }}>
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                  qwe<br />
                </Scrollbars>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
