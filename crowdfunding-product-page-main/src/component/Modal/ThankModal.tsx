import AnimatedModal from '../Animations/AnimatedModal';
import Button from '../Animations/Button'

interface TypeChildren{
    close:()=>void;
}

export default function ThankModal({close}:TypeChildren) {
  return (
    <AnimatedModal className='md:w-[34rem] md:p-10 md:h-[30rem] md:mx-0 mx-3  flex flex-col justify-center items-center bg-white rounded-lg'>
        <img src="images/icon-check.svg" className='my-3' alt="chek icon" />
        <h2 className='text-3xl my-2 font-bold'>Thanks for your support!</h2>
        <p className='text-gray-400 my-2'> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
        an email once our campaign is completed.</p>
        <Button isHoverable={true} onClick={close} name=' Got it!' className='px-6 py-3 bg-emeraldLight my-3 rounded-3xl text-white font-bol'/>
    </AnimatedModal>
  )
}
