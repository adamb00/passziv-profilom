export default function Video() {
   return (
      <div className='bg-video'>
         <video className='bg-video__content' autoPlay muted loop playsInline>
            <source src='/8370142-sd_960_540_30fps.mp4' type='video/mp4' />
         </video>
      </div>
   );
}
