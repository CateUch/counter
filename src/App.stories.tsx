import App from './App';
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ReduxStoreProviderDecorator } from './stories/decorators/ReduxStoreProviderDecorator';


export default {
    title: 'App',
    component: App,
    argsTypes: {},
    decorators: [ReduxStoreProviderDecorator]
} as Meta

export const AppExample: Story = (args) => {
    return (<App {...args}/>)
}