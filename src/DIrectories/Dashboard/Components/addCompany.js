import React,{Component} from 'react';
import '../styles/addCompany.css'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import TabBody from "./tabBody";
import {MdSearch} from "react-icons/md";
import CustomizedTabs from "./tabNav";
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#444',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#444',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#444',
                borderRadius:"1px"
            },
            '&:hover fieldset': {
                borderColor: '#444',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#777',
            },
        },
    },
})(TextField);

const styles = {
    'input-label': {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        color: 'red'
    },

    'input': {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: 'blue'
        }
    }
};



class AddCompany extends Component{
    constructor(props){
        super(props);
        this.state={}

    }
    render(){
        return(
            <>
                <div className="addContainer containerCurved">
                    <div className="addSearch">

                    <div>
                        <form  noValidate autoComplete="off">
                            <CssTextField
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <MdSearch />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        color: "#aaa"
                                    }
                                }}
                                className="compSearch"
                                InputLabelProps={{
                                    style: {
                                        fontSize:"15px",
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        color: '#aaa'
                                    } }}
                                label="Portfolio Search"
                                variant="outlined"
                                id="custom-css-outlined-input"
                            />
                        </form>
                    </div>

                    </div>


                    <div className="addCardNav">
                        <CustomizedTabs/>
                    </div>
                        <TabBody/>
                </div>
                </>
        )
    }

}
export default AddCompany;

