import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/button/Button';
import { useBottomModal } from '../../hooks/use-bottom-modal';

const getStyles = () => {
  return StyleSheet.create({
    container: {},
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'red',
      minHeight: 200,
    },
  });
};

export interface TestBottomSheetProps {}
export const TestBottomSheet = (_: TestBottomSheetProps) => {
  const styles = useMemo(() => getStyles(), []);
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['20%', '50%'], []);

  const { openDrawer } = useBottomModal();

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    console.log(`handlePresentModalPress`, bottomSheetModalRef.current);
    bottomSheetModalRef.current?.present();
    bottomSheetModalRef.current?.expand();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleOpenDrawer = useCallback(async () => {
    console.log(`handleOpenDrawer`, openDrawer);
    const result = await openDrawer({
      title: 'This is Title',
      snapPoints: ['20%', '50%'],
      render: () => {
        return <Text>Drawer content</Text>;
      },
    });
    console.log(`handleOpenDrawer result`, result);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>Single use</Text>
        <Button onPress={handleOpenDrawer}>open drawer</Button>
      </View>
      <View>
        <Text>Within Provider</Text>
        <Button onPress={handlePresentModalPress}>Present Modal</Button>
        <BottomSheetModal
          // enableDynamicSizing
          ref={bottomSheetModalRef}
          enablePanDownToClose
          index={0}
          snapPoints={snapPoints}
          // containerStyle={{ backgroundColor: 'transparent' }}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </View>
  );
};
