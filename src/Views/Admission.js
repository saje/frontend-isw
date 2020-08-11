import React from 'react';
import AdmissionForm from '../Components/AdmissionForm/AdmissionForm';
import { Container,Row,Col } from 'react-bootstrap'
import PatientList from '../Components/PatientsList/PatientsList';



function Page2(){
   
    return (
        <Container fluid="md" >
            <Row>
                <Col ><AdmissionForm/></Col>
                <Col><PatientList/></Col>
            </Row>
        </Container>
    );
}

export default Page2;