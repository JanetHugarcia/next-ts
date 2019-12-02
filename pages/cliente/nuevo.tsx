import { NextPage } from 'next';
import { Header } from './../../frontend/common/Header';
import { FormCliente } from './../../frontend/components/FormCliente';

const EditarClientes: NextPage = () => {
  return(
    <>
      <Header />
      <FormCliente />
    </>
)};

export default EditarClientes;