import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class PopupForm extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="PopupForm">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://littlebitz.typeform.com/to/sRVgpU"
          hideHeaders
          hideFooter
          buttonText="Go!"
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <button className="btn" onClick={this.openForm} style={{ cursor: 'pointer' }}>
          Feedback?
        </button>
      </div>
    );
  }
}

export default PopupForm;
