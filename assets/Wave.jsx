import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Wave = () => {
    // Obtener el 60% de la altura de la pantalla (puedes ajustar este porcentaje)
    const screenHeight = Dimensions.get('window').height;
    const waveHeight = screenHeight * 0.6; // 60% de la altura de la pantalla

    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 1440 ${waveHeight}`} height={waveHeight - 290}>
            <Defs>
                <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0%" stopColor="#0099ff" stopOpacity="1" />
                    <Stop offset="100%" stopColor="#ff66cc" stopOpacity="1" />
                </LinearGradient>
            </Defs>
            <Path 
                fill="url(#grad1)" // Aplica el degradado
                d={`M0,${waveHeight}L48,${waveHeight-32}C96,${waveHeight-64},192,${waveHeight-128},288,${waveHeight-144}
                    C384,${waveHeight-160},480,${waveHeight-128},576,${waveHeight-101.3}C672,${waveHeight-74},768,${waveHeight-52},
                    864,${waveHeight-84.7}C960,${waveHeight-116},1056,${waveHeight-202},1152,${waveHeight-201.7}
                    C1248,${waveHeight-202},1344,${waveHeight-116},1392,${waveHeight-74.7}L1440,${waveHeight-32}L1440,0L1392,0
                    C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,
                    96,0,48,0L0,0Z`}
            />
        </Svg>
    );
};

export default Wave;
