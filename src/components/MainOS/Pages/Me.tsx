import React from "react";
import json from '../../../public/strings';
export default function Me(){
    return (
    <div dangerouslySetInnerHTML={{ __html: json.paragraph.join('') }}/>)
}