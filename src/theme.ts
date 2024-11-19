import { createTheme } from '@mantine/core';
import { buttonConfig, comboboxConfig, selectConfig, textInputConfig } from './themeComponent';

export const theme = createTheme({
  primaryColor: 'darkTeal', // 커스텀 primary color
  colors: {
    darkTeal: [
      '#E6F4F5',
      '#CCE9EA',
      '#B3DDE0',
      '#99D1D5',
      '#80C5CB',
      '#66BAC0',
      '#266770', // 버튼 색상
      '#1F545A',
      '#194245',
      '#123135',
    ],
    secondary: [
      '#F9F9E6', // 1단계
      '#F2F2BF', // 2단계
      '#ECEC99', // 3단계
      '#E5E573', // 4단계
      '#DEDE4D', // 5단계
      '#DCDC3A', // 6단계
      '#FFE03E', // 7단계 (버튼 색상)
      '#BEBE39', // 8단계
      '#9F9F28', // 9단계
      '#81811A', // 10단계
    ],
  },
  components: {
    Select: selectConfig,
    TextInput: textInputConfig,
    InputBase: textInputConfig,
    Button: buttonConfig,
    Combobox: comboboxConfig,
  },
});
