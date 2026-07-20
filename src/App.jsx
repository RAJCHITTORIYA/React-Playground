import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = ( ) =>
{

  const users = [
  {
    img : 'https://plus.unsplash.com/premium_photo-1745457820695-8e64b122c802?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2ZmZXNpb25hbHMlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', 
    intro : '',
    color : 'royalblue',
    tag : 'Satisfied'
  },
  {
    img : 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2ZmZXNpb25hbHMlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', 
    intro : '',
    color : 'lightseagreen',
    tag : 'UnderServed'

  },
  {
    img : 'https://images.unsplash.com/photo-1758762641372-e3b52bf061d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZmVzaW9uYWxzJTIwcGVvcGxlfGVufDB8fDB8fHww', 
    intro : '',
    color : 'green',
    tag : 'UnderBanked'

  },
  {
    
    img : 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', 
    intro : '',
    color : 'cyan',
    tag : 'UnderCover- Agent'

  },
  {
    
    img : 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', 
    intro : '',
    color : 'black',
    tag : 'Passionate'

  }
]
  return(
    <div >
      <Section1 users = {users}/>
      <Section2 />
    
    </div>
  );

}

export default App