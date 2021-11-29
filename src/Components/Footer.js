import React from 'react';



class Media extends React.Component {
    render() {

        return <section className="food" >
            <div className ="card">
                <img src={this.props.image} className="imagesOfFooter"/>
                <p className="nameOfFood">{this.props.name} </p>
                <p className="discreption">{this.props.discreption} </p>
            </div>
        </section>
    }
}

export default Media;