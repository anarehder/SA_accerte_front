import { useEffect, useState } from 'react';
import styled from 'styled-components';
import apiService from '../services/apiAuth';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [data, setData] = useState([]);

    console.log(data);
    useEffect(() => {
        (async () => {
            try {
                const response = await apiService.getFirewall();
                console.log(response);
              
                if (response.status === 200) {
                    setData(response.data);
                }
            } catch (error) {
                alert("Ocorreu um erro, tente novamente");
                console.log(error);
            }
        })()
    }, []);

    return (
        <PageContainer>
            <Header />
            <ButtonsContainer>
                <Link to={"/firewall"}>
                    <button>
                        FIREWALL
                    </button>
                </Link>
                <Link to={"/links"}>
                    <button>
                        LINKS
                    </button>
                </Link>
            </ButtonsContainer>
            {/* {data ?
                <h3>{data[0].hostid}</h3>
                :
                <h3> "NAO CARREGOU"</h3>
            } */}
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

const ButtonsContainer = styled.div`
    background-color: black;
    color: white;
    gap: 50px;
`