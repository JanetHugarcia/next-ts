import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header } from './../../../frontend/common/Header';

const EditarClientes: NextPage = () => { 
    const router = useRouter()
    const { idCliente } = router.query;
    return(
  <>s
    <Header />
    <h1>EditarClientes</h1>
    <p>{idCliente}</p>
  </>
)};

export default EditarClientes;