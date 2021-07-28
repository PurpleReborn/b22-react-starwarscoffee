import '../App.css'
import React, { Component } from 'react'
import ceklis from '../assets/assets1/ceklis.png'
import ckls from '../assets/assets1/ckls.png'
import img1 from '../assets/assets1/img-1.png'
import img2 from '../assets/assets1/img-2.png'
import img3 from '../assets/assets1/img-3.png'
import vector from '../assets/assets1/vector.png'
import netflix from '../assets/assets1/netflix.png'
import amazon from '../assets/assets1/amazon.png'
import dc from '../assets/assets1/dc.jpg'
import spotify from '../assets/assets1/spotify.jpg'
import reddit from '../assets/assets1/reddit.png'
import people1 from '../assets/assets1/people1.png'
import people2 from '../assets/assets1/people2.png'
import people3 from '../assets/assets1/people3.png'
import img from '../assets/assets1/img.png'
import Footer from '../components/Footer'



export default class Home extends Component {
    render() {
        return (
            <div>
                

        <main>
        
            



        <section className="satu bg">

                    <div className="flex justify-between  md:px-36 sm:px-4 flex-row px-1">
                    <div className="flex-2">
                        <div id="start" className="text-white pt-20">
                            Start Your Day with <br /> Coffee and Good Meals
                        </div>
                        

                        <div id="start2" className="text-white pt-6 " >
                            We provide high quality beans, good taste, and healthy <br />
                            meals made by love just for you. Start your day with us <br />
                            for a bigger smile!
                        </div>

                        <div className=" py-8">
                        <button id="btn2" className="bg-yellow-400 hover:bg-yellow-200 font-bold py-4 px-16 rounded">
                            Get Started
                        </button>
                        </div>
                    </div>

                    <div className="pt-5">
                        <div className="relative">
                        <i className="fas fa-search text-black mt-3 ml-5 absolute"></i>
                        <input type="text" placeholder="Search" className="rounded-full h-10 w-60 pl-14 hover:bg-gray-200" />
                        </div>
                    </div>

                    </div>


                    
                        <div id="rect" className="flex shadow-2xl bg-white h-48 rounded-md divide-x py-10">

                            <div className="flex flex-1 justify-center items-center">
                                <div className="flex flex-row space-x-5">
                                    <div className="flex primary w-14 h-14 rounded-full justify-center items-center">
                                        <i className="fas fa-user text-yellow-400 hover:text-yellow-700"></i>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-2xl">90+</div>
                                        <div className=" font-normal text-base" >Staff</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 justify-center items-center">
                                <div className="flex flex-row space-x-5">
                                    <div className="flex primary w-14 h-14 rounded-full justify-center items-center">
                                        <i className="fas fa-map-marker-alt text-yellow-400 hover:text-yellow-700"></i>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-2xl">30+</div>
                                        <div className="text-base font-normal" >Stores</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 justify-center items-center">
                                <div className="flex flex-row space-x-5">
                                    <div className="flex primary w-14 h-14 rounded-full justify-center items-center">
                                        <i className="fas fa-heart text-yellow-400 hover:text-yellow-700"></i>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-2xl">800+</div>
                                        <div className="text-base font-normal" >Customers</div>
                                    </div>
                                </div>
                            </div>

                        </div>
        </section>

              
        <section id="bg3" className=" flex justify-around py-30 pb-48">
              

                    <div className="pt-48">
                    <img src={img} alt="img" />
                    </div>
                    <div className="pt-60">
                        <span className="text-4xl font-semibold ">We Provide Good Coffee <br /> and Healthy Meals </span> <br /> <br />
                        You can explore the menu that we provide with fun and <br /> have their own taste and make your day better.
                        <br />
                        <br />
                        <div className="leading-10">

                            <div className="flex items-center">
                            <img src={ceklis} alt="Ceklis" />
                            <div className="pl-3">High quality beans</div>
                            </div>

                            <div className="flex items-center">
                            <img src={ceklis} alt="Ceklis" />
                            <div className="pl-3">Healthy meals, you can request the ingredients</div>
                            </div>

                            <div className="flex items-center">
                            <img src={ceklis} alt="Ceklis" />
                            <div className="pl-3">Chat with our staff to get better experience for ordering</div>
                            </div>

                            <div className="flex items-center">
                            <img src={ceklis} alt="Ceklis" />
                            <div className="pl-3">Free member card with a minimum purchase of IDR 200.000.</div>
                            </div>

                        </div>
                    </div>
               
        </section> 


        <section className="bg-gray-50">
                    
                    <div className="text-black text-center text-4xl font-medium leading-12 pt-20">Here is People’s Favorite <br />
                        <span className="text-black text-center text-base font-normal">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</span>
                    </div>

                    <div className="flex justify-around mx-10 pt-24 pb-36">


                    <div className="border-4 w-80 box5 rounded-lg pt-16 bg-white hover:border-yellow-700">
                        <img src={img1} alt="img1"  className="mx-auto rounded-full" />

                        <div className="text-center pt-20 text-lg font-medium">Hazelnut Latte</div>

                            <div className="pt-7 flex px-16">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">HazelnutSyrup</div>
                            </div>

                            <div className="pt-5 flex px-16">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">Wanilla Whipped Cream</div>
                            </div>

                            <div className="pt-5 flex px-16">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">Ice / Hot</div>
                            </div>

                            <div className="pt-5 flex px-16 pb-2">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">Sliced Banana on Top</div>
                            </div>

                            
                            <div className="text-2xl font-medium text-center pt-32">IDR 25.000</div>
                            <div className="flex">
                            <button className=" mt-5 mx-auto text-base font-bold bg-white hover:bg-yellow-400 text-yellow-700 font-semibold py-3 px-12 border border-yellow-400 rounded-full">
                                Order Now
                            </button>
                            </div>
                    </div>


                    <div className="border-4 w-80 box5 rounded-lg pt-16 bg-white hover:border-yellow-700">
                        <img src={img2} alt="img2"  className="mx-auto rounded-full" />

                        <div className="text-center pt-20 text-lg font-medium">Pinky Promise</div>

                        <div className="pt-7 flex px-16">
                        <img src={ckls} alt="ckls"  className="w-5 h-4" />
                        <div className="pl-3 text-sm">1 Shot of Coffee</div>
                        </div>

                        <div className="pt-5 flex px-16">
                        <img src={ckls} alt="ckls"  className="w-5 h-4" />
                        <div className="pl-3 text-sm">Vanilla Whipped Cream</div>
                        </div>

                        <div className="pt-5 flex px-16">
                        <img src={ckls} alt="ckls"  className="w-5 h-4" />
                        <div className="pl-3 text-sm">Chocolate Biscuits</div>
                        </div>

                        <div className="pt-5 flex px-16">
                        <img src={ckls} alt="ckls"  className="w-5 h-4" />
                        <div className="pl-3 text-sm">Strawberry Syrup</div>
                        </div>

                        <div className="pt-5 flex px-16">
                        <img src={ckls} alt="ckls"  className="w-5 h-4" />
                        <div className="pl-3 text-sm">Sliced strawberry on Top</div>
                         </div>

                        
                        <div className="text-2xl font-medium text-center pt-24">IDR 25.000</div>
                        <div className="flex">
                        <button className=" mt-5 mx-auto text-base font-bold bg-white hover:bg-yellow-400 text-yellow-700 font-semibold py-3 px-12 border border-yellow-400 rounded-full">
                            Order Now
                        </button>
                        </div>

                    </div>

                    <div className="border-4 w-80 box5 rounded-lg pt-16 bg-white hover:border-yellow-700">
                        <img src={img3} alt="img3"  className="mx-auto rounded-full" />

                        <div className="text-center pt-20 text-lg font-medium">Chicken Wings </div>

                        <div className="pt-7 flex px-16">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">1 Shot of Coffee</div>
                            </div>
    
                            <div className="pt-5 flex px-16">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">Vanilla Whipped Cream</div>
                            </div>
    
                            <div className="pt-5 flex px-16">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">Chocolate Biscuits</div>
                            </div>
    
                            <div className="pt-5 flex px-16">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">Strawberry Syrup</div>
                            </div>
    
                            <div className="pt-5 flex px-16">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">Sliced strawberry on Top</div>
                            </div>

                            <div className="pt-5 flex px-16">
                            <img src={ckls} alt="ckls"  className="w-5 h-4" />
                            <div className="pl-3 text-sm">Sliced strawberry on Top</div>
                            </div>
    
                            
                            <div className="text-2xl font-medium text-center pt-14">IDR 25.000</div>
                            <div className="flex">
                            <button className=" mt-5 mx-auto text-base font-bold bg-white hover:bg-yellow-400 text-yellow-700 font-semibold py-3 px-12 border border-yellow-400 rounded-full">
                                Order Now
                            </button>
                            </div>
    


                    </div>

                    </div>

                    <div className="text-center text-4xl font-medium pb-3">Visit Our Store in the </div>
                    <div className="text-center text-4xl font-medium">Spot on the Map Below</div>

                    <div className="pt-5 text-center text-base leading-7 pb-40" >
                        See our store in every city on the spot and spen your good day there. See <br /> you soon!</div>
        </section>





        <section>     
                    <div className="flex justify-center pb-24">
                    <img src={vector} alt="vector" className="vector" />
                    </div>

                    <div className="text-center text-4xl font-medium pb-20">Our Partner</div>

                    <div className="flex justify-around mx-36">
                    <img src={netflix} alt="netflix" className="w-40 h-12" />
                    <img src={amazon} alt="amazon" className="w-40 h-24" />
                    <img src={dc} alt="dc" className="w-30 h-24" />
                    <img src={spotify} alt="spotify" className="w-32 h-32" />
                    <img src={reddit} alt="reddit" className="w-28 h-28" />
                    </div>
                    
                    <div className="text-center text-4xl pt-20 font-medium">
                        Loved by Thousands of <br /> Happy Customer
                    </div>
                    <div className="text-center pt-10 font-normal text-base pb-16" >
                        These are the stories of our customers who have visited us with great <br /> pleasure.
                    </div>
        </section>  



        <section className="slider pl-40 pb-20 ">
                    
                    <div className="flex ">

                        
                        <div className=" border-4 w-96 h-56  rounded-lg bg-white hover:border-yellow-700">
                            
                            <div className="pt-6 flex justify-around">

                                <div className="flex">
                                <img src={people1} alt="people1" className=" w-12 h-12" />
                                <div className="text-lg font-medium pl-5">Viezh Robert <br /> <span className="text-sm ">Warsaw, Poland</span></div>
                                </div>

                            <div>4.5 <span className="text-yellow-400 text-2xl">&#9733;</span> </div>
                            </div>

                            <div className="w-96 mx-auto pt-4 font-normal text-base">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</div>
                        </div>
                        

                        <div className="border-4 w-96 h-56  rounded-lg bg-white hover:border-yellow-700 mx-7">
                            <div className="pt-6 flex justify-around">

                                <div className="flex">
                                <img src={people2} alt="people2" className=" w-12 h-12" />
                                <div className="text-lg font-medium pl-5">Yessica Christy <br /> <span className="text-sm ">Shanxi, China</span></div>
                                </div>

                            <div>4.5 <span className="text-yellow-400 text-2xl">&#9733;</span> </div>
                            </div>

                            <div className="w-96 mx-auto pt-4 font-normal text-base">“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</div>
                        </div>

                        <div className="border-4 w-96 h-56  rounded-lg bg-white hover:border-yellow-700 mx-7">
                            <div className="pt-6 flex justify-around">

                                <div className="flex">
                                <img src={people3} alt="people3" className=" w-12 h-12" />
                                <div className="text-lg font-medium pl-5">Kim Young Jou <br /> <span className="text-sm ">Seoul, South Korea</span></div>
                                </div>

                            <div>4.5 <span className="text-yellow-400 text-2xl">&#9733;</span> </div>
                            </div>

                            <div className="w-96 mx-auto pt-4 font-normal text-base">“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</div>
                        </div>

                        <div className="border-4 w-96 h-56  rounded-lg bg-white hover:border-yellow-700 mx-7">
                            <div className="pt-6 flex justify-around">

                                <div className="flex">
                                <img src={people3} alt="people3" className=" w-12 h-12" />
                                <div className="text-lg font-medium pl-5">Kim Young Jou <br /> <span className="text-sm ">Seoul, South Korea</span></div>
                                </div>

                            <div>4.5 <span className="text-yellow-400 text-2xl">&#9733;</span> </div>
                            </div>

                            <div className="w-96 mx-auto pt-4 font-normal text-base">“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</div>
                        </div>


                    </div>
        </section>




                    <section className="flex justify-between">
                        <div className="flex pb-44">
                        <div className="w-9 h-3 bg-yellow-800 rounded-3xl ml-36 mx-2"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full mx-2"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full mx-2"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full mx-2"></div>
                        </div>
                        
                        <div className="flex pr-80">

                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-yellow-900 hover:text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-900 h-14 w-14 hover:text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                              </svg>
                        </div>

                        </div>
                    </section>
                    
                    


                    

                        <div className="flex flex-row justify-center">
                        <div id="rect2" className="flex justify-between items-center shadow-2xl bg-white h-48 rounded-md px-20 ">
                            <div className="leading-10"> Check our promo <br /> today! <br /> 
                             <span className="text-base font-normal" >Let's see the deals and pick yours!</span></div>
                
                            <a href="promo.html"><div><button className=" mt-5 mx-auto text-base font-bold bg-yellow-400 hover:bg-yellow-200 text-yellow-700 font-semibold py-4 px-20 border border-yellow-400 rounded-lg shadow-2xl ">
                             See Promo
                         </button></div></a>
                         </div>
                        </div>

                        
                
                        
                
                  
                
                   



    </main>
    <div className="bg-gray-100 h-16">
    </div>
    <Footer />
    
            </div>

        )
    }
}


