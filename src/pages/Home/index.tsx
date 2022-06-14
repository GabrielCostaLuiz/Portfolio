import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Projetos } from "../../components/Projetos";
import { ReturnTop } from "../../components/ReturnTop";
import { Skills } from "../../components/Skills";
import { SobreMim } from "../../components/SobreMim";
import { Container } from "./style";

export function Home() {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const returnTop = document.querySelector(".returnTop div");

    if (scrollTop > 700) {
      returnTop?.classList.add("returnTop--active");
    } else {
      returnTop?.classList.remove("returnTop--active");
    }
  });

  return (
    <Container>
      <Header />
      <main>
        <SobreMim />
        <Projetos />
        <Skills />
      </main>
      <Footer />
      <ReturnTop />
    </Container>
  );
}
