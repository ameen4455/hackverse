import React,{Component} from 'react';
import '../common.css'
import '../styles/companyNews.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';



class News extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="newsContainer containerCurved ">
                    <div className="newsHeader">
                        <div className="newsTitle">
                            Company News
                        </div>
                        <div className="newsFilters">
                            <div className="newsDate">
                                <Select style={{color:"#bbb" ,fontSize:"14px"}} labelId="label2" id="select" value="20"  disableUnderline={true}>
                                    <InputLabel shrink id="label2">Data Range</InputLabel>
                                    <MenuItem value="10">Ten</MenuItem>
                                    <MenuItem value="20">Twenty</MenuItem>
                                </Select>
                            </div>
                            <div className="newsSort">
                                <Select style={{color:"#bbb" ,fontSize:"14px"}} labelId="label1" id="select" value="20"  disableUnderline={true}>
                                    <InputLabel shrink id="label1">Sort </InputLabel>
                                    <MenuItem value="10">Ten</MenuItem>
                                    <MenuItem value="20">Twenty</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="newsData">
                        <div className="newsHeading">Heading</div>
                        <div className="newsCoDate">01/2/2018 3:25 PM-Found-Hogan Hook - Sentiment -20 </div>
                        <div className="newsDescriptiom"> Hogan Cook After all, information on a quarter of a billion of the company’s customers got exposed online with no password protection.
                            That’s certainly not good. But what might be beneficial is a potential opportunity for investors to make some money</div>
                        <div className="newsReadMore">Read more</div>
                        <div className="newsSimilar"> Show 5 similar news</div>
                    </div>
                </div>
            </>
        )
    }
}

export default News