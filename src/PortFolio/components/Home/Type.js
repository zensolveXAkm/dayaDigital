import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          " Daya Chaudhary",
          "Founder & CEO, Digital Line",
          "digital marketing expert with 5 years of experience",
          "Provided Google Play Console expertise",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
