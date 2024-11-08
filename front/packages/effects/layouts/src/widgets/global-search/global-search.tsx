import styled from 'styled-components';

const SearchWrapper = styled.div`
  @media (min-width: 768px) {
    background-color: ${p => p.theme.accent};
  }
  display: flex;
  height: 32px;
  cursor: pointer;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  border-style: none;
  background-image: none;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: black;
`;

const TitleSpan=styled.span`
    color: ${p=>p.theme.mutedForegroundColor};
    width: 16px;
    height: 16px;
    font-size: 12px;
    
`

interface Props {}

const GlobaSearch = (props: any) => {
  return (
    <>
      <SearchWrapper>
        <SearchIcon></SearchIcon>
      </SearchWrapper>
    </>
  );
};

const SearchIcon = () => {
  return (
    <svg
  
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4254"
      width="16"
      height="16"
    >
      <path
        d="M797.525333 752.266667c62.069333-72.736 97.28-165.002667 97.28-262.186667C894.816 266.528 713.621333 85.333333 490.08 85.333333 266.538667 85.333333 85.333333 266.538667 85.333333 490.069333 85.333333 713.610667 266.538667 894.826667 490.069333 894.826667a404.693333 404.693333 0 0 0 118.208-17.546667 32 32 0 0 0-18.666666-61.216 340.693333 340.693333 0 0 1-99.541334 14.762667C301.888 830.816 149.333333 678.261333 149.333333 490.069333 149.333333 301.888 301.888 149.333333 490.069333 149.333333 678.261333 149.333333 830.826667 301.888 830.826667 490.069333c0 89.28-35.381333 173.696-97.141334 237.322667a36.992 36.992 0 0 0 0.384 51.925333l149.973334 149.973334a32 32 0 0 0 45.258666-45.248L797.525333 752.266667z"
        fill="currentcolor"
        p-id="4255"
      ></path>
    </svg>
  );
};

export default GlobaSearch;
