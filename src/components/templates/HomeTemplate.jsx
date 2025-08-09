import styled from "styled-components";
import { Carousel } from "../../index";

export function HomeTemplate() {
  return (
    <Main>
      <HeroSection>
        <ContentContainer>
          <TextContent>
            <Title>
              Bienvenido a <Highlight>FinTrack</Highlight>
            </Title>
            <SubText>
              FinTrack simplifica la gestión de tus finanzas personales con
              herramientas profesionales accesibles para todos
            </SubText>
            <FeaturesList>
              <FeatureItem>
                📊 Gestiona todos tus movimientos financieros
              </FeatureItem>
              <FeatureItem>
                📈 Visualiza gráficos de tus gastos e ingresos
              </FeatureItem>
              <FeatureItem>📱 Soporte multiplataforma</FeatureItem>
            </FeaturesList>
          </TextContent>

          <CarouselContainer>
            <Carousel />
          </CarouselContainer>
        </ContentContainer>
      </HeroSection>

      <Divider />

      <TestimonialsSection>
        <SectionTitle>Lo que dicen nuestros usuarios</SectionTitle>
        <TestimonialCard>
          "FinTrack ha transformado cómo manejo mis finanzas. ¡Imprescindible!"
        </TestimonialCard>
      </TestimonialsSection>
    </Main>
  );
}

// ===== Estilos Profesionales =====
const Main = styled.main`
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  overflow-x: hidden;
  transition: all 0.3s ease;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: auto;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  max-width: 1400px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    order: 2;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontxxxl};
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontxxl};
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.bg5};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.bg5},
    ${({ theme }) => theme.bg5}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubText = styled.p`
  font-size: ${({ theme }) => theme.fontlg};
  color: ${({ theme }) => theme.colorSubtitle};
  line-height: 1.6;
  max-width: 90%;

  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: ${({ theme }) => theme.fontmd};
  }
`;

const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  margin: 1.5rem 0;
`;

const FeatureItem = styled.li`
  font-size: ${({ theme }) => theme.fontmd};
  color: ${({ theme }) => theme.text};
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    order: 1;
    min-height: 300px;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 80%;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.primary},
    transparent
  );
  opacity: 0.3;
`;

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontxxl};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.bg5};
    border-radius: 2px;
  }
`;

const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 15px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontlg};
  font-style: italic;
  color: ${({ theme }) => theme.colorSubtitle};
  box-shadow: 0 10px 30px ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg4};
`;
