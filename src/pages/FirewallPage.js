import styled from 'styled-components';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function FirewallPage() {

    return (
        <PageContainer>
            <Link to={"/"}>
                <button>
                    VOLTAR
                </button>
            </Link>
            <Header />
            <h1>
                FIREWALL
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
    a {
        position: fixed;
        left: 15%;
        top: 25px;
    }
`