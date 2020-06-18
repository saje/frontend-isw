import {api} from '../helpers/api'

const basePath= 'v1/paciente';

function getAll (){
    return api.get(`${basePath}/pacientes`)
};
function show (pacienteId){
    return api.get(`${basePath}/id=${pacienteId}`)
};
function create (data){
    return api.get(`${basePath}/`,data)
};

export const patientService ={
    getAll,
    show,
    create
};
