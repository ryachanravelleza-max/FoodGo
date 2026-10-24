import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function FoodGoLogo({ compact = false }: { compact?: boolean }) {
  return (
    <View style={[styles.logoContainer, compact && styles.compact]}>
      <View style={styles.badgeWrap}>
        <View style={styles.ring}>
          <View style={styles.motionLine1} />
          <View style={styles.motionLine2} />
          <View style={styles.motionLine3} />

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
    </View>
  );
}

const brandGreen = '#0e8f59';
const brandDarkGreen = '#0a5b3e';
const brandOrange = '#f46b1e';
const brandLightGreen = '#38b76d';
const ringShadow = '#0c6f48';

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 560,
  },
  compact: {
    maxWidth: 320,
  },
  badgeWrap: {
    width: 300,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  ring: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: brandGreen,
    borderWidth: 10,
    borderColor: brandLightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: ringShadow,
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  motionLine1: {
    position: 'absolute',
    top: 65,
    left: 18,
    width: 143,
    height: 15,
    borderRadius: 10,
    backgroundColor: brandDarkGreen,
    opacity: 0.9,
    transform: [{ rotate: '-12deg' }],
  },
  motionLine2: {
    position: 'absolute',
    top: 95,
    left: 28,
    width: 168,
    height: 15,
    borderRadius: 10,
    backgroundColor: brandDarkGreen,
    opacity: 0.8,
    transform: [{ rotate: '-12deg' }],
  },
  motionLine3: {
    position: 'absolute',
    top: 125,
    left: 22,
    width: 154,
    height: 15,
    borderRadius: 10,
    backgroundColor: brandDarkGreen,
    opacity: 0.75,
    transform: [{ rotate: '-12deg' }],
  },
  cloche: {
    width: 180,
    height: 90,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  clocheTop: {
    width: 150,
    height: 62,
    borderRadius: 35,
    backgroundColor: brandDarkGreen,
    borderWidth: 12,
    borderColor: '#0d7d57',
    position: 'absolute',
    top: 0,
  },
  clocheHandle: {
    position: 'absolute',
    top: 6,
    width: 110,
    height: 42,
    borderRadius: 32,
    borderWidth: 12,
    borderColor: '#0d7d57',
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    transform: [{ rotate: '0deg' }],
  },
  clocheBody: {
    position: 'absolute',
    bottom: 0,
    width: 146,
    height: 54,
    backgroundColor: brandDarkGreen,
    borderRadius: 22,
    borderWidth: 8,
    borderColor: '#0d7d57',
    shadowColor: '#002b1d',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  pin: {
    position: 'absolute',
    bottom: -15,
    width: 0,
    height: 0,
    borderLeftWidth: 82,
    borderRightWidth: 82,
    borderBottomWidth: 120,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: brandGreen,
    transform: [{ rotate: '180deg' }],
  },
  wordmarkWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 8,
    width: '100%',
  },
  foodText: {
    color: brandDarkGreen,
    fontSize: 72,
    fontWeight: '900',
    letterSpacing: -4,
    lineHeight: 72,
  },
  goText: {
    color: brandOrange,
    fontSize: 72,
    fontWeight: '900',
    letterSpacing: -4,
    lineHeight: 72,
  },
});
