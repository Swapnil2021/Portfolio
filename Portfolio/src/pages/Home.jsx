import '@/App.css'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { ArrowRightIcon } from "@radix-ui/react-icons";
import SplitText from "@/components/Design/Split-text";
import { cn } from "@/lib/utils";
import ScrollReveal from '@/components/Design/scrollreveal';
import Threads from '@/components/Design/thread';
import RotatingText from '@/components/Design/rotationtext';
const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
export const Home= () =>{
    return(
        <>
        {/* introduction */}

        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Threads
  
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
   
  >
  <div className=" flex p-10 items-center justify-center dark">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Magic UI</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>

    {/* Hello 
     */}
    <SplitText
  text="Hi,I am Swapnil"
  className="text-5xl font-semibold p-40 font-bold font-['velista'] item-center"
  delay={15}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>     
 </Threads>
</div>



<div className="text-4xl font-semibold p-40 text-center p-{40px} ">
<ScrollReveal
  baseOpacity={1}
  enableBlur={true}
  baseRotation={10}
  blurStrength={100} 
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal></div>


  






        </>
    )
}