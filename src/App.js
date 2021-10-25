import "./styles.css";

// Lilly	Minchala	She/Hers	HHSLT	2022	Purple	Insta	Rats	Lillian
//Luna-Marcelino	She/Hers	P-TECH	2022			Cats	Luna
function Person(name, pronouns, school, year, color, social, animal, nickname) {
  return (
    <div class="row">
      <div class="red">{name}</div>
      <div>{pronouns}</div>
      <div class="red">{school}</div>
      <div>{year}</div>
      <div class="red">{color}</div>
      <div>{social}</div>
      <div class="red">{animal}</div>
      <div>{nickname}</div>
    </div>
  );
}
export default function App() {
  const lily = Person(
    "Lilly Minchala",
    "She/Hers",
    "HHSLT",
    2022,
    "purple",
    "Insta",
    "Rats",
    "Lillian"
  );
  const claudia = Person(
    "Luna-Marcelino",
    "She/Hers",
    "P-TECH",
    2022,
    "",
    "",
    "Cats",
    "Luna"
  );
  return (
    <div className="App">
      {lily}
      {claudia}
    </div>
  );
}
