import React from 'react';



class Media extends React.Component {
    render() {
        
        return <section className = "food" ><img src = {this.props.image}  className="imagesOfFooter" />
        <h1 className = "nameOfFood">{this.props.name}  </h1>
        <h3 className = "discreption">{this.props.discreption} </h3>
        </section>
    }
}

export default Media;