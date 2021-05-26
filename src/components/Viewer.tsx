import React, { Fragment } from 'react';
import { useState } from 'react';
import {FileTypes,IFileTree} from "../interfaces";


type PropsViewer = {
    file?: IFileTree | null
}


export const Viewer: React.FC<PropsViewer> = ({file}) => {
    if (file) {
        return (
            <Fragment>
                {file.type === FileTypes.word ? <iframe src={file.path}></iframe> : JSON.stringify(file)}
            </Fragment>
        )
    } else {
        return null
    };
    
}