import logoImg from "../../assets/logo.svg";
import { Container, Logo, Wrapper } from "./styles";

interface HeaderProps {
  onOpenTransactionModal: () => void;
}
/**
 * Componente {@link Header}
 * @returns
 */
export function Header({ onOpenTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={logoImg} alt="My Wallet" />
          <h2>My Wallet</h2>
        </Logo>
        <button type="button" onClick={onOpenTransactionModal}>
          Nova transação
        </button>
      </Wrapper>
    </Container>
  );
}
