import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './app/App';

import './i18n';

const updateSW = registerSW({
  onNeedRefresh() {
    // 사용자가 새 버전을 사용할 준비가 되었을 때 처리
    // 예: 사용자에게 새로고침을 요청하는 UI 표시
  },
  onOfflineReady() {
    // 오프라인 사용 준비 완료 시 처리
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
