import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight, Layers3, Zap, ShieldCheck, CheckCircle2} from 'lucide-react';
import './styles.css';

const features=[
  {icon:<Layers3/>,title:'Simple by design',text:'A clear workspace that keeps your ideas and priorities in focus.'},
  {icon:<Zap/>,title:'Move faster',text:'Spend less time organising and more time making meaningful progress.'},
  {icon:<ShieldCheck/>,title:'Built to be reliable',text:'A thoughtful foundation that works smoothly across your devices.'}
];
function App(){return <div className="shell">
  <header><a className="logo" href="#home"><b>N</b> nova<span>studio</span></a><nav><a href="#features">Features</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a></header>
  <main>
    <section className="hero" id="home"><div className="copy"><div className="eyebrow"><i/> A BETTER WAY TO BUILD</div><h1>Make your next<br/><em>big idea</em> happen.</h1><p>Bring your ideas to life with a simple, focused approach. Everything you need to take the next step starts here.</p><div className="actions"><a className="button" href="#features">Explore features <ArrowUpRight size={17}/></a><a className="plain" href="#about">Discover our approach</a></div><small><CheckCircle2 size={16}/> Made for curious minds and ambitious teams</small></div>
    <div className="art"><div className="glow"></div><div className="back-card"><span>YOUR NEXT CHAPTER</span><div className="orbit"><b>N</b></div><strong>Ideas into action.</strong><small>One step at a time.</small></div><label>✦ Stay curious</label></div></section>
    <section className="intro" id="about"><b>LESS COMPLEXITY. MORE POSSIBILITY.</b><span>Good work starts with a clear direction.</span></section>
    <section className="features" id="features"><div className="heading"><div><div className="eyebrow">WHAT MAKES THE DIFFERENCE</div><h2>Everything starts<br/>with the <em>right foundation.</em></h2></div><p>Keep things straightforward, stay focused on what matters, and make progress you can feel good about.</p></div><div className="grid">{features.map((f,i)=><article key={f.title}><div className="feature-icon">{f.icon}</div><small>0{i+1}</small><h3>{f.title}</h3><p>{f.text}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Have an idea?<br/>Let's make it real.</h2></div><a className="light-button" href="mailto:hello@example.com">Get in touch <ArrowUpRight size={17}/></a></section>
  </main><footer><a className="logo" href="#home"><b>N</b> nova<span>studio</span></a><p>© 2026 Nova Studio. Built with React.</p><a href="#home">Back to top ↑</a></footer>
</div>}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
