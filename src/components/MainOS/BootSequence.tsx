import React from "react";
import TypeIt from "typeit-react";

export function BootSequence(props: { onClickBoot: () => any }) {
  document.addEventListener("keydown", props.onClickBoot);

  return (
    <div className="bootWrap" onClick={props.onClickBoot}>
      <div className="initButton">PRESS ANY KEY TO BOOT FROM CD OR DVD....</div>
    </div>
  );
}

export function BootText() {
  return (
    <TypeIt
      options={{ speed: 1 }}
      getBeforeInit={(instance: any) => {
        instance
          .type("COMPBIO (C) 1991 MOTHERBOARD. INC.")
          .pause(50)
          .break()
          .type("BIOS DATE 09/29/91 15:43:29 VER: 08.00.15")
          .pause(50)
          .break()
          .type("CPU: INTEL(R) CPU 330 @40MHZ")
          .pause(50)
          .break()
          .type("SPEED: 40MHZ")
          .pause(50)
          .break()
          .type("THIS VGA/PCI BIOS IS RELEASED UNDER THE GNU LGPL")
          .pause(50)
          .break()
          .type("64-1001-100001010100-12995-1AE23EV003-Y30C")
          .pause(50)
          .break()
          .type("BOOTING FROM HARD DISK")
          .pause(50)
          .type(". . .", { speed: 400 });
        return instance;
      }}
    />
  );
}
