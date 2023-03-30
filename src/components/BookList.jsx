import { Row } from 'react-bootstrap'

import SingleBook from './SingleBook'

const BookList = (props) => {
    console.log(props)
  
    return (
      <Row>
        {props.map((book) => {
          return (
           <SingleBook asin={book.asin} img={book.img} tiltle={book.tiltle} price={book.price} />
          )
        })}
      </Row>
    )
}

export default BookList