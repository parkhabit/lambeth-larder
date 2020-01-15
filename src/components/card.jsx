import React from 'react';


function Card(props) {
    const {data: {title, description, miles, open, hours, voucherRequired, town, address, phone, email, website}} = props;
  return (
    <div>
        {title}
        {description}
        {miles}
        {open}
        {hours.mon}
        {hours.tue}
        {hours.wed}
        {voucherRequired}
        {town}
        {address}
        {phone}
        {email}
        {website}
    </div>
  );
}

export default Card;