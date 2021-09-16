import '../App.css'
import React, { useEffect, useState } from 'react'
import imgLeft from '../assets/assets3/img-left.png'
import img2 from '../assets/assets3/img-2.png'
import Footer from '../components/Footer'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import qs from 'querystring'
import Swal from 'sweetalert2'

import { getItems,searchItems} from '../redux/actions/items'




function Product(props) {

    const parseQuery = (str) => {
        return qs.parse(str.slice('1'))
      }
      const location = useLocation()
      const urlSearch = parseQuery(location.search).search

    // componentDidMount() {
    //     this.props.getItems();
    // }


    const [searchTemp, setSearchTemp] = useState(urlSearch ? urlSearch : '')
    const [search, setSearch] = useState(urlSearch ? urlSearch : '')
    const [sort, setSort] = useState('name')
    const { data } = props.items

    useEffect(() => {
        if(urlSearch){
          props.searchItems(searchTemp, sort)
        }else{
          props.getItems()
        }
      }, [])

      const history = useHistory()

      const onSearch = (e) => {
        // if(e.key === 'Enter'){
            e.preventDefault()
          history.push(`/product?search=${searchTemp}&sort[${sort}]`)
          setSearchTemp(search)
          setSearch(searchTemp)
          props.searchItems(searchTemp, sort)
        // }else{
        //     console.log('ini')
        // }
        console.log(search)
      }

      const loadMore = () => {
        const { nextPage } = props.items.pageInfo
        if (nextPage !== null) {
          props.getItems(nextPage)
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'No more items',
                showConfirmButton: false,
                timer: 2000,
                iconColor:'#6A4029',
              })
        }
      }

      useEffect(() => {
        setSearchTemp(urlSearch)
      },[location.search])

        // const {data} = this.props.items
        return (
            <div className="flex flex-col divide-y-2">
                
                

            
            <div className="flex flex-col md:flex-row divide-x-2 ">

        <div className="flex-col flex-2 md:pr-16" >
            <div className="font-bold text-2xl text-yellow-900 mt-6 mb-10 text-center">Promo for you</div>
            <div className="mb-10  text-center font-medium">Coupons will be updated every weeks. <br /> Check them out! </div>
                <div className="flex flex-row items-center justify-center">

                    <div className="flex flex-col divide-y-2 divide-black space-y-5 divide-dashed box1 bg-yellow-200  rounded-3xl md:ml-20 text-center" >

                        <div className="flex-1">
                            <div className="flex  justify-center pt-4 md:pt-16">
                            <img src={imgLeft} alt="img-left" className="md:w-32 md:h-32 w-24 h-24 rounded-full" />
                            </div>
                            <div className="mt-2 text-xl font-bold text-black">Beef Spaghetti <br />20% OFF</div>
                            <div className="md:w-64 w-48 ml-auto mr-auto ">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</div>
                        </div>

                        <div className="flex-1 pt-4">
                            <div className="text-base">COUPON CODE</div>
                            <div className="font-bold text-xl md:text-3xl mb-3 mt-3">FNPR15RG</div>
                            <div className="text-xs">Valid untill October 10th 2020</div>
                        </div>


                    </div>

                    <div className=" w-7 md:h-96 h-72 bg-black rounded-r-3xl mt-auto mb-auto"  ></div>
                    <div className=" w-5  md:h-80 h-48 bg-yellow-800  rounded-r-3xl mt-auto mb-auto"  ></div>
                </div>

                <div className="flex mr-auto ml-auto text-center flex flex-row justify-center" >
                    <button className="w-40 md:w-72  h-12 md:h-16 text-base md:text-xl font-bold bg-yellow-800 text-white hover:bg-yellow-200 font-bold rounded-2xl  mt-10">
                        Apply Coupon
                    </button>
                </div>
                <div className="mt-24 md:mx-0 mx-10 md:ml-14 leading-6 pb-10">
                    <span className="font-semibold">Terms and Condition </span> <br />
                    1. You can only apply 1 coupon per day <br />
                    2. It only for dine in <br />
                    3. Buy 1 get 1 only for new user <br />
                    4. Should make member card to apply coupon 
                </div>
        </div>

        <div className=" flex-1">
            <div className="flex justify-around space-x-4 md:space-x-0 mx-10 md:ml-28 md:mr-28 mt-8 mb-10" >
                <div className="hover:text-yellow-900">Favorite Product</div>
                <div className="hover:text-yellow-900">Coffee</div>
                <div className="hover:text-yellow-900">Non Coffee</div>
                <div className="hover:text-yellow-900">Foods</div>
                <div className="hover:text-yellow-900">Add-on</div>
            </div>

            <div className="pt-5 flex-1 items-center">
                        <div className="flex md:relative md:flex-row flex-col items-center">
                          <div>
                        <i className="fas fa-search text-black  mt-3 ml-5 absolute"></i>
                            <input 
                            // onKeyDown={onSearch}
                            onChange={(e) => setSearchTemp(e.target.value)}
                            value={searchTemp}
                            type="text" placeholder="Search" 
                            className="rounded-full h-10 w-44 md:w-60 pl-12 md:ml-20 bg-gray-200 hover:bg-gray-300" 
                            />
                            </div>

                        <div className="my-8 space-x-6 md:space-x-0 md:my-0">
                          <select
                         onChange={(e) => setSort(e.target.value)}
                         value={sort}
                         className="text-center w-20 md:w-28 rounded-lg h-10 md:ml-16  bg-gray-100 md:text-base text-xs"  id="sort">
                           <option className="md:text-base text-xs" value="name">Name</option>
                            <option className="md:text-base text-xs" value="price">Price</option>
                          </select>
                          <button onClick={onSearch} className=" text-white rounded-lg w-20 h-10 md:ml-10 bg-yellow-800">Search</button>
                        </div>

                        </div>
            </div>

        

            
            <div className="grid grid-cols-2 mx-10 md:mx-0  md:grid-cols-4  gap-20 md:mr-20 md:ml-20 mt-28 ">

            {data.map(items => {
            return(

            <Link  className="no-underline" to={`/product/${items.id}`}>
            <div key={items.id.toString()} className="item1 border-2 border-transparent border-3xl rounded-3xl hover:border-yellow-400">
            <div className="w-28 md:w-40 h-32 md:h-52 bg-white rounded-3xl shadow-2xl ">
            <div>
                <img src={img2} alt="img2" className="w-20 md:w-32 h-20 md:h-32 rounded-full -mt-10 ml-4 absolute" />
            </div>

            <div className="text-center pt-14 md:pt-24 w-20 mx-auto leading-5 font-black text-black no-underline text-lg md:text-xl ">{items.name}</div>

            <div className="text-center mt-1 text-yellow-900 text-base font-bold">IDR.{items.price.toLocaleString('en')}</div>

            </div>
            </div>
            </Link>
            )

            })}



            </div>

            <button className="bg-yellow-400 my-10 ml-20 px-11 py-2 rounded-md" onClick={loadMore}>Load more...</button>



        </div>
        </div>


            <Footer />

            </div>
        )
    }


const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = {getItems,searchItems}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
