import styled from 'styled-components';
import Header from '../components/Header';

export default function LinksPage() {

    return (
        <PageContainer>
            <Header />
            <h1>
                LINKS
            </h1>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    min-height: 100vh;
    background-color: black;
    color: white;
    flex-direction: column;
    justify-content: flex-start !important;
    gap: 50px;
`