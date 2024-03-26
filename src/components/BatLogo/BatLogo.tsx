import React from 'react';
import { Text, Image } from 'react-native';
import batLogo from '../../../assets/bat-logo.png'
import { styles } from './BatLogoStayles';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image source={batLogo} style={styles.batLogo}/>
    </>
  );
}