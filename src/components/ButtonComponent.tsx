import React from 'react'
import { Button } from '@mui/material'


type Props = {
  title: string
  type?: string
  style?: React.CSSProperties
  onClick?: (args: any) => void;
  isActive?: boolean
}

const ButtonComponent = (props: Props) => {
  

  const styleButton = (type: string, isActive: boolean) : React.CSSProperties => {
    if (type === 'tabButton')
      return {
        width: '200px',
        height: '40px',
        padding: '10px 20px',
        borderRadius: '20px',
        fontSize: '16px',
        fontFamily: 'Open Sans',
        fontWeight: isActive? '700':'400',
        color: isActive? '#FFFFFF': '#161F29',
        background: isActive?'#161F29':'rgba(255, 255, 255, 0.5)',
        border: '1px solid rgba(22, 31, 41, 0.5)',
        textTransform: 'capitalize'
      }
    if(type=== 'tabButton2') {
      return{
        width: '180px',
        height: '42px',
        padding: isActive? '10px' : '10px 20.5',
        background: isActive? '#ECF8FF' : '#F3F3F4',
        boxShadow: isActive? '1px 2px 3px rgba(22, 31, 41, 0.15)' : '',
        fontFamily: 'Open Sans',
        fontSize: '16px',
        fontWeight: isActive? '700':'400',
        color: isActive? '#009EFA' : '#161F29',
        textTransform: 'capitalize',
      }
    } 
  
    if (type === 'action')
      return {
        width: '100px',
        height: '36px',
        padding: '12px 20px',
        borderRadius: '2px',
        fontFamily: 'Open Sans',
        fontSize: '12px',
        fontWeight: '600',
        background: 'linear-gradient(360deg, #AE061A -64.72%, #FF5407 100%)',
        boxShadow: '0.5px 1px 3px rgba(22, 31, 41, 0.2)',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
  
    if (type === 'more-less')
      return {
        width: '100px',
        height: '36px',
        padding: '12px 20px',
        borderRadius: '2px',
        fontFamily: 'Open Sans',
        fontSize: '12px',
        fontWeight: '600',
        background: '#009EFA',
        boxShadow: '0.5px 1px 3px rgba(22, 31, 41, 0.2)',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
  
    if(type==='select-custom'){
      return {
        padding: '10px',
        width: '244.17px',
        height: '39px',      
        background: isActive? '#57CE66' : '#FFFFFF',
        boxShadow: isActive? '1px 1px 3px rgba(22, 31, 41, 0.2)' : 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.1)',
        fontFamily: 'Open Sans',
        fontSize: '14px',
        fontWeight: isActive? '700' : '400',
        color: isActive? '#FFFFFF' : '#161F29',
        border: '0.5px solid #161F29',
        textTransform: 'capitalize'
      }
    }
    if(type==='select-custom-tab'){
        return{
          padding: '10px',
          width: '307px',
          height: '39px',      
          background: isActive? '#ECF8FF' : '#F3F3F4',
          
          fontFamily: 'Open Sans',
          fontSize: '14px',
          fontWeight: isActive? '700' : '400',
          color: isActive? '009EFA' : '#161F29',
          border: '0.5px solid #161F29',
          textTransform: 'capitalize'
        }
    }
  
    if (type === 'go')
      return {
        width: '45px',
        height: '36px',
        padding: '10px',
        borderRadius: '3px',
        fontFamily: 'Open Sans',
        fontSize: '16px',
        fontWeight: '700',
        background: '#009EFA',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
  
    if (type === 'proceed') {
      return {
        width: '125px',
        height: '42px',
        padding: '10px 19px',
        borderRadius: '3px',
        fontFamily: 'Open Sans',
        fontSize: '16px',
        fontWeight: '700',
        background: '#009EFA',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
    }
    if(type === 'apply'){
      return{
        padding: '5px 20px',
        width: '96.88px',
        height: '26px',
        background: '#57CE66',
        fontFamily: 'Open Sans',
        fontWeight: '700',
        fontSize: '12px',
        borderRadius: '5px',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
    }
    if(type === 'cancel'){
      return{
        padding: '5px 20px',
        width: '96.88px',
        height: '26px',
        background: '#F3F3F4',
        borderRadius: '5px',
        fontFamily: 'Open Sans',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
        textTransform: 'capitalize',
        color:'#161F29'
      }
    }

    else{
      return{
        width: '100px',
        height: '36px',
        padding: '12px 20px',
        borderRadius: '2px',
        fontFamily: 'Open Sans',
        fontSize: '12px',
        fontWeight: '600',
        background: '#009EFA',
        boxShadow: '0.5px 1px 3px rgba(22, 31, 41, 0.2)',
        color: '#FFFFFF',
        textTransform: 'capitalize'
      }
    }
  }

  return (
    <div>
      <Button
        style = {styleButton(props.type || '', props.isActive || false) || {}}
        onClick= {props.onClick
        }
      >
          {props.title}
       
      </Button>
    </div>
  )
}

export default ButtonComponent;

ButtonComponent.defaultProps = {
  title: "",
  type: "",
  style: {},
  onClick: () => null,
  isActive: false
}