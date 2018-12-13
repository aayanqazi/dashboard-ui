import React,{Component} from "react";
import Navbar from "./navbar";
import SideBar from "./sidebar";

export default class Main extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <SideBar />
            </div>
        )
    }
}