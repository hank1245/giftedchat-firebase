import AppInner from './AppInner';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <AppInner />
    </RecoilRoot>
  );
};

export default App;
