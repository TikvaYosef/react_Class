import React from 'react';



class Media extends React.Component {
    render() {
        
        return <section ><img src = {this.props.image}  className="imageOfEmploy" />
        <h1 className = "names">{this.props.name}  </h1>
        <h3 className = "jobs">{this.props.job} </h3>
        </section>
    }
}

export default Media;