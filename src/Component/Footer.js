import React from "react";
  const myYear=new Date().getFullYear()
  export default function Footer()
  {
    return(
      <div className="foot">
        <div className="Footer">
            <p className="mybottom">We have qualified pharmacists,who empower patients through tackling illness,boosting their confidence and advising patients on all matters concerning health</p>
        </div>
        <hr className="hr"></hr>
        <div>
          <p className="rights">&copy;Transford chemist {myYear}, all rights Reserved</p>
          <p className="mytexts">We Are here for you</p>
        </div>
      </div>
    )
  }