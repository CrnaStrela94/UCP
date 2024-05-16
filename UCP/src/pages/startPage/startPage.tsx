import { useNavigate } from 'react-router-dom';
import RoundButton from '../../components/btn/btn';

export const StartPage = () => {
    const navigate = useNavigate();

    function handleClick(): void {
        navigate('/MakeProfile');
    }

    return (
        <>
            <div>startPage</div>
            <RoundButton svg="vite" onClick={handleClick} />
        </>
    );
}