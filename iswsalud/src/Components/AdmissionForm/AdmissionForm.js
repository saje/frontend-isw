import React, {Component} from 'react'
import {Form,Button,FormCheck,} from 'react-bootstrap'
import {patientService} from '../../services'

class AdmissionForm extends Component{

    constructor(props){
        super(props);
        this.state= {
            patientName:'',
            patientRut:'',
            patientAge:-1,
            patientSex:'m',
            patientEmail:'',
            patientNumber:'',
            patientDiagnostic:'',
            patientcode: '003',
            hospitalCode:'003'
        }

    };

    SubmitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);
        //simple validation
        if(this.state.patientName!=='' && this.state.patientRut !=='' && this.state.patientAge!==null
            && this.state.patientEmail!=='' && this.state.patientNumber !=='' && this.state.patientDiagnostic!==null ){
            // alert('axios thing');
            let date= new Date().getDate()
            let data = {
                nombre: this.state.patientName,
                rut: this.state.patientRut,
                edad: this.state.patientAge,
                sexo:this.state.patientSex,
                email: this.state.patientEmail,
                telefono: this.state.patientNumber,
                fechaCreacion: date,
                codigoHospital :this.state.hospitalCode,
                diagnostico: this.state.patientDiagnostic,
                codigo: this.state.hospitalCode
            }
            patientService.create(data)
            .then((response)=>console.log(response))
            .catch(error=> console.log(error));
        }
        else alert('rellene todos los campos');
    };
    NameChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, patientName: event.target.value});
        //console.log(this.state);
    };

    RutChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, patientRut: event.target.value});
        //console.log(this.state);
    };
    AgeChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, patientAge: event.target.value});
        //console.log(this.state);
    };

    onRadioChange = (event) => {
        this.setState({
          patientSex: event.target.value
        });
         //console.log(this.state);
    };
    EmailChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, patientEmail: event.target.value});
        //console.log(this.state);
    };
    NumberChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, patientNumber: event.target.value});
        //console.log(this.state);
    };
    DiagnosticChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, patientDiagnostic: event.target.value});
        //console.log(this.state);
    };
    
    render(){
        const styles={
            padding:'15px',
            margin: '15px',
            border: '2px solid black',
            textAlign: 'left'

        }
        const form={
            marginBottom: '10px'
        };
        return(
            <div style={styles}>
                <h3 style={{textAlign: "center"}}> Ingreso de pacientes</h3>
                <Form style={form} onSubmit={this.SubmitHandler}>
                
                <Form.Group controlId="Name" >
                    <Form.Label>Nombre del paciente:</Form.Label>
                    <Form.Control type="text" onChange={this.NameChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormRut" >
                    <Form.Label>Rut del paciente:</Form.Label>
                    <Form.Control type="text"  onChange={this.RutChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormAge" >
                <Form.Label>Edad del paciente:</Form.Label>
                <Form.Control type="number" min='0' onChange={this.AgeChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormSex" >
                <Form.Label>Sexo del paciente:</Form.Label>
                <FormCheck   checked={this.state.patientSex==='m'} type='radio' value='m' label='Hombre' onChange={this.onRadioChange}/>
                <FormCheck    checked={this.state.patientSex==='f'} type='radio' value='f' label='Mujer' onChange={this.onRadioChange}/>
                </Form.Group>

                <Form.Group controlId="FormEmail" >
                    <Form.Label>Email del paciente:</Form.Label>
                    <Form.Control type="text"  onChange={this.EmailChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormNumber" >
                    <Form.Label>Numero de telefono del paciente:</Form.Label>
                    <Form.Control type="text"  onChange={this.NumberChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormDiagnostic" >
                    <Form.Label>Diagnostico:</Form.Label>
                    <Form.Control type="text"  onChange={this.DiagnosticChangeHandler} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }

};


export default AdmissionForm;

