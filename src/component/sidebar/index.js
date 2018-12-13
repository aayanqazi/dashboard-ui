import React, { Component } from 'react';
import "./style.css";
import { Col, Row, Button } from "react-bootstrap";
import { MdDashboard } from "react-icons/md";
import { IoMdCalculator } from "react-icons/io";
import Cartoon from "../../assets/cartoon.png";

export default class SideBar extends Component {
  render() {
    const listItems = [
      {
        name: 'Dashboard',
        icon: <MdDashboard size={24} color={'#6b7e83'} />
      },
      {
        name: 'Tasks',
        icon: <IoMdCalculator size={24} color={'#6b7e83'} />
      },
      {
        name: 'Calender',
        icon: <IoMdCalculator size={24} color={'#6b7e83'} />
      },
      {
        name: 'Tasks',
        icon: <IoMdCalculator size={24} color={'#6b7e83'} />
      },
      {
        name: 'Dashboard',
        icon: <MdDashboard size={24} color={'#6b7e83'} />
      },
      {
        name: 'Tasks',
        icon: <IoMdCalculator size={24} color={'#6b7e83'} />
      },
      {
        name: 'Dashboard',
        icon: <MdDashboard size={24} color={'#6b7e83'} />
      },
      {
        name: 'Tasks',
        icon: <IoMdCalculator size={24} color={'#6b7e83'} />
      }
    ]
    return (
      <Row className="sidebar">
        <Col lg={2} md={2} sm={2} className="maxHeight">
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
            <p>TUES 12/8</p>
            <p>32&#176; </p>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}