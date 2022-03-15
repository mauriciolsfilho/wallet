import { currencyMask } from "../../core/utils/masks";
import { CardWrapper, CardHeader, CardBody } from "./styles";

interface CardProps {
  image: string;
  title: string;
  amount: number;
  className?: string;
}

/**
 * Componente {@link Card}
 * @param image
 * @param title
 * @param amount
 * @param className
 * @returns
 */
export function Card({ image, title, amount, className = "" }: CardProps) {
  return (
    <CardWrapper className={className}>
      <CardHeader>
        <p>{title}</p>
        <img src={image} alt={title} />
      </CardHeader>
      <CardBody>{currencyMask(amount)}</CardBody>
    </CardWrapper>
  );
}
