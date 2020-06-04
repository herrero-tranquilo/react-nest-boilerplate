import korTranslationMessages from './kor.json';
import engTranslationMessages from './eng.json';

export const DEFAULT_LOCALE = 'ko';

export const formatTranslationMessages = (
  locale: Locale,
  messages: Record<string, string>,
): Record<string, string> => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, korTranslationMessages)
      : {};
  const flattenFormattedMessages = (
    formattedMessages: Record<string, string>,
    key: string,
  ): Record<string, string> => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages: Record<Locale, Record<string, string>> = {
  ko: formatTranslationMessages('ko', korTranslationMessages),
  en: formatTranslationMessages('en', engTranslationMessages),
};
