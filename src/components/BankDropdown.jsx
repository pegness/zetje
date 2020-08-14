import React from 'react';
import {
  Dropdown,
  Button,
  Icon,
  Menu,
} from 'antd';
import { bankOptions } from '../lib/const';

const BankDropdown = (props) => {
  const {
    bank,
    setBank,
  } = props;

  const menuItems = bankOptions.map(b => (
    <Menu.Item name={b.bic} key={b.bic} bank={b}>
      {b.name}
    </Menu.Item>
  ));

  const menu = (
    <Menu onClick={e => setBank(e.item.props.bank)}>
      {menuItems}
    </Menu>
  );

  return (
    <div className="bank-dropdown">
      <Dropdown
        overlay={menu}
        className="dropdown input"
        trigger={['click']}
      >
        <Button>
          {bank.name || 'Kies je bank'}
          <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  );
};

export default BankDropdown;
