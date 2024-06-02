import React, { FC } from 'react';
import styles from './TemplateName.module.scss';
import {ITemplateNameProps} from './types.ts';

export interface TemplateNameProps {}

export const TemplateName:FC<ITemplateNameProps> = ({ }): JSX.Element => (
  <div className={styles.templateName} data-testid="TemplateName">
    TemplateName Component
  </div>
);
