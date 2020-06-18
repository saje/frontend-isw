import React, {Component} from 'react'
import {Form,Button,FormCheck,} from 'react-bootstrap'
//import {PatientService} from '../../services'

class AdmissionForm extends Component{

    constructor(props){
        super(props);
        this.state= {
            patientFirstName:'',
            patientLastName:'',
            patientBirthday:null,
            patientSex:'male'
        }

    };

    SubmitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state);
        //simple validation
        if(this.state.patientFirstName!=='' && this.state.patientLastName !=='' && this.state.patientBirthday!==null ){
            // alert('axios thing');
            //PatientService.create({})
        }
        else alert('rellene todos los campos');
    };
    FirstNameChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, patientFirstName: event.target.value});
        //console.log(this.state);
    };

    LastNameChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, patientLastName: event.target.value});
        //console.log(this.state);
    };
    BirthdayChangeHandler = (event)=>{
        event.preventDefault();
        this.setState({...this.state, patientBirthday: event.target.value});
        //console.log(this.state);
    };

    onRadioChange = (event) => {
        this.setState({
          patientSex: event.target.value
        });
         //console.log(this.state);
    }
    
    render(){
        const styles={
            padding:'15px',
            margin: '15px',
            border: '2px solid black',
            textAlign: 'left'

        }
        const form={
            height: '420px',
            marginBottom: '10px'
        };
        return(
            <div style={styles}>
                <h3 style={{textAlign: "center"}}> Ingreso de pacientes</h3>
                <Form style={form} onSubmit={this.SubmitHandler}>
                <Form.Group controlId="FormFirstName" >
                    <Form.Label>Nombre del paciente:</Form.Label>
                    <Form.Control type="text" onChange={this.FirstNameChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormLastName" >
                    <Form.Label>Apellido del paciente:</Form.Label>
                    <Form.Control type="text"  onChange={this.LastNameChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormBirthday" >
                <Form.Label>Fecha Nacimiento del paciente:</Form.Label>
                <Form.Control type="date" onChange={this.BirthdayChangeHandler} />
                </Form.Group>

                <Form.Group controlId="FormSex" >
                <Form.Label>Sexo del paciente:</Form.Label>
                <FormCheck   checked={this.state.patientSex==='male'} type='radio' value='male' label='Hombre' onChange={this.onRadioChange}/>
                <FormCheck    checked={this.state.patientSex==='female'} type='radio' value='female' label='Mujer' onChange={this.onRadioChange}/>
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

