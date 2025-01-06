import AnimatedModal from '../Animations/AnimatedModal';
import Button from '../Animations/Button'

interface TypeChildren{
    close:()=>void;
}

export default function ThankModal({close}:TypeChildren) {
  return (
    <AnimatedModal className='w-[30rem] p-10 h-[20rem] flex flex-col justify-center items-center bg-white rounded-lg'>
        <img src="images/icon-check.svg" alt="chek icon" />
        <h2 className='text-3xl font-bold'>Thanks for your support!</h2>
        <p className='text-gray-400'> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
        an email once our campaign is completed.</p>
        <Button isHoverable={true} onClick={close} name=' Got it!' className='px-6 py-3 bg-emeraldLight rounded-3xl text-white font-bol'/>
    </AnimatedModal>
  )
}
