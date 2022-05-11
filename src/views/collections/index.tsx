
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';

export const CollectionsView: FC = ({ }) => {

  return (
    <div className="items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-[30px] mb-[30px]">
            <h1>NFT Collections</h1>
            <img className="w-[200px] h-[200px] rounded-[100px]" src='https://i.picsum.photos/id/397/536/354.jpg?hmac=8UQkZUmuPJ4LkdA-5RTxg-Uuv3L5J-eAssr2Sbed1Xc' />
            <h1>BoredApe Club</h1>
        </div>
        <div className="flex flex-row justify-center space-x-10">
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-[100px] h-[100px] bg-[#C4C4C4] rounded-[100px]">
                    <h2>8888</h2>
                </div>
                <h2>Users</h2>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-[100px] h-[100px] bg-[#C4C4C4] rounded-[100px]">
                    <h2>8888</h2>
                </div>
                <h2>Owner</h2>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-[100px] h-[100px] bg-[#C4C4C4] rounded-[100px]">
                    <h2>8888</h2>
                </div>
                <h2>Floor Price</h2>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-[100px] h-[100px] bg-[#C4C4C4] rounded-[100px]">
                    <h2>8888</h2>
                </div>
                <h2>Volume Traded</h2>
            </div>
            
        </div>
        
    </div>
  );
};
