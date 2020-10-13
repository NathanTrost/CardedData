import * as React from 'react';

export interface ColumnLabelsProps {
    /**
     * Child of component.
     */
    children?: React.ReactNode;
    /**
     * Fire onFilter function.
     */
    onFilter?: (...args: any[])=>any;
}

declare const ColumnLabels: React.FC<ColumnLabelsProps>;

export default ColumnLabels;

