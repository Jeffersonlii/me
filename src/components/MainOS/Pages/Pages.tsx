import React from 'react';
import json from '../../../public/strings';
import './Pages.scss';
import ExperiencePage from './ExperiencePage';
import { $openWindow } from './../../Parent/ParentService';
import Me from './MePage';

interface FileDefinition {
    filename: any;
    onclick: any;
    id: string;
}

export default function DesktopFiles(props: any) {
    let fileDefs: FileDefinition[] = [
        {
            filename: (
                <>
                    INTRODUCTION.TXT
                </>
            ),
            onclick: () => {
                $openWindow.next({
                    child: <Me></Me>,
                    params: {
                        header: 'INTRODUCTION.TXT',
                        width: '50rem',
                        height: '25rem',
                    },
                });
            },
            id: 'me',
        },
        {
            filename: (
                <>
                    EXPERIENCES<br></br>.HTML
                </>
            ),
            onclick: () => {
                $openWindow.next({
                    child: (
                        <ExperiencePage
                            openWindow={props.openWindow}
                        ></ExperiencePage>
                    ),
                    params: {
                        header: 'EXPERIENCES.HTML',
                        width: '25rem',
                        height: '30rem',
                    },
                });
            },
            id: 'exp',
        },
        {
            filename: <>MILK.GIF</>,
            onclick: () => {
                $openWindow.next({
                    child: <Rand></Rand>,
                    params: {
                        header: 'MILK.GIF',
                        width: '30rem',
                        height: '20rem',
                    },
                });
            },
            id: 'rand',
        },
        {
            filename: <>RESUME.PDF</>,
            onclick: () => window.open('pdfs/resume.pdf', '_blank'),
            id: 'res',
        },
        {
            filename: <>SOCIALS.HTML</>,
            onclick: () => {
                $openWindow.next({
                    child: <Socials></Socials>,
                    params: {
                        header: 'SOCIALS.HTML',
                        width: '25rem',
                        height: '25rem',
                    },
                });
            },
            id: 'creds',
        },
    ];

    return (
        <div className="desktop-files">
            {fileDefs.map((def) => {
                return (
                    <div className="file" id={def.id} onClick={def.onclick}>
                        <img
                            src={process.env.PUBLIC_URL + '/fileicon.png'}
                            alt=""
                            style={{ width: '50px' }}
                        />
                        {def.filename}
                    </div>
                );
            })}
        </div>
    );
}


function Rand() {
    return <img src="gifs/funny_cow.gif" id="rand-gif" alt="funny cow gif" />;
}
function Socials() {
    /* eslint-disable react/jsx-no-target-blank */
    return (
        <>
            {json.socials.map((soc) => {
                return (
                    <>
                        {soc.name}
                        <ul>
                            <li>
                                <a href={soc.link} target="_blank">
                                    <b>{soc.desc}</b>
                                </a>
                            </li>
                        </ul>
                    </>
                );
            })}
            <div dangerouslySetInnerHTML={{ __html: json.credits.join('') }} />
        </>
    );
}
