import { logo } from '../assets_ai_summarizer/assets';

const Hero = () => {
  return (
    <header className='w-full flex just item flex-col'>
      <nav className='flex justify-between items-center flex-row'>
        {/* This is the info about hte Sumz logo */}
        <img src={logo} alt='sumz_logo'
        className='w-28 object-contain'/>

        {/* info about hte github button */}
        <button
          type='button'
          onClick={() => window.open('link to github')}
          className='black_btn'>
            Github
          </button>




      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br 
        className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>

      </h1>
      <h2 className='desc'>
        Why read when you can summarize?
      </h2>
    </header>
  )
}

export default Hero