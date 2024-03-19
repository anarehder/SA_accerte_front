import styled from 'styled-components';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function FirewallPage() {
    const [selectedTypeButton, setSelectedTypeButton] = useState('value_max');
    const [form, setForm] = useState({ start: "", end: ""});

    const handleButtonClick = (buttonName) => {
        setSelectedTypeButton(buttonName);
    };

    const handleForm = (e) => {
        e.preventDefault();
        setForm((prevForm) => ({ ...prevForm, [e.target.id]: e.target.value }));
    };
    console.log(form);

    const handleSubmit = (event) => {
        const body = {start: form.start, end: form.end, value: selectedTypeButton};
        console.log(body);
        event.preventDefault();
        // Realize as ações necessárias com base no botão selecionado
        console.log(`Botão "${selectedTypeButton}" foi selecionado!`);
    };


    return (
        <PageContainer onSubmit={handleSubmit}>
            <Link to={"/"}>
                <button>
                    VOLTAR
                </button>
            </Link>
            <Header />
            <h1>
                FIREWALL
            </h1>
            <InputArea>
                <ButtonsContainer>
                    <StyledButtonValue selection_type={selectedTypeButton === 'value_avg' ? 'yes' : 'no'} onClick={() => handleButtonClick('value_avg')}>
                        MÉDIO
                    </StyledButtonValue>
                    <StyledButtonValue selection_type={selectedTypeButton === 'value_max' ? 'yes' : 'no'} onClick={() => handleButtonClick('value_max')}>
                        MAX
                    </StyledButtonValue>
                </ButtonsContainer>
                <MonthInputContainer>
                    <div>
                        <h3> De </h3>
                        <input
                            placeholder='Mês Início'
                            type="month"
                            id="start"
                            value={form.start}
                            onChange={handleForm}
                        />
                    </div>
                    <div>
                    <h3> Até </h3>
                        <input
                            placeholder='Mês Fim'
                            type="month"
                            id="end"
                            value={form.end}
                            onChange={handleForm}
                        />
                    </div>
                    
                </MonthInputContainer>
                <button type="submit">EXIBIR</button>
            </InputArea>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    min-height: 100vh;
    background-color: black;
    color: white;
    flex-direction: column;
    justify-content: flex-start !important;
    gap: 20px;
    a {
        position: fixed;
        left: 7%;
        top: 3.5%;
        button {
            background-color: black;
            border: 1px solid white;
        }
    }
`

const InputArea = styled.form`
    display: flex;
    gap: 50px;
    align-items:center;
    input {
        color: black;
        padding: 10px;
    }
`

const ButtonsContainer = styled.div`
    gap: 30px; 
`

const StyledButtonValue = styled.button`
    background-color: ${(props) => (props.selection_type === 'no' && 'gray')};
`;

const MonthInputContainer = styled.div`
    gap: 30px;
    div {
        gap: 20px;
    }
`