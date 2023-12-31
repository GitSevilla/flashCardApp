import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./screens/MainComponent";
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <Provider store={store}>
      <Main />
      <Toast />
    </Provider>
  );
}

