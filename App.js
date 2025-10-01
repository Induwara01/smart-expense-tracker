import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigation';
import './global.css';

export default function App() {
	return (
		<SafeAreaProvider>
			<RootNavigator />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
}
