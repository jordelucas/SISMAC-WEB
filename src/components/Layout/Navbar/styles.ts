import styled from 'styled-components'

export const StyledNavbar = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background: #103a53;
    color: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);

    .brand {
        font-size: 2.2rem;
    }

    .user-info {
        display: grid;
        gap: 20px;
        grid-template-columns: 2fr 1fr;
        align-items: center;
        text-align: right;

        .welcome small {
            display: block;
        }

        img {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
        }
    }
`