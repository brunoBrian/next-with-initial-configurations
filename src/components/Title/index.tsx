import React from 'react';

import * as Styles from './style';

export type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return (
    <Styles.Container>
      <Styles.Text>{text}</Styles.Text>
    </Styles.Container>
  );
}
