import React from 'react';
import { Title, Container } from '../../utils/styled/index';
import { Form, Field, Label, Input, Row } from './styled';

export const FormCliente: React.FC = () => (
    <Container>
        <Title>Nuevo Cliente</Title>
        <Form>
            <Field>
                <Label>Nombre</Label>
                <Input placeholder="Nombre"/>
            </Field>
            <Field>
                <Label>Apellido</Label>
                <Input placeholder="Apellido"/>
            </Field>
            <Field>
                <Label>Empresa</Label>
                <Input placeholder="Empresa"/>
            </Field>
            <Field>
                <Label>Email</Label>
                <Input placeholder="Email"/>
            </Field>
            <Row>
                <Field>
                    <Label>Edad</Label>
                    <Input placeholder="Edad"/>
                </Field>
                <Field>
                    <Label>Tipo</Label>
                    <select>
                        <option>Elegir</option>
                        <option>PREMIUM</option>
                        <option>NORMAL</option>
                    </select>
                </Field>
            </Row>
        </Form>
    </Container>
)