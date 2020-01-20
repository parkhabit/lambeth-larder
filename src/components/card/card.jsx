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
    let {
      data: {
        Name,
        Description,
        Monday_Open,
        Monday_Close,
        Tuesday_Open,
        Tuesday_Close,
        Wednesday_Open,
        Wednesday_Close,
        Thursday_Open,
        Thursday_Close,
        Friday_Open,
        Friday_Close,
        Saturday_Open,
        Saturday_Close,
        Sunday_Open,
        Sunday_Close,
        Requires_Voucher,
        Address_Line_1,
        Address_Line_2,
        Address_Line_3,
        Postcode,
        Phone,
        Email,
        Website,
        FoodCentre
      }
    } = this.props;
    const { isCardExtended, voucherModalOpen } = this.state;
    const hours = {
      mon: `${Monday_Open} - ${Monday_Close}`,
      tue: `${Tuesday_Open} - ${Tuesday_Close}`,
      wed: `${Wednesday_Open} - ${Wednesday_Close}`,
      thurs: `${Thursday_Open} - ${Thursday_Close}`,
      fri: `${Friday_Open} - ${Friday_Close}`,
      sat: `${Saturday_Open} - ${Saturday_Close}`,
      sun: `${Sunday_Open} - ${Sunday_Close}`
    };

    if(Monday_Open === 'Closed') {
      hours.mon = 'Closed'
    }
    if(Tuesday_Open === 'Closed') {
      hours.tue = 'Closed'
    }
    if(Wednesday_Open === 'Closed') {
      hours.wed = 'Closed'
    }
    if(Thursday_Open === 'Closed') {
      hours.thurs = 'Closed'
    }
    if(Friday_Open === 'Closed') {
      hours.fri = 'Closed'
    }
    if(Saturday_Open === 'Closed') {
      hours.sat = 'Closed';
    }
    if(Sunday_Open === 'Closed') {
      hours.sun = 'Closed';
    }

    if (Requires_Voucher === 'Yes') {
      Requires_Voucher = true
    } else {
      Requires_Voucher = false
    }

    if(FoodCentre === 'true') {
      FoodCentre = true
    } else {
      FoodCentre = false
    }

    let adviceCentreStyle = '';
    if (!FoodCentre) {
      adviceCentreStyle = 'advice-centre'
    }
    return (
      <div className={`card-container ${adviceCentreStyle}`}>
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
        {/* <div className="tag-miles">{miles} miles</div> */}
        <div className="card-heading-container">
          <h3 className="heading">{Name}</h3>
          {/* {open && <span className="tag-open">Open</span>} */}
        </div>

        <p>{Description}</p>
        {Requires_Voucher && (
          <button className="card-voucher" onClick={this.handleVoucherClick}>
            Voucher required
          </button>
        )}
        {!isCardExtended && <p>{Address_Line_3}</p>}
        <button onClick={this.handleClick} className="card-extend-toggle">
          {isCardExtended ? <ChevronUp /> : <ChevronDown />}
          See more
        </button>

        {isCardExtended && (
          <div className="card-extended-container">
            <div>
              <p>{Address_Line_1}</p>
              <p>{Address_Line_2}</p>
              <p>{Address_Line_3}</p>
              <p>{Postcode}</p>
              <ul>
                <li>{Phone}</li>
                <li>{Email}</li>
                <li>{Website}</li>
              </ul>
            </div>
            <div>
              <h4>Opening hours</h4>
              <ul>
                <li>Mon: {hours.mon}</li>
                <li>Tue: {hours.tue}</li>
                <li>Wed: {hours.wed}</li>
                <li>Thurs: {hours.thurs}</li>
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
