import React, { DetailedHTMLProps, VideoHTMLAttributes } from 'react';
import Hls from 'hls.js';

export interface ReactHlsPlayerProps extends DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>  {
    url: string;
    autoplay?: boolean;
    controls?: boolean;
    hlsConfig?: Partial<Hls.Config>;
    /**
     * @deprecated All video properties can now be used from the root of the component
     */
    videoProps?: Partial<HTMLVideoElement>;
    playerRef?: React.Ref<any>;
    style?: React.CSSProperties;
    className?: string;
}

declare const ReactHlsPlayer: React.FunctionComponent<ReactHlsPlayerProps>

export default ReactHlsPlayer
