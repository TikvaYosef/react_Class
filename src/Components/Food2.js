import React from 'react';



class Media extends React.Component {
    render() {
        
        return <section className = "section" >
        <h1 className = "names">{this.props.name}  </h1>
        <h3 className = "jobs">{this.props.dis} </h3>
        <img src = {this.props.image}  className="imageOfEmploy" />
        </section>
    }
}

export default Media;