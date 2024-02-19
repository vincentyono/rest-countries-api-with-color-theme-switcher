import {
  Container,
  Image,
  Title,
  DataRowContainer,
  DataRowLabel,
  DataRowValue,
} from "./style";

const DataRow = ({label, value}) => {
  return (
    <DataRowContainer>
      <DataRowLabel>{label}:</DataRowLabel>
      <DataRowValue>{value}</DataRowValue>
    </DataRowContainer>
  );
};

export default function Card({ img, country, population, region, capital }) {
  return (
    <Container>
      <Image src={img} />
      <Title>{country}</Title>
      <DataRow label="Population" value={population} />
      <DataRow label="Region" value={region} />
      <DataRow label="Capital" value={capital} />
    </Container>
  );
}
