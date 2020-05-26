import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

import Layout from '../../../constans/Layout';
import Colors from '../../../constans/Colors';
import { HomeView, HomeImage } from '../../../components/StyledComponents.tsx';

const WelcomeText = styled.Text`
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 50px;
    font-size: 16px;
    font-style: italic;
    color: ${Colors.black};
`;

interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props) =>{

    return(
        <HomeView>
            <HomeImage
                source={require('../../../assets/rafa.png')}
            />
            <WelcomeText>Pierwsze budowle rafowe pojawiły się we wczesnym kambrze i utworzone były przez archeocjaty bez udziału koralowców. W ordowiku, sylurze i dewonie rafy tworzyły głównie gąbki (zwłaszcza stromatoporoidy) i koralowce, głównie denkowe. W permie większość raf budowały mszywioły wraz z wieloszczetami, gąbkami i dużymi, bentonicznymi otwornicami. Koralowce były wówczas podrzędnym składnikiem raf. W mezozoiku główną grupą rafotwórczą były gąbki wspólnie z sinicami i glonami budujące pokaźne rafy. W jurze i kredzie dość liczne były też rafy koralowe, a w kredzie późnej rafy utworzone przez duże małże rudysty. W kenozoiku główną grupą rafotwórczą są koralowce oraz glony, szczególnie krasnorosty.
            Rafy koralowe zajmują jedynie 0,1% dna morskiego, ale w różnym stopniu zależy od nich ok. 25% wszystkich morskich gatunków, z których wiele stanowi podstawowe źródło pokarmu dla wielu społeczności ludzkich. Rafy stanowią również naturalne falochrony, silnie tłumiące energię i redukujące wysokość fal. Są również przedmiotem turystyki. Według naukowców od raf zależne, pośrednio lub bezpośrednio, ok. 500 milionów ludzi, a rafy generują dochody dla światowej gospodarki rzędu 30 mld USD.
            </WelcomeText>
        </HomeView>
    )
}

export default Home;