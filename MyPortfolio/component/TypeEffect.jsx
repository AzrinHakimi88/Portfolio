import React from "react";
import Typewriter from "typewriter-effect";

function TypeEffect({strings}) {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default TypeEffect;