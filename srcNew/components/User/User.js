import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import Service from './service'
import { BeatLoader, FadeLoader } from 'react-spinners';
import { useNavigate } from 'react-router';
export default function User() {
    const [user, setuser] = useState(null);
    const [admin, setadmin] = useState([]);
    const navigate = useNavigate();
    //fetch
    useEffect(() => {
        Service.getUser()
            .then(rep => {
                setuser(rep.data[0].users);
                setadmin(rep.data[1].users);
            })
            .catch(err => {
                console.log('some err in user', err);
            })
    }, [])
    // function
    function handleLogin(user) {
        // console.log('ssssaaaa', user);
        navigate('/Main', { state: { user } });
    }
    return (
        <div>
            <Row>
                <Col sm={6}>
                    <h5>User</h5>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>


                            {
                                user &&
                                user.map(u => {
                                    return <tr key={u + 're'}>
                                        <td key={u + 'asd'}>{u.id}</td>
                                        <td key={u + 'asdd'}>{u.name}</td>
                                        <td key={u + 'aasd'}><Button onClick={() => handleLogin(u)}> Login</Button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>

                </Col>


                <Col sm={6}>
                    <h5>Admin</h5>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                admin &&
                                admin.map(u => {
                                    return <tr key={u + 'rse'}>
                                        <td key={u + 'asad'}>{u.id}</td>
                                        <td key={u + 'aswdd'}>{u.name}</td>
                                        <td key={u + 'e'}><Button onClick={() => handleLogin(u)}>Login</Button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>

                </Col>
            </Row>

        </div >
    )
}
