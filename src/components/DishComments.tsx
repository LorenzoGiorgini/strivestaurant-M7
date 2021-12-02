import ListGroup from 'react-bootstrap/ListGroup'
import IHome from '../types/IHome'

const DishComments = ({selectedDish} : {selectedDish : IHome | null}) => (
  <ListGroup>
    {selectedDish ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments