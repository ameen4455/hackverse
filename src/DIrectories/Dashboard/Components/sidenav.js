import React,{Component} from 'react';
import '../common.css'
import '../styles/sidenav.css'
import { MdDashboard,MdAssessment} from "react-icons/md";
import Logo from '../Logo/logo1.png'
import IconButton from "@material-ui/core/IconButton";


class Sidenav extends Component {
    constructor(props) {
        super(props);
        this.state={
            page:"dashboard"
        };
        this.redirect=this.redirect.bind(this)
    }

    redirect(nav){
        this.props.handle(nav)
    }


    render() {
        return (
            <>
                <div className="SidenavContainer container">
                    <div className="logoSidenav">
                        <img className="alrtLogo" src={Logo} alt=""/>
                    </div>
                    <div>
                        <IconButton className="navButton" href={null} onClick={e => this.redirect("dashboard")}>
                            <MdDashboard style={{color:"#f44336"}} size={"20px"}/>
                            <div style={{fontSize:"16px",marginLeft:"10px",marginTop:"2px"}}>Dashboard</div>
                        </IconButton>
                        <IconButton className="navButton" href={null} onClick={e => this.redirect("company")}>
                            <MdAssessment style={{color:"#2196f3"}} size={"20px"}/>
                            <div style={{fontSize:"16px",marginLeft:"10px",marginTop:"2px",marginRight:"12px"}}>Company</div>
                        </IconButton>
                    </div>
                </div>
            </>
        )
    }
}

export default Sidenav