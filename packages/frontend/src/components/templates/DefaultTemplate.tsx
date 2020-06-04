import React from 'react';

interface Props {
  article: React.ReactElement;
}
export default function DefaultTemplate({ article }: Props): JSX.Element {
  return <>{article}</>;
}
