import "./App.css";
import CardBox from "./components/CardBox";

const cardsEasyType = [
  { icon: "⌬", id: 1, matched: false },
  { icon: "⍟", id: 2, matched: false },
  { icon: "⍣", id: 3, matched: false },
  { icon: "⍩", id: 4, matched: false },
];
const cardsMediumType = [
  { icon: "⌬", id: 1, matched: false },
  { icon: "⍟", id: 2, matched: false },
  { icon: "⍣", id: 3, matched: false },
  { icon: "⍩", id: 4, matched: false },
  { icon: "⌘", id: 5, matched: false },
  { icon: "⌆", id: 6, matched: false },
  { icon: "⌅", id: 7, matched: false },
  { icon: "⍦", id: 8, matched: false },
];
const cardsHardType = [
  { icon: "⌬", id: 1, matched: false },
  { icon: "⍟", id: 2, matched: false },
  { icon: "⍣", id: 3, matched: false },
  { icon: "⍩", id: 4, matched: false },
  { icon: "⌘", id: 5, matched: false },
  { icon: "⌆", id: 6, matched: false },
  { icon: "⌅", id: 7, matched: false },
  { icon: "⍦", id: 8, matched: false },
  { icon: "⍒", id: 9, matched: false },
  { icon: "⍢", id: 10, matched: false },
  { icon: "⍭", id: 11, matched: false },
  { icon: "⍷", id: 12, matched: false },
  { icon: "⍅", id: 13, matched: false },
  { icon: "⍎", id: 14, matched: false },
  { icon: "⍊", id: 15, matched: false },
  { icon: "⍍", id: 16, matched: false },
];

function App() {
  let totalFlip = 4;
  let totalTime = 10;
  return (
    <>
      <CardBox
        cardsEasyType={cardsHardType}
        totalFlip={totalFlip}
        totalTime={totalTime}
      />
    </>
  );
}

export default App;
