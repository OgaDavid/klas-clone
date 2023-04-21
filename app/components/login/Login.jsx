import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <label htmlFor="email">Email:</label>
            <motion.input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                whileHover={{ scale: 1.1 }}
                whileFocus={{ scale: 1.2 }}
            />
            <label htmlFor="password">Password:</label>
            <motion.input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                whileHover={{ scale: 1.1 }}
                whileFocus={{ scale: 1.2 }}
            />
            <motion.button type="submit" whileHover={{ scale: 1.1 }}>
                Login
            </motion.button>
        </motion.form>
    );
};

export default LoginForm;