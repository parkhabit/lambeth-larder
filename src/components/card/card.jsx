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
          {miles} miles
        </div>
        <div className='card-heading-container'>
        <h3 className="heading">{title}</h3>
        {open && <span className="tag-open">Open</span>}
        </div>

        <p>{description}</p>
        {voucherRequired && <button className='card-voucher'>Voucher required</button>}
        {!isCardExtended && <p>{town}</p>}
        <button onClick={this.handleClick} className='card-extend-toggle'>See more</button>

        {isCardExtended && (
          <div className='card-extended-container'>
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
          </div>
        )}
      </div>
    );
  }
}

export default Card;
