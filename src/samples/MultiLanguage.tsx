import { useTranslation } from 'react-i18next';
import {
  Button,
  Center,
  Checkbox,
  Container,
  Grid,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core';
import LanguagePicker from '@/components/LanguagePicker/LanguagePicker';

export default function MultiLanguage() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>Multi-Language</h1>
      <div className="page-description">
        Multi-Language support using i18n and locale JSON files
      </div>
      <Paper shadow="xs" radius="md" p="xl">
        <Grid>
          <Grid.Col span={{ xs: 12, md: 4 }}>
            <LanguagePicker />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 8 }}>
            <Center>
              <div className="w-[400px]">
                <h1 className="text-[1.6rem] mb-4 text-center">{t('welcome')}</h1>
                <Paper radius="md" p="lg" withBorder>
                  <Stack>
                    <TextInput label={t('name')} placeholder={t('namePlaceholder')} withAsterisk />
                    <TextInput
                      label={t('email')}
                      placeholder={t('emailPlaceholder')}
                      withAsterisk
                    />
                    <TextInput label={t('phone_number')} placeholder="123-456-7890" withAsterisk />
                    <PasswordInput
                      label={t('create_password')}
                      placeholder={t('passwordPlaceholder')}
                      withAsterisk
                    />
                    <Checkbox label={t('agree_terms')} />
                    <Button type="submit" size="md" fullWidth>
                      {t('register')}
                    </Button>
                  </Stack>
                </Paper>
              </div>
            </Center>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}
