import React,{Component} from 'react';
import '../Dashboard/dashboard.css'
import Navbar from "./Components/navbar";
import Sidenav from "./Components/sidenav";
import Company from "./Components/company";
import News from "./Components/new";
import AddCompany from "./Components/addCompany";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            page:"company"
        };
        this.redirect=this.redirect.bind(this)

    }
    redirect(data){
        this.setState({page:data} )
    }

    render() {
        return (
            <>

                        <div className="dashContainer ">

                            <div className="dashNav">
                                <Navbar/>
                            </div>
                            <div className="dashSideNav">
                                <Sidenav handle={e => this.redirect(e)}/>
                            </div>
                            { this.state.page === "dashboard" ?
                            <div className="dashBody">
                                <div className="companyNames ">
                                    <Company/>
                                </div>
                                <div className="companyNew">
                                    <News/>
                                </div>

                            </div>
                :
                <AddCompany/>


            }

            </div>
            </>


        )
    }
}

export default Dashboard
