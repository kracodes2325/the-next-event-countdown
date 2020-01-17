import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 1,
        discountEnd: 30
    }

    percentage = () => {
        const discountStart = this.state.discountStart;
        const discountEnd = this.state.discountEnd;
        if(discountStart < discountEnd){
            this.setState({
                discountStart: discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage(); 
        },50)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                <Fade
                    onReveal={()=>this.percentage()}
                >
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase Tickets Before 10th February</h3>
                        <p>lorem ipsum dolor si amet, cotnehf akghd askjf adaeu, amor fati, memento mori</p>
                        <MyButton
                            text="Purchase Tickets"
                            bck="#ffa800"
                            color="#ffffff"
                            link="#!"
                        />
                    </div>
                </Slide>
                </div>
            </div>
        )
    }
}

export default Discount;
