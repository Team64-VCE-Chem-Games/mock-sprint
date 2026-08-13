export default function AuroraBackground() {
  return (
    <>
      <div className="aurora-bloom" style={{
        width: '700px', height: '700px',
        background: '#7BA7C2',
        top: '-150px', left: '-100px',
        animation: 'bloom1 10s ease-in-out infinite',
      }} />
      <div className="aurora-bloom" style={{
        width: '600px', height: '600px',
        background: '#A1C6EA',
        top: '20%', right: '-100px',
        animation: 'bloom2 13s ease-in-out infinite',
      }} />
      <div className="aurora-bloom" style={{
        width: '500px', height: '500px',
        background: '#C5D8E0',
        bottom: '-100px', left: '30%',
        animation: 'bloom3 11s ease-in-out infinite',
      }} />
      <div className="aurora-bloom" style={{
        width: '400px', height: '400px',
        background: '#89B4CC',
        bottom: '10%', left: '-50px',
        animation: 'bloom1 15s ease-in-out infinite',
        animationDelay: '-5s',
      }} />
    </>
  )
}