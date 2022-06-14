import { Content } from "./headerContent";
import { Links } from "./headerLinks";
import { Container } from "./style";

export function Header() {
  return (
    <Container id="header">
      <Links />
      <Content />
    </Container>
  );
}
