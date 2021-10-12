import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { cid: 123, title: 'lc的博客1' },
                { cid: 123, title: 'lc的博客2' },
                { cid: 123, title: 'lc的博客3' },
            ]
        }
        this.props.history.push("/home/")
    }
    render() {
        return (
            <div>
                <h2>lc.com</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={'/list/'+item.cid}>
                                    {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default Index;