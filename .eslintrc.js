module.exports = {
    extends: 'airbnb',
    root: true, 
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        'ecmaVersion': 2015,
        'ecmaFeatures': {
            'jsx': true,
            'generators': true,
            'experimentalObjectRestSpread': true
        },
    },
    env: {
        browser: true,
    },
    
    rules: {
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'arrow-parens': 0,
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'import/no-unresolved': [0, { 'extensions': ['.js', '.jsx'] }],
        'import/extensions': [0, { 'extensions': ['.js', '.jsx'] }],
        'click-events-have-key-events': 0,
        "jsx-a11y/no-static-element-interactions":0,
        'jsx-a11y/click-events-have-key-events': 0

    }
}