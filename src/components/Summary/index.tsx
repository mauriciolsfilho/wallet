import { Card } from "../Card";
import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

/**
 * Componente {@link Summary}
 * @returns
 */
export function Summary() {
  return (
    <Container>
      <Card image={incomeImg} title="Entradas" value={1000} />
      <Card image={outcomeImg} title="Saídas" value={-500} />
      <Card
        image={totalImg}
        title="Total"
        value={500}
        className="background-green"
      />
    </Container>
  );
}
