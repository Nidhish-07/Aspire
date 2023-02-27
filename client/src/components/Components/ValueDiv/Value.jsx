import React from 'react'
// import styles from "../style.js";

// const styles = {
//     // boxWidth: "xl:max-w-[1280px] w-full",
  
//     // heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
//     // paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
//     // flexCenter: "flex justify-center items-center",
//     // flexStart: "flex justify-center items-start",
  
//     // paddingX: "sm:px-16 px-6",
//     // paddingY: "sm:py-16 py-6",
//     // padding: "sm:px-16 px-6 sm:py-12 py-4",
  
//     // marginX: "sm:mx-16 mx-6",
//     // marginY: "sm:my-16 my-6",
//   };




const Data = [
    {
        id: "stats-1",
        title: "Job Available",
        value: "3800+",
      },
      {
        id: "stats-2",
        title: "Upcoming Vacancies",
        value: "230+",
      },
      {
        id: "stats-3",
        title: "Active Users",
        value: "$230M+",
      },

]



const Stats  = () =>{
    return (
        <div> 
              <section className= "flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
           
                {
                    Data.map(({id,title,value})=>{
                        return (

                          
    
      <div key={id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-[#000}">
          {value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {title}
        </p>
      </div>
   


                            
                        )
                    })
                }
            </section>

        </div>

    )
}


export default Stats;