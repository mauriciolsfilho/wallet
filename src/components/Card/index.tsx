import { CardWrapper, CardHeader, CardBody } from "./styles";

interface CardProps {
  image: string;
  title: string;
  value: number;
  className?: string;
}

/**
 * Componente {@link Card}
 * @param image
 * @param title
 * @param value
 * @param className
 * @returns
 */
export function Card({ image, title, value, className = "" }: CardProps) {
  return (
    <CardWrapper className={className}>
      <CardHeader>
        <p>{title}</p>
        <img src={image} alt={title} />
      </CardHeader>
      <CardBody>R$ {value.toFixed(2)}</CardBody>
    </CardWrapper>
  );
}
