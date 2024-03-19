import styled from 'styled-components';

export default function Header() {
    return (
        <PageContainer>
            <h1>
                MINHA HOMEPAGE - SUPERADEGA
            </h1>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    height: 30%;
    background-color: black;
    border: 3px solid white;
    color: white;
`