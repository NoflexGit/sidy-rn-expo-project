import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Link href="/home" className="text-amber-50">
        Go to home
      </Link>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
