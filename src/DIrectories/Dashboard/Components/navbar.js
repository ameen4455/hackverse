import React,{Component} from 'react';
import '../common.css'
import '../styles/navbar.css'
import Icon from '../Logo/Ellipse_7_A0_Ellipse_2_pattern@2x.png'
import {MdNotifications,MdSettings} from "react-icons/md";



class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="NavContainer ">
                        <div className="notificationLogo">
                            <MdSettings
                                size={"22px"}
                                style={{color:"#bbb",marginRight:'30px'}}/>
                            <MdNotifications
                                size={"22px"}
                                style={{color:"#bbb"}}
                            />
                        </div>
                    <img src={Icon} className="iconNav" alt=""/>
                            <div className="JohnDoe">John Doe</div>
                        <div>
                        </div>
                </div>
            </>
        )
    }
}

export default Navbar