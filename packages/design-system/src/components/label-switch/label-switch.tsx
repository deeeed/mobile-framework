import React, { useMemo } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { Switch, Text } from 'react-native-paper';
import { AppTheme } from '../../hooks/use-app-theme-setup';
import { useTheme } from '../../providers/theme-provider';

const getStyle = (theme: AppTheme) => {
  return {
    container: {
      display: 'flex' as const,
      flexDirection: 'row' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'center' as const,
      padding: 10,
      margin: 10,
      backgroundColor: theme.colors.background,
    },
    label: {
      paddingRight: 10,
    },
  };
};

export interface LabelSwitchProps {
  label: string;
  value: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onValueChange: (value: boolean) => void;
}

export const LabelSwitch = ({
  label,
  value,
  containerStyle,
  onValueChange,
}: LabelSwitchProps) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyle(theme), [theme]);

  return (
    <Pressable
      style={[styles.container, containerStyle ? containerStyle : undefined]}
      onPress={() => onValueChange(!value)}
    >
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </Pressable>
  );
};
