import React from 'react'
import { StyleSheet, View } from 'react-native'
import withCacheBust from './withCacheBust'
import SectionFlex from './SectionFlex'
import FastImage from 'react-native-fast-image'
import Section from './Section'
import FeatureText from './FeatureText'

const GIF_URL =
    'https://cdn-images-1.medium.com/max/1600/1*-CY5bU4OqiJRox7G00sftw.gif'

const GifExample = ({ onPressReload, bust }) => (
    <View>
        <Section>
            <FeatureText text="• GIF support." />
        </Section>
        <SectionFlex onPress={onPressReload}>
            <FastImage style={styles.image} source={{ uri: GIF_URL + bust }} />
        </SectionFlex>
    </View>
)

const styles = StyleSheet.create({
    image: {
        backgroundColor: '#ccc',
        margin: 25,
        height: 170,
        flex: 1,
    },
})

export default withCacheBust(GifExample)
