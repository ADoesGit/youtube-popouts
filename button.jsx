const { React, ReactDOM } = require('powercord/webpack');
const { getModule } = require('powercord/webpack');
const Player = require('./player');
module.exports = class Button extends React.Component {
  constructor (props) {
    super(props);
    this.classes = getModule([ 'iconWrapper', 'clickable' ], false);
  }

  render () {
    return (
      <>
        <div className={`yt-button ${this.classes.clickable}`} onClick={(e) => {
          e.preventDefault();
          ReactDOM.render(<Player id={this.props.id}/>, document.createElement('div'));
        }}><div className={`${this.classes.icon}`}><svg class="connectedAccountOpenIcon-2cNbq5" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path><path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path></svg></div></div>
      </>
    );
  }
};
