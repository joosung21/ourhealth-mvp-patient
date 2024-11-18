import { useState } from 'react';
import { Combobox, Group, InputBase, Select, useCombobox } from '@mantine/core';
import { useLanguageStore } from '@/stores/useLanguageStore';

const languages = [
  { label: 'English', value: 'en', flagClassName: 'gb' },
  { label: 'Français', value: 'fr', flagClassName: 'fr' },
  { label: '한국어', value: 'ko', flagClassName: 'kr' },
  { label: '中文 (简体)', value: 'zh-CN', flagClassName: 'cn' },
];

export default function LanguagePicker() {
  const { language, changeLanguage } = useLanguageStore();

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(language);

  const options = languages.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <Group>
        <div className={`fi fi-${item.flagClassName} rounded`} />
        {item.label}
      </Group>
    </Combobox.Option>
  ));

  function getLabel(value: string) {
    return languages.find((item) => item.value === value)?.label || 'Select language';
  }

  function getFlag(value: string) {
    return languages.find((item) => item.value === value)?.flagClassName || '';
  }

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        changeLanguage(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          <Group>
            <div className={`fi fi-${getFlag(value || '')} rounded`} />
            {getLabel(value || '')}
          </Group>
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
