import React, { Component } from 'react';
import "./style.css";
import Logo from "../../assets/logo.png";
import { IoIosStar } from "react-icons/io";
import { MdChatBubble } from "react-icons/md";
import Noti from "../../assets/noti";
import { Col ,Row} from "react-bootstrap";
import Profile from "../../assets/headshot.png";
import { FaAngleDown } from "react-icons/fa";

class NavbarComponent extends Component {
  render() {
    return (
      <header className="navbar">
        <Col md={2} lg={2} sm={2} xs={6} className="logo">
          <img src={Logo} />
        </Col>
        <Col md={6} lg={6} sm={6} xsHidden >
          <Row className="notification-icons">
          <div className="icons">
            <span className="red-circle"></span>
            <MdChatBubble size={19} color={'#6f6f6f'} />
          </div>
          <div className="icons">
            <span className="red-circle"></span>
            <Noti color={'#6f6f6f'} />
          </div>
          <div className="icons">
            <IoIosStar size={19} color={'#6f6f6f'} />
          </div>
          </Row>
          <Row>
          </Row>
        </Col>
        <Col md={4} lg={4} sm={4} xs={6} className="right-pull">
          <div className="search-container">
            <input type='text' placeholder="Search" />
          </div>
          <div className="user-container">
            <div className="picture">
              <img src={Profile} />
            </div>
            <div className="content">
              <p className="content-name">
                Eva Doe
          </p>
              <p className="description">
                Development Director
          </p>
            </div>
            <FaAngleDown size={18} color={'#858585'} style={{ marginTop: '10px', marginLeft: "10px" }} />
          </div>
        </Col>
      </header>
    );
  }
}

export default NavbarComponent;
