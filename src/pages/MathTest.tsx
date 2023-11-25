import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function TestPage() {
  const mathJaxConfig = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
  };

  return (
    <MathJaxContext config={mathJaxConfig}>
      <h2>Basic MathJax example with AsciiMath</h2>
      <MathJax>
        {"dawd`frac{10}{4x} approx 2^{12}`awdwad $$k+1$$ that's $ok$"}
      </MathJax>
    </MathJaxContext>
  );
}
