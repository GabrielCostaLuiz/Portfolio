import { useEffect, useState } from "react";

interface IProps {
  name: string;
}

export function Linguagem({ name }: IProps) {
  const [linguagem, setLinguagem] = useState([]) as any;

  function languagens() {
    fetch(`https://api.github.com/repos/GabrielCostaLuiz/${name}/languages`)
      .then((response) => response.json())
      .then((data: string[]) => setLinguagem(Object.keys(data)));
  }

  useEffect(() => {
    languagens();
  }, []);

  return (
    <div className="languagens">
      {linguagem.map((linguagem: string) => (
        <p key={linguagem} title={linguagem}>
          {linguagem}
        </p>
      ))}
    </div>
  );
}
