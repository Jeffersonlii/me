import React from 'react';
import TypeIt from 'typeit-react';

export function BootSequence(props: { onClickBoot: () => any }) {
    document.addEventListener('keydown', props.onClickBoot);

    return (
        <div className="bootWrap" onClick={props.onClickBoot}>
            <div className="initButton">
                PRESS ANY KEY TO BOOT FROM CD OR DVD....
            </div>
        </div>
    );
}

export function BootText() {
    let pause = 1;

    return (
        <TypeIt
            options={{ speed: 0.5 }}
            getBeforeInit={(instance: any) => {
                instance
                    .type('COMPBIO (C) 1991 MOTHERBOARD. INC.')
                    .pause(pause)
                    .break()
                    .type('BIOS DATE 09/29/91 15:43:29 VER: 08.00.15')
                    .pause(pause)
                    .break()
                    .type('CPU: INTEL(R) CPU 330 @40MHZ')
                    .pause(pause)
                    .break()
                    .type('SPEED: 40MHZ')
                    .pause(pause)
                    .break()
                    .type('THIS VGA/PCI BIOS IS RELEASED UNDER THE GNU LGPL')
                    .pause(pause)
                    .break()
                    .type('64-1001-100001010100-12995-1AE23EV003-Y30C')
                    .pause(pause)
                    .break()
                    .type('BOOTING FROM HARD DISK')
                    .pause(pause)
                    .type('. . .', { speed: pause * 4 });
                return instance;
            }}
        />
    );
}
