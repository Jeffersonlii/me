import json from '../../../public/strings';
import React from 'react';
import './MePage.scss';

const tableContents = Object.keys(json.skills).map((category) => (
    <tbody key={category}>
        <td><b>{category}</b></td>
        <td>{(json.skills as any)[category].join(', ')}</td>
    </tbody>
))



export default function Me() {


    return (
        <div id='me-window'>
            <div dangerouslySetInnerHTML={{ __html: json.paragraph.join('') }} />
            <div>
                <i id='title'>Skills</i>
                <table>
                    {tableContents}
                </table>
            </div>

        </div>
    );
}
