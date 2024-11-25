import SelectIcon from '@/assets/select-arrow.svg';

export const selectConfig = {
  defaultProps: {
    rightSection: <img src={SelectIcon} className="h-[20%]" alt="select arrow" />,
    radius: 6,
  },
  styles: (params: { size: string }) => ({
    input: {
      height: params.size === 'md' ? 48 : 'auto',
    },
    dropdown: {
      borderRadius: 6,
    },
  }),
};

export const textInputConfig = {
  styles: (params: { size: string }) => ({
    input: {
      height: params.size === 'md' ? 48 : 'auto',
      borderRadius: 6,
    },
    label: {
      color: '#555',
      marginBottom: 4,
    },
  }),
};

export const comboboxConfig = {
  defaultProps: {
    rightSection: <img src={SelectIcon} className="h-[20%]" alt="select arrow" />,
  },

  styles: () => ({
    dropdown: {
      borderRadius: 6,
    },
  }),
};

export const buttonConfig = {
  defaultProps: {
    radius: 6,
  },
  styles: (theme: any, params: { size: string; color: string }) => ({
    label: {
      fontSize: params.size === 'lg' ? 16 : 'auto',
      fontWeight: 500,
    },
    root: {
      backgroundColor: params.color === 'secondary' ? theme.colors.secondary[6] : 'auto',
      color: params.color === 'secondary' ? '#302f2f' : 'auto',
    },
  }),
};
