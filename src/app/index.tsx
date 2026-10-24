import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const brandGreen = '#0e8f59';
const brandDarkGreen = '#0a5b3e';
const brandOrange = '#f46b1e';
const brandLightGreen = '#7cc9a0';
const shell = '#f3f3f3';
const screen = '#f7f7f4';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topBar}>
        <Text style={styles.time}>9:18 PM</Text>

        <View style={styles.statusCluster}>
          <View style={styles.signalRow}>
            <View style={styles.signalDot} />
            <View style={styles.signalDot} />
            <View style={styles.signalDot} />
            <View style={styles.signalDot} />
          </View>
          <View style={styles.batteryWrap}>
            <View style={styles.batteryBody}>
              <View style={styles.batteryFill} />
            </View>
            <View style={styles.batteryTip} />
          </View>
          <Text style={styles.statusText}>4G</Text>
        </View>
      </View>

      <View style={styles.hero}>
        <View style={styles.logoWrap}>
          <View style={styles.logoBadge}>
            <View style={styles.logoRing}>
              <View style={styles.motionLineOne} />
              <View style={styles.motionLineTwo} />
              <View style={styles.motionLineThree} />

              <View style={styles.cloche}>
                <View style={styles.clocheTop} />
                <View style={styles.clocheHandle} />
                <View style={styles.clocheBody} />
              </View>
            </View>
            <View style={styles.pin} />
          </View>

          <View style={styles.wordmarkWrap}>
            <Text style={styles.foodText}>Food</Text>
            <Text style={styles.goText}>Go</Text>
          </View>

          <View style={styles.taglineWrap}>
            <Text style={styles.tagline}>Good Food, Good Mood</Text>
            <View style={styles.taglineUnderline} />
          </View>
        </View>

        <View style={styles.sceneWrap}>
          <View style={styles.burger}>
            <View style={styles.burgerBunTop} />
            <View style={styles.burgerLettuce} />
            <View style={styles.burgerPatty} />
            <View style={styles.burgerCheese} />
            <View style={styles.burgerBottom} />
            <View style={styles.burgerSeed1} />
            <View style={styles.burgerSeed2} />
            <View style={styles.burgerSeed3} />
          </View>

          <View style={styles.pizzaWrap}>
            <View style={styles.pizzaSlice}>
              <View style={styles.pizzaPepperoni} />
              <View style={styles.pizzaPepperoniTwo} />
              <View style={styles.pizzaPepperoniThree} />
            </View>
          </View>

          <View style={styles.drinkWrap}>
            <View style={styles.drinkCup}>
              <View style={styles.drinkBoba1} />
              <View style={styles.drinkBoba2} />
              <View style={styles.drinkBoba3} />
              <View style={styles.drinkLid} />
            </View>
            <View style={styles.drinkStraw} />
          </View>

          <View style={styles.scooterWrap}>
            <View style={styles.scooterBody}>
              <View style={styles.scooterCabin} />
              <View style={styles.scooterBox} />
            </View>
            <View style={styles.scooterWheel} />
            <View style={styles.scooterWheelTwo} />
            <View style={styles.scooterHandle} />
            <View style={styles.scooterSeat} />
          </View>
        </View>

        <View style={styles.progressDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <View style={styles.bottomCurve} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: screen,
    position: 'relative',
  },
  topBar: {
    width: '100%',
    paddingHorizontal: 26,
    paddingTop: 12,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 18,
    fontWeight: '700',
    color: brandDarkGreen,
    letterSpacing: -0.7,
  },
  statusCluster: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 18,
    gap: 2,
  },
  signalDot: {
    width: 3,
    borderRadius: 2,
    backgroundColor: brandDarkGreen,
    height: 3 + (Math.random() * 9),
  },
  batteryWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  batteryBody: {
    width: 20,
    height: 11,
    borderRadius: 3,
    borderWidth: 1.2,
    borderColor: brandDarkGreen,
    padding: 1,
    justifyContent: 'center',
  },
  batteryFill: {
    width: '75%',
    height: '70%',
    borderRadius: 2,
    backgroundColor: brandDarkGreen,
  },
  batteryTip: {
    width: 2,
    height: 6,
    borderRadius: 1,
    backgroundColor: brandDarkGreen,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: brandDarkGreen,
    letterSpacing: 0.4,
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 18,
  },
  logoWrap: {
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  logoBadge: {
    width: 270,
    height: 210,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logoRing: {
    width: 205,
    height: 205,
    borderRadius: 100,
    backgroundColor: brandGreen,
    borderWidth: 10,
    borderColor: brandLightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0c6f48',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 8,
  },
  motionLineOne: {
    position: 'absolute',
    top: 52,
    left: 18,
    width: 124,
    height: 14,
    borderRadius: 10,
    backgroundColor: brandDarkGreen,
    opacity: 0.9,
    transform: [{ rotate: '-12deg' }],
  },
  motionLineTwo: {
    position: 'absolute',
    top: 80,
    left: 26,
    width: 148,
    height: 14,
    borderRadius: 10,
    backgroundColor: brandDarkGreen,
    opacity: 0.75,
    transform: [{ rotate: '-12deg' }],
  },
  motionLineThree: {
    position: 'absolute',
    top: 108,
    left: 18,
    width: 134,
    height: 14,
    borderRadius: 10,
    backgroundColor: brandDarkGreen,
    opacity: 0.6,
    transform: [{ rotate: '-12deg' }],
  },
  cloche: {
    width: 148,
    height: 86,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  clocheTop: {
    width: 116,
    height: 52,
    borderRadius: 28,
    backgroundColor: brandDarkGreen,
    borderWidth: 10,
    borderColor: '#0d7d57',
    position: 'absolute',
    top: 0,
  },
  clocheHandle: {
    position: 'absolute',
    top: 6,
    width: 88,
    height: 30,
    borderRadius: 28,
    borderWidth: 10,
    borderColor: '#0d7d57',
    borderBottomWidth: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
  },
  clocheBody: {
    position: 'absolute',
    bottom: 0,
    width: 120,
    height: 44,
    backgroundColor: brandDarkGreen,
    borderRadius: 20,
    borderWidth: 7,
    borderColor: '#0d7d57',
  },
  pin: {
    position: 'absolute',
    bottom: -10,
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 96,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: brandGreen,
    transform: [{ rotate: '180deg' }],
  },
  wordmarkWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: -10,
  },
  foodText: {
    color: brandDarkGreen,
    fontSize: 82,
    fontWeight: '900',
    letterSpacing: -4,
    lineHeight: 82,
  },
  goText: {
    color: brandOrange,
    fontSize: 82,
    fontWeight: '900',
    letterSpacing: -4,
    lineHeight: 82,
  },
  taglineWrap: {
    alignItems: 'center',
    marginTop: 6,
    position: 'relative',
  },
  tagline: {
    color: brandDarkGreen,
    fontSize: 28,
    fontWeight: '700',
    fontStyle: 'italic',
    letterSpacing: -1,
  },
  taglineUnderline: {
    width: 240,
    height: 4,
    backgroundColor: brandOrange,
    borderRadius: 999,
    marginTop: -2,
  },
  sceneWrap: {
    width: '100%',
    height: 280,
    marginTop: 10,
    position: 'relative',
  },
  burger: {
    position: 'absolute',
    left: 18,
    top: 82,
    width: 130,
    height: 110,
    transform: [{ rotate: '-12deg' }],
  },
  burgerBunTop: {
    position: 'absolute',
    top: 6,
    left: 14,
    width: 100,
    height: 40,
    backgroundColor: '#f8c76e',
    borderRadius: 30,
    borderBottomWidth: 8,
    borderBottomColor: '#e0ad51',
  },
  burgerLettuce: {
    position: 'absolute',
    top: 38,
    left: 18,
    width: 92,
    height: 15,
    backgroundColor: '#6ec56a',
    borderRadius: 15,
  },
  burgerPatty: {
    position: 'absolute',
    top: 52,
    left: 20,
    width: 88,
    height: 18,
    backgroundColor: '#522e18',
    borderRadius: 12,
  },
  burgerCheese: {
    position: 'absolute',
    top: 58,
    left: 26,
    width: 76,
    height: 12,
    backgroundColor: '#fbe763',
    borderRadius: 5,
  },
  burgerBottom: {
    position: 'absolute',
    top: 70,
    left: 12,
    width: 104,
    height: 24,
    backgroundColor: '#e6a13a',
    borderRadius: 16,
    borderBottomWidth: 8,
    borderBottomColor: '#d98c2a',
  },
  burgerSeed1: {
    position: 'absolute',
    top: 18,
    left: 42,
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  burgerSeed2: {
    position: 'absolute',
    top: 24,
    left: 76,
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: '#f0f0f0',
  },
  burgerSeed3: {
    position: 'absolute',
    top: 12,
    left: 62,
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: '#f0f0f0',
  },
  pizzaWrap: {
    position: 'absolute',
    right: 72,
    top: 12,
    width: 110,
    height: 110,
    transform: [{ rotate: '4deg' }],
  },
  pizzaSlice: {
    width: 110,
    height: 110,
    backgroundColor: '#f2d599',
    borderRadius: 18,
    transform: [{ rotate: '45deg' }],
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  pizzaPepperoni: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#de5c3f',
    left: 30,
    top: 24,
  },
  pizzaPepperoniTwo: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#de5c3f',
    left: 52,
    top: 44,
  },
  pizzaPepperoniThree: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#de5c3f',
    left: 30,
    top: 66,
  },
  drinkWrap: {
    position: 'absolute',
    right: 18,
    top: 0,
    width: 110,
    height: 140,
    alignItems: 'center',
  },
  drinkCup: {
    position: 'absolute',
    right: 10,
    top: 18,
    width: 72,
    height: 96,
    backgroundColor: '#f8f9f6',
    borderRadius: 16,
    borderWidth: 4,
    borderColor: '#d0d7d5',
    overflow: 'hidden',
  },
  drinkLid: {
    position: 'absolute',
    top: -12,
    left: 3,
    width: 62,
    height: 18,
    backgroundColor: '#cfcfb8',
    borderRadius: 12,
    borderWidth: 4,
    borderColor: '#d0d7d5',
  },
  drinkBoba1: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#171013',
    left: 14,
    top: 28,
  },
  drinkBoba2: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#171013',
    left: 28,
    top: 42,
  },
  drinkBoba3: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#171013',
    left: 42,
    top: 30,
  },
  drinkStraw: {
    position: 'absolute',
    right: 54,
    top: -8,
    width: 4,
    height: 70,
    backgroundColor: '#0b2d2b',
    borderRadius: 8,
    transform: [{ rotate: '12deg' }],
  },
  scooterWrap: {
    position: 'absolute',
    left: 90,
    right: 90,
    bottom: 0,
    height: 160,
  },
  scooterBody: {
    position: 'absolute',
    left: 40,
    right: 62,
    bottom: 28,
    height: 74,
    backgroundColor: brandGreen,
    borderRadius: 26,
    borderWidth: 6,
    borderColor: '#0b6c48',
    transform: [{ rotate: '1deg' }],
  },
  scooterCabin: {
    position: 'absolute',
    left: 54,
    top: -20,
    width: 100,
    height: 54,
    backgroundColor: '#0f9062',
    borderRadius: 22,
    borderWidth: 6,
    borderColor: '#0b6c48',
  },
  scooterBox: {
    position: 'absolute',
    left: 26,
    top: 18,
    width: 110,
    height: 40,
    backgroundColor: brandDarkGreen,
    borderRadius: 12,
    opacity: 0.1,
  },
  scooterWheel: {
    position: 'absolute',
    left: 56,
    bottom: 0,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#254d3d',
    borderWidth: 10,
    borderColor: '#0d4f3b',
  },
  scooterWheelTwo: {
    position: 'absolute',
    right: 44,
    bottom: 0,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#254d3d',
    borderWidth: 10,
    borderColor: '#0d4f3b',
  },
  scooterHandle: {
    position: 'absolute',
    left: 118,
    bottom: 92,
    width: 55,
    height: 8,
    borderRadius: 6,
    backgroundColor: '#0d4f3b',
    transform: [{ rotate: '-25deg' }],
  },
  scooterSeat: {
    position: 'absolute',
    left: 140,
    bottom: 95,
    width: 34,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#0d4f3b',
    transform: [{ rotate: '16deg' }],
  },
  progressDots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginTop: 10,
    marginBottom: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#6ebc99',
    opacity: 0.8,
  },
  dotActive: {
    width: 18,
    height: 18,
    backgroundColor: brandGreen,
  },
  bottomCurve: {
    position: 'absolute',
    right: -40,
    left: -40,
    bottom: -110,
    height: 220,
    backgroundColor: '#0e8f59',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
  },
});
