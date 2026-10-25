import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const brandGreen = '#0e8f59';
const brandDarkGreen = '#0a573d';
const brandOrange = '#f5691f';
const brandLightGreen = '#67c78d';
const screen = '#f3f3f3';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.hero}>
        <View style={styles.logoStack}>
          <View style={styles.motionTrack}>
            <View style={[styles.motionLine, styles.motionLineOne]} />
            <View style={[styles.motionLine, styles.motionLineTwo]} />
            <View style={[styles.motionLine, styles.motionLineThree]} />
          </View>

          <View style={styles.logoBadge}>
            <View style={styles.logoRing}>
              <View style={styles.cloche}>
                <View style={styles.clocheTop} />
                <View style={styles.clocheHandle} />
                <View style={styles.clocheBody} />
              </View>
            </View>
          </View>

          <View style={styles.pin} />
        </View>

        <View style={styles.wordmarkWrap}>
          <Text style={styles.foodText}>Food</Text>
          <Text style={styles.goText}>Go</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: screen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  logoStack: {
    width: 360,
    height: 360,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  motionTrack: {
    position: 'absolute',
    left: 16,
    top: 92,
    width: 220,
    height: 140,
    justifyContent: 'space-between',
  },
  motionLine: {
    height: 14,
    borderRadius: 12,
    backgroundColor: brandDarkGreen,
    transform: [{ rotate: '-12deg' }],
  },
  motionLineOne: {
    width: 128,
    opacity: 0.85,
  },
  motionLineTwo: {
    width: 150,
    opacity: 0.72,
    marginLeft: 18,
  },
  motionLineThree: {
    width: 132,
    opacity: 0.58,
    marginLeft: 8,
  },
  logoBadge: {
    width: 272,
    height: 272,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logoRing: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: brandGreen,
    borderWidth: 12,
    borderColor: brandLightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0b6d45',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 8,
  },
  cloche: {
    width: 180,
    height: 120,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 18,
  },
  clocheTop: {
    position: 'absolute',
    top: 0,
    width: 130,
    height: 58,
    borderRadius: 32,
    backgroundColor: brandDarkGreen,
    borderWidth: 8,
    borderColor: '#0b7d56',
  },
  clocheHandle: {
    position: 'absolute',
    top: 6,
    width: 90,
    height: 28,
    borderRadius: 28,
    borderWidth: 8,
    borderColor: '#0b7d56',
    borderBottomWidth: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    backgroundColor: 'transparent',
  },
  clocheBody: {
    position: 'absolute',
    bottom: 0,
    width: 150,
    height: 54,
    borderRadius: 24,
    backgroundColor: brandDarkGreen,
    borderWidth: 8,
    borderColor: '#0b7d56',
  },
  pin: {
    position: 'absolute',
    bottom: 6,
    width: 0,
    height: 0,
    borderLeftWidth: 88,
    borderRightWidth: 88,
    borderBottomWidth: 140,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: brandGreen,
    transform: [{ rotate: '180deg' }],
  },
  wordmarkWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: -4,
    width: '100%',
    paddingHorizontal: 16,
  },
  foodText: {
    color: brandDarkGreen,
    fontSize: 104,
    lineHeight: 104,
    fontWeight: '900',
    letterSpacing: -8,
  },
  goText: {
    color: brandOrange,
    fontSize: 104,
    lineHeight: 104,
    fontWeight: '900',
    letterSpacing: -8,
  },
});
