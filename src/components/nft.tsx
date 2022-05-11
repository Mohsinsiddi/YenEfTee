import React from 'react';
import NftCards from './Cards'
function Nft() {
    return (
      
      <div className="contacts">
      <NftCards
          img="https://picsum.photos/seed/picsum/200/300" 
          name="Mr. W"
          title="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
      />
      <NftCards 
          img="https://picsum.photos/seed/picsum/200/300"
          name="F"
          title="(212) 555-2345"
          email="fluff@me.com"
      />
      <NftCards 
          img="https://picsum.photos/seed/picsum/200/300"
          name="Fex"
          title="(212) 555-4567"
          email="thecat@hotmail.com"
      />
      <NftCards 
          img="https://picsum.photos/seed/picsum/200/300"
          name="Pn"
          title="(080"
          email="pumpkin@gmail.com"
      />
  </div>
  )
  }
  
  export default Nft;



  