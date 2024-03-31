/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';

function Section({ children, title }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleColorMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}
            >
                {children}
            </Text>
        </View>
    );
}

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };

    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
    ]);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <ToDoList tasks={tasks} />
            </ScrollView>
            <ToDoForm addTask={addTask}/>
        </SafeAreaView>
    );
}

export default App;