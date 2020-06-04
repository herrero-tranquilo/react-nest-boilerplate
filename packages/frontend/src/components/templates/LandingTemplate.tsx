import React from 'react';

interface Props {
  article: React.ReactElement;
}
export default function LandingTemplate({ article }: Props): JSX.Element {
  return <>{article}</>;
}
