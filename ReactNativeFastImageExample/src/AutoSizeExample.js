import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import withCacheBust from './withCacheBust'
import SectionFlex from './SectionFlex'
import FastImage from 'react-native-fast-image'
import Section from './Section'
import FeatureText from './FeatureText'

const GIF_URL =
    'https://cdn-images-1.medium.com/max/1600/1*-CY5bU4OqiJRox7G00sftw.gif'

class AutoSizingImage extends Component {
    state = {
        height: 10,
        width: 10,
    }

//    onLoad = e => {
//        const {
//            nativeEvent: { width, height },
//        } = e
//        this.setState({ width, height })
//        if (this.props.onLoad) this.props.onLoad(e)
//    }

    getHeight = () => {
        if (!this.state.height) return this.props.defaultHeight
        const ratio_ = this.state.height / this.state.width
        const height = this.props.width * ratio_
        return height
    }

    render() {
        const height = this.getHeight()
        return (
            <FastImage
                {...this.props}
                onLoad={this.onLoad}
                style={[{ width: this.props.width, height }, this.props.style]}
            />
        )
    }
}

AutoSizingImage.defaultProps = {
    defaultHeight: 200,
}

const AutoSizeExample = ({ onPressReload, bust }) => (
    <View>
        <Section>
            <FeatureText text="• AutoSize." />
        </Section>
        <SectionFlex onPress={onPressReload}>
            <AutoSizingImage
                style={styles.image}
                width={250}
                source={{ uri: GIF_URL + bust }}
            />
        </SectionFlex>
    </View>
)

const styles = StyleSheet.create({
    image: {
        backgroundColor: '#eee',
        margin: 40,
        flex: 0,
    },
})

export default withCacheBust(AutoSizeExample)
