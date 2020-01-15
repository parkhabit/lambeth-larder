import React from "react";
import './index.css'

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isCardExtended: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isCardExtended: !prevState.isCardExtended
    }))
  }

  render() {
    const {
      data: {
        title,
        description,
        miles,
        open,
        hours,
        voucherRequired,
        town,
        address,
        phone,
        email,
        website
      }
    } = this.props;
    const { isCardExtended } = this.state;

    return (
      <div className='card-container'>
        <div className="tag-miles">
          <p>{miles}</p>
        </div>
        <h3 className="heading">{title}</h3>
        {open && <p className="tag-open">Open</p>}
        <p>{description}</p>
        {voucherRequired && <button>Voucher required</button>}
        {!isCardExtended && <p>{town}</p>}
        <button onClick={this.handleClick}>See more</button>

        {isCardExtended && (
          <React.Fragment>
            <div>
              <p>{address}</p>
              <ul>
                <li>{phone}</li>
                <li>{email}</li>
                <li>{website}</li>
              </ul>
            </div>
            <div>
              <h4>Opening hours</h4>
              <ul>
                <li>Mon: {hours.mon}</li>
                <li>Tue: {hours.tue}</li>
                <li>Wed: {hours.wed}</li>
                <li>Thurs: {hours.thur}</li>
                <li>Fri: {hours.fri}</li>
                <li>Sat: {hours.sat}</li>
                <li>Sun: {hours.sun}</li>
              </ul>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Card;
