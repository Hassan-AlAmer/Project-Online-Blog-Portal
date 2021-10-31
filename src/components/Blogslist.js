import {Col, Card, ListGroup, ListGroupItem, Alert, Button, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Blogslist({blogs, handleDelete}) {
    return(        
        <>
            {blogs.length != 0 ? blogs.map((blog)=>(
                <Col lg={3} key={blog.id} className="mb-3">
                    <Card className="h-100">
                    <Card.Img variant="top" src={blog.urlImg} />
                    <Card.Body>
                        <Card.Title>{blog.blogName} </Card.Title>
                        <Card.Text>
                            {blog.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><span className="fw-bold">Posted Date:</span> {blog.postedDate}</ListGroupItem>
                        <ListGroupItem><span className="fw-bold">User Name:</span> {blog.userName}</ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col><Button as={Link} to={`/update/${blog.id}`} variant="primary" className="w-100">Update</Button></Col>
                                <Col><Button variant="danger" className="w-100" onClick={()=> handleDelete(blog.id) }>Delete</Button></Col>
                            </Row>                            
                        </ListGroupItem>
                    </ListGroup>
                    </Card>
                </Col>
            )):(
                <Alert variant={'danger'}>
                    No Item
                </Alert>
            )
            }
        </>
    )
}

export default Blogslist
