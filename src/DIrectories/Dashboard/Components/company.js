import React,{Component} from 'react';
import '../common.css'
import '../styles/companyNames.css'
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { MdSearch } from "react-icons/md";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';

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


class Company extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="compContainer containerCurved ">
                    <div className="compSearch">
                        <form  noValidate autoComplete="off">
                            <CssTextField
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <MdSearch />
                                            <Select disableUnderline={true} style={{backgroundColor:"212121",color:"#bbb",fontSize:"15px",marginLeft:"60px"  }}  labelId="label" id="select" value="20">
                                                <MenuItem value="10">Ten</MenuItem>
                                                <MenuItem value="20">Twenty</MenuItem>
                                            </Select>
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

                        <div className="compHeading">
                            <div className="compLeft">
                                Company
                            </div>
                            <div className="compRight">
                                Sentiment
                            </div>
                        </div>
                        <div className="companyInfo">
                            <div className="compLeft">
                                Company
                            </div>
                            <div className="compRight">
                                Sentiment
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Company