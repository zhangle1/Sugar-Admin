import React from 'react';
import styled from 'styled-components';

// Define your styled components
const Container = styled.div`
  margin-bottom: 1.75rem; /* mb-7 */
  @media (min-width: 640px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 28rem; /* sm:max-w-md */
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.foregroundColor};
  margin-bottom: 0.75rem; /* mb-3 */
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  line-height: 2.25rem; /* leading-9 */
  letter-spacing: -0.01562em; /* tracking-tight */
  @media (min-width: 1024px) {
    font-size: 2.25rem; /* lg:text-4xl */
  }
`;

const Description = styled.p`
  color: ${props => props.theme.mutedForegroundColor};
  font-size: 0.875rem; /* text-sm */
  @media (min-width: 1024px) {
    font-size: 1rem; /* lg:text-md */
  }
`;

// Define the SectionHeader component
const SectionHeader = ({ title, description }: { title: string; description: string }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default SectionHeader;