import styled from "@emotion/styled";

export const Style = styled.div`
  .hero {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .hero--photo {
    width: 400px;
    align-self: center;
  }

  .hero--header {
    margin-bottom: 16px;
    text-align: center;
  }

  .hero--text {
    margin-top: 0;
    max-width: 308px;
    margin: 0 auto;
    text-align: center;
  }
`;
export default Style;
