import { ThreeDots } from 'react-loader-spinner';

export default function Loading({ size }) {
    return (
        <ThreeDots color='#0f152b' secondaryColor="#b7b8bf" strokeWidth={5} height={size} width={size} />
    );
}