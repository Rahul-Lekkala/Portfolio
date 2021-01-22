import styled from 'styled-components';

export const Wrapper = styled.div`

  .menu a {
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    padding:25px;
    font-weight:bold;
  }
  .menu {
    display: flex;
    align-items: center;
    padding:10px;
  }
  @media (max-width: 960px) {
    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  a {
    color: #000;
    text-decoration: none;

    @media (max-width: 960px) {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
