import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
      <br />
      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>
      <br />
      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 15,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#0645AD",
  className,
  defaultExpanded = false,
  children,
}) {
  // Function to count number of words
  function countWords(str) {
    return str.trim().split(/\s+/).length;
  }

  // TODO: Not sure need this state yet
  const [numWords, setNumWords] = useState(countWords(children));
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const words = children.split(" ");

  const reducedWords = words.slice(0, collapsedNumWords).join(" ");

  // TODO: OnClick activation of expanding and collapsing text
  // TODO: Condtional to render collapseButtonText or expandButtonText
  return (
    <div className={className}>
      {reducedWords}
      {"..."}
      <span style={{ color: buttonColor, cursor: "pointer" }}>
        {expandButtonText}
      </span>
    </div>
  );
}
