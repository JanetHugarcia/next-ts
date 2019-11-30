import React from 'react';
import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from '../../queries/index';
// import gql from 'graphql-tag';

// export const CLIENTES_QUERY = gql`
//     query {

//         getClientes {
//             id
//             nombre
//             apellido
//             empresa
//         }
//     }
// `;

export const Clientes = () => (
    <>
    <Query query={CLIENTES_QUERY}>
        {({loading, error, data}) => {
            if (loading) return <p>cargando...</p>;
            if (error) return <p>{`error: ${error.message}`}</p>;
            console.log(data, 'data');
            return <p>Listado de clientes</p>
        }}
    </Query>
    {console.log(CLIENTES_QUERY)}
    <p>holi</p>
    </>
)