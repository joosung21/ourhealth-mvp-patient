import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'darkTeal', // 커스텀 primary color
  colors: {
    // darkTeal: [
    //   '#E5F7F6', // 단계 1: 조금 더 밝고 선명한 청록색
    //   '#C7EBEB', // 단계 2
    //   '#A9DEDE', // 단계 3
    //   '#8CD2D2', // 단계 4
    //   '#6FC5C5', // 단계 5
    //   '#53B8B8', // 단계 6
    //   '#389B9B', // 단계 7
    //   '#2C8080', // 단계 8
    //   '#2A6469', // 단계 9: 중간 어두운 청록색
    //   '#1B484D', // 단계 10: 어두운 단계
    // ],
    darkTeal: [
      '#DDECEC', // 단계 1: 약간 어두운 청록색
      '#BDD9D9', // 단계 2
      '#9DC6C6', // 단계 3
      '#7CB3B3', // 단계 4
      '#5CA0A0', // 단계 5: 중간 밝기
      '#478C8C', // 단계 6
      '#347878', // 단계 7
      '#2B6161', // 단계 8
      '#234E52', // 단계 9: 더 어두운 청록색
      '#1A3A3E', // 단계 10: 가장 어두운 색상
    ],
    secondary: [
      '#F9F9E6',
      '#F2F2BF',
      '#ECEC99',
      '#E5E573',
      '#DEDE4D', // 중간 단계
      '#BEBE39',
      '#9F9F28',
      '#81811A',
      '#63630F', // 어두운 단계
      '#4A4A07',
    ],
  },
});
