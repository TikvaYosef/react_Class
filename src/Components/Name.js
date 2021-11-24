import React from 'react';


class Media extends React.Component {
    render() {
        // console.log(this.props)
        return <section> <center><h1> {this.props.name} </h1><h1>{this.props.age}</h1>,</center></section>
    }
}

export default Media;