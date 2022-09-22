module.exports = (kebabCaseName, paschalCaseName) => ({
  content: `
import React from 'react';
import styles from './${kebabCaseName}.module.scss';

interface ${paschalCaseName}Props {
    // add prop types for components here
}

export function ${paschalCaseName}({
  ...props
}:${paschalCaseName}Props) {
  return (
    <div {...props} data-testid="${kebabCaseName}" className={styles['${kebabCaseName}']}>
       your generated component
    </div>
  )
};

`,
  extension: '.component.tsx',
});
