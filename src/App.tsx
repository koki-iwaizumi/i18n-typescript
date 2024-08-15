import './i18n/config';
import { useTranslation, Trans } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    const count = 3;

    return (
        <div className="App">
            <p>{t('title', { name: 'John' })}</p>
            <p>{t('description.part1')}</p>
            <p>{t('description.part2')}</p>
        </div>
    );
}

export default App;
