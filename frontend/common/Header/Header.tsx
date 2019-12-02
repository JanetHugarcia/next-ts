import React from 'react';
import { Wrapper } from './styled';
import { IconWrapper } from './../Icon';
import Link from 'next/link';

export const Header: React.FC = () => (
    <Wrapper>
        <Link href="/index" as="/">
            <a>Home</a>
        </Link>
        <IconWrapper />
        <Link href="/cliente/nuevo">
            <a>nuevoCliente</a>
        </Link>
    </Wrapper>
)