import {  useAuth } from '@realm/react';
import React from 'react'
import { View, Text } from "react-native"

export const Login = () => {
    const { logInWithAnonymous, result } = useAuth();
    logInWithAnonymous();
    return (
        <View>
            <Text>Logging In</Text>
            {result.error && <Text>{result.error.message}</Text>}
        </View>
    );
}