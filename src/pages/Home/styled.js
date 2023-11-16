import styled from 'styled-components';

//import { theme } from '@sitecore-search/ui';

export const HeroContainer = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;

export const HeroRow = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

export const HeroWrapper = styled.div`
  max-width: 1920px;
  margin: auto;
  background-image: url(https://www.uwa.edu.au/-/media/project/uwa/uwa/global/hero-images/domestic-recruitment---homepage-hero--1920_x_432.jpg?w=1440&hash=4D8C2A37A704376CD61ABD116AF68B3E);
  min-height: 324px;
  height: 324px;
  background-position: center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const Darken = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.3);
`;

export const HeroContentWrapper = styled.div`
    max-width: 1056px;
    margin: 0 auto;
    height: 324px;
    position: relative;

    h1 {
        color: #fff;
    }
`;

export const HeroContentRow = styled.div`
    min-height: 324px;
    margin: 0;
    display: table;
`;

export const HeroAlignCenter = styled.div`
    display: table-cell;
    vertical-align: middle;
    max-width: 66.66667%;
`;