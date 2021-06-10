import React from "react";
import "./App.css"
import axios from "axios";

class NewsInfo extends React.Component{
    render() {
        return(
            <table border={0} className={"commentTable"}>
                <tr>
                    <td>
                        title: {this.props.articles['title']}
                    </td>
                </tr>
                <tr>
                    <td>
                        description: {this.props.articles['description']}
                    </td>
                </tr>
                <hr/>
            </table>
        )
    }
}

class News extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            articles:[]
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleShow = async (e) =>{
        e.preventDefault()
        const arr = []
        const response = await axios.get("naverNews.php?w3=" + this.props.address)
        console.log(response.data)
        response.data.forEach(row=>{
            arr.push(row)
        })
        this.setState({
            articles:arr
        })
    }

    render() {
        const mapToComponent = data =>{
            return data.map((articles, i) => {
                console.log("NewsInfo")
                return (<NewsInfo articles = {articles} key={i}/>);
            });
        }
        return(
            <div style={{backgroundColor: this.props.color}}>
                <p>{this.props.address}</p>
                <button onClick={this.handleShow} onChange={this.handleChange}>
                    뉴스 보여줘욥
                </button>
                <div>
                    {mapToComponent(this.state.articles)}
                </div>
            </div>
        );
    }
}

export default News;