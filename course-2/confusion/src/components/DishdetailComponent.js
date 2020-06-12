import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return(
        <Card>
          <CardImg width="100%" src={ dish.image } alt={ dish.name } />
          <CardBody>
            <CardTitle>{ dish.name }</CardTitle>
            <CardText>{ dish.description }</CardText>
          </CardBody>
        </Card>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  renderComments(dish) {
    if(dish != null && dish.comments.length > 0){
      const comments = dish.comments.map((comment) => {
        return (
          <div key={ comment.id }>
            <p>{ comment.comment }</p>
            <p>-- { comment.author },&nbsp;
            { new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'long', year: 'numeric'}).format(new Date(comment.date)) }</p>
          </div>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          { comments }
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          { this.renderDish(this.props.selectedDish) }
        </div>
        <div className="col-12 col-md-5 m-1">
          { this.renderComments(this.props.selectedDish) }
        </div>
      </div>
    );
  }
}

export default DishDetail;
