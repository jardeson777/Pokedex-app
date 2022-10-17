import theme from '@/global/styles/theme';
import { View } from 'react-native';
import styled from 'styled-components';

interface CardProps {
  variant: 'base' | 'full';
  backgroundColor: keyof typeof theme.colors;
}

export const Container = styled(View)<CardProps>``;
