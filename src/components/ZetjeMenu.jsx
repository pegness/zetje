import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

function ZetjeMenu() {
  const [collapsed, toggleCollapsed] = useState(true);

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (typeof token !== 'undefined' && token !== null && token !== '') {
      return true;
    }
    return false;
  };

  const loggedIn = isLoggedIn();
  const history = useHistory();

  const logout = () => {
    debugger
    localStorage.setItem('token', '');
    localStorage.setItem('verified', '');
    localStorage.setItem('name', '');
    localStorage.setItem('verifyUrl', '');
    window.location.reload();
  };

  return (
    <div>
      {loggedIn ? (
        <div className="zetje-menu">
          <Button type="primary" onClick={() => toggleCollapsed(collapsed ? false : true)} style={{ marginBottom: 16 }}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="1">
              <span>Mijn account</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>Over Zetje</span>
              <Link to="about-us" />
            </Menu.Item>
            <Menu.Item key="3">
              <span>Privacy verklaring</span>
              <Link to="privacy" />
            </Menu.Item>
            <Menu.Item key="4">
              <span>Gebruiksvoorwaarden</span>
              <Link to="terms" />
            </Menu.Item>
            <Menu.Item key="5">
              <span>FAQ</span>
              <Link to="FAQ" />
            </Menu.Item>
            <Menu.Item key="6">
              <span>Contact</span>
              <Link to="contact" />
            </Menu.Item>
            <Menu.Item key="7">
              <div
                className="logout"
                onClick={logout}
              >
                Uitloggen
              </div>
            </Menu.Item>
          </Menu>
        </div>
      ) : (
        <div className="zetje-menu">
          <Button type="primary" onClick={() => toggleCollapsed(collapsed ? false : true)} style={{ marginBottom: 16 }}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="2">
              <span>Over Zetje</span>
              <Link to="about-us" />
            </Menu.Item>
            <Menu.Item key="3">
              <span>Privacy verklaring</span>
              <Link to="privacy" />
            </Menu.Item>
            <Menu.Item key="4">
              <span>Gebruiksvoorwaarden</span>
              <Link to="terms" />
            </Menu.Item>
            <Menu.Item key="5">
              <span>FAQ</span>
              <Link to="FAQ" />
            </Menu.Item>
            <Menu.Item key="6">
              <span>Contact</span>
              <Link to="contact" />
            </Menu.Item>
            <Menu.Item key="7">
              <span>Inloggen</span>
              <Link to="/" />
            </Menu.Item>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default ZetjeMenu;
