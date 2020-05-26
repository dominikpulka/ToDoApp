import styled from 'styled-components/native';
import Layout from '../../constans/Layout';
import { Platform } from 'react-native';

export const HomeView = styled.ScrollView`
    background: #00CED1;
    min-height: 100%;
    padding-top: ${Layout.statusBar + 10}px;
`
export const HomeImage = styled.Image`
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 100px;
`
export const AccountLogoLeft = styled.Image`
    width: 150px;
    height: 100px;
`
export const AccountLogoRight = styled.Image`
    width: 150px;
    height: 100px;
    margin-left: 210px;
    margin-bottom: 50px;
`
export const AccountLogoMid = styled.Image`
    width: 150px;
    height: 100px;
    margin: 0 auto;
`