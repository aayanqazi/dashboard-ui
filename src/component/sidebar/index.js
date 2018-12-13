import React, { Component } from 'react';
import "./style.css";
import { Col, Row, Button } from "react-bootstrap";
import { MdDashboard } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import Cartoon from "../../assets/cartoon.png";
import { MdAttachMoney } from "react-icons/md";
import { MdSend } from "react-icons/md";

export default class SideBar extends Component {
  render() {
    const listItems = [
      {
        name: 'Dashboard',
        icon: <MdDashboard size={22} color={'#6b7e83'} />
      },
      {
        name: 'Emails',
        icon: <MdDrafts size={22} color={'#6b7e83'} />
      },
      {
        name: 'Tasks',
        icon: <img color={'#6b7e83'} src={require('../../assets/check.svg')} />
      },
      {
        name: 'Calendar',
        icon: <img color={'#6b7e83'} src={require('../../assets/calender.svg')} />
      },
      {
        name: 'Profile',
        icon: <MdAccountCircle size={22} color={'#6b7e83'} />
      },
      {
        name: 'Reports',
        icon: <img color={'#6b7e83'} width={18} src={require('../../assets/chart.svg')} />
      },
      {
        name: 'Fundraising',
        icon: <MdAttachMoney size={19} color={'#6b7e83'} />
      },
      {
        name: 'Marketing',
        icon: <MdSend size={19} color={'#6b7e83'} />
      },
      {
        name: 'Events',
        icon: <img color={'#6b7e83'} src={require('../../assets/flag.svg')} />
      }
    ]
    return (
      <Row className="sidebar">
        <Col lg={2} md={3} sm={3} xs={6} className="maxHeight">
          <Button className="start-button">
            Start Action
          </Button>
          <div className="menu-items">
            {
              listItems.map((val, ind) => {
                return (
                  <div className="items">
                    {val.icon}
                    <p>
                      {val.name}
                    </p>
                  </div>
                )
              })
            }
          </div>
          <div className="sidebar-logo">
            <img src={Cartoon} />
            <div className="content">
              <div className="con">
                <p>TUES 12/8</p>
                <p>32&#176; </p>
              </div>
              <div className="icons-bottom">
                <img src={require('../../assets/calculator.svg')} />
                <img src={require('../../assets/clock.svg')} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}