import React from "react";
import { X, ChevronDown, ChevronUp } from "react-feather";
import "./index.css";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isCardExtended: false, voucherModalOpen: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleVoucherClick = this.handleVoucherClick.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isCardExtended: !prevState.isCardExtended
    }));
  }

  handleVoucherClick() {
    this.setState({ voucherModalOpen: true });
  }

  handleOverlayClick() {
    this.setState({ voucherModalOpen: false });
  }

  handleCloseClick() {
    this.setState({ voucherModalOpen: false });
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
    const { isCardExtended, voucherModalOpen } = this.state;

    return (
      <div className="card-container">
        {voucherModalOpen && (
          <React.Fragment>
            <div className="overlay" onClick={this.handleOverlayClick} />
            <div className="voucher-modal">
              <h3>Voucher Required</h3>
              <button onClick={this.handleCloseClick}>
                <X />
              </button>
              <ul>
                <li>
                  To receive food from this food bank you must have a voucher
                </li>
                <li>
                  To get a voucher talk to a health visitor, social worker,
                  advice worker, or police officer
                </li>
                <li>
                  Alternatively contact this food bank to find other local
                  voucher holders
                </li>
                <li>
                  Bring your voucher along with you to the food bank to receive
                  food
                </li>
              </ul>
            </div>
          </React.Fragment>
        )}
        <div className="tag-miles">{miles} miles</div>
        <div className="card-heading-container">
          <h3 className="heading">{title}</h3>
          {open && <span className="tag-open">Open</span>}
        </div>

        <p>{description}</p>
        {voucherRequired && (
          <button className="card-voucher" onClick={this.handleVoucherClick}>
            Voucher required
          </button>
        )}
        {!isCardExtended && <p>{town}</p>}
        <button onClick={this.handleClick} className="card-extend-toggle">
          {isCardExtended ? <ChevronUp /> : <ChevronDown />}
          See more
        </button>

        {isCardExtended && (
          <div className="card-extended-container">
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
