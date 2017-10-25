import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';

//BookList is promoted from a component to a container by:
//first, import connect function from react-redux
//second, define mapStateToProps function and use the connect() function to hook the BookReducer to the BookList component

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    })
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be passed
  //to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote BookList from a component to a container
// It needs to know about this new dispatch method, selectBook
// Make it available as a prop.
export default connect (mapStateToProps, mapDispatchToProps)(BookList);
