import 'react-native'
import renderer from 'react-test-renderer'
import React from 'react'
import App from './screens/App';

test('renders correctly', () => {
    const tree = renderer.create(
        <App/>,
    );
    expect(tree).toBeDefined()
});
