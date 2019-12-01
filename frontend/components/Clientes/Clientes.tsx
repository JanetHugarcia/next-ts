import React from 'react';
import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from '../../queries/index';
import { Button } from '../../common/Button';
import {
    Container,
    Title,
    List,
    Item,
    Name
} from './styled';

export const Clientes = () => (
    <Query query={CLIENTES_QUERY}>
        {({loading, error, data}) => {
            if (loading) return <p>cargando...</p>;
            if (error) return <p>{`error: ${error.message}`}</p>;
            console.log(data, 'data');
            return (
                <Container>
                    <Title>Listado de clientes</Title>
                    <List>
                    {
                        data.getClientes.map((cliente) => (
                            <Item key={cliente.id}>
                                <Name>{cliente.nombre} {cliente.apellido}</Name>
                                <Button text="Editar Cliente" />
                            </Item>
                        ))
                    }
                    </List>
                </Container>
            )
        }}
    </Query>
)