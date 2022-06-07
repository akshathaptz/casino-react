import React from 'react';
class Footer extends React.Component {
   state = {

   };

   componentDidMount() {

   }


   render() {
      return (
         <footer className="footer width-full container-xl p-responsive" role="contentinfo"> 
            <div className="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
               <span>
                  © 2022 Casino
               </span>
            </div>
         </footer>
      );
   }
}
export default Footer;