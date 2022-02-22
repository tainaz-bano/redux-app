import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
// import actionCreators from '../State/index'
import * as actionCreators from '../State/Action Creators/index'

const Shop = () => {
   const dispatch = useDispatch()
   const {deposit, withdraw}= bindActionCreators(actionCreators, dispatch)
  return (
    <div >
        <h2 className='my-3 mx-2'>Deopsit/Withdraw</h2>
        <button className="btn btn-dark mx-2" onClick={()=>{withdraw(100)}}>-</button>
          Update Balance
        <button className="btn btn-dark mx-2" onClick={()=>{deposit(100)}}>+</button>
        
    </div>
  )
}

export default Shop