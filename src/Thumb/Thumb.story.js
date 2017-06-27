import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumb from './Thumb';

const image1 =
  'https://randomuser.me/api/portraits/women/50.jpg';
const image2 =
  'https://randomuser.me/api/portraits/women/18.jpg';
const logo1 =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rohde_%26_Schwarz_Logo.svg/800px-Rohde_%26_Schwarz_Logo.svg.png';

const localImg = 'ktLb8Hqxo28WdToq5.jpg';

storiesOf('Thumb', module)
  .add('square image', () =>
    <Thumb height={60} image={image1} width={60} />,
  )
  .add('offline square image', () =>
    <Thumb
      height={60}
      image={image1}
      localImg={localImg}
      offlineEnabled={true}
      width={60}
    />,
  )
  .add('landscape logo', () =>
    <Thumb height={60} image={logo1} width={120} />,
  )
  .add('square white bg image', () =>
    <Thumb height={60} image={image2} width={60} />,
  )
  .add('icon placeholder', () =>
    <Thumb
      height={60}
      icon="user"
      iconGroup="linear"
      width={60}
    />,
  )
  .add('icon placeholder colored', () =>
    <Thumb
      height={60}
      icon="user"
      iconColor={'brand'}
      iconGroup="linear"
      width={60}
    />,
  )
  .add('icon placeholder dark bg', () =>
    <Thumb
      color={'neutral'}
      height={60}
      icon="user"
      iconColor={'white'}
      iconGroup="linear"
      width={60}
    />,
  )
  .add('icon placeholder small', () =>
    <Thumb
      height={30}
      icon="user"
      iconGroup="linear"
      width={30}
    />,
  )
  .add('square image 80', () =>
    <Thumb height={80} image={image1} width={80} />,
  )
  .add('square 80 icon placeholder', () =>
    <Thumb
      height={80}
      icon="user"
      iconGroup="linear"
      width={80}
    />,
  );
