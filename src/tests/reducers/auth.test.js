import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = 'abc123';
    const action = {
        type: 'LOGIN',
        uid
    };

    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({ uid: 'abc123' }, action);
    expect(state).toEqual({});
});