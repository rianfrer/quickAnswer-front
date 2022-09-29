import React from "react";
import '../styles/Agendamentos.css';
import { Table } from 'reactstrap';


function Agendamentos() {
    return (
        <>
            <div className="nav">
                <Navbar>
                    <Container>
                        <Navbar.Brand> Navbar with text</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: Mark Otto
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="tabela">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome completo do cliente</th>
                            <th>Horário agendado</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>

    )
}

export default Agendamentos